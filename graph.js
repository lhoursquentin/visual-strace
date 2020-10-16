var currentTimeout;
var remainingTasks = [];

const run = (tasks) => {
  const [[fn, timeout], ...nextTasks] = tasks;
  remainingTasks = tasks;
  currentTimeout = setTimeout(() => {
    fn();
    if (nextTasks.length > 0) {
      run(nextTasks);
    }
  }, speed * timeout * 1000); // timeout variable unit is seconds
};

const showGraph = (straceOutput) => {
  var cy = cytoscape({
    container: document.getElementById('cy'),
    style: [ // the stylesheet for the graph
      {
        selector: 'node',
        style: {
          'background-color': 'lavender',
          label: 'data(id)',
        },
      },

      {
        selector: 'edge',
        style: {
          width: 3,
          'line-color': '#ccc',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier',
        },
      },
    ],
  });

  const fdToPid = {
    write: {},
    read: {},
  };

  const options = {
    name: 'breadthfirst',
    animate: true,
    spacingFactor: 0.75,
    nodeDimensionsIncludeLabels: true,
    roots: [],
  };

  const regexSlice = (input, regex) => {
    const result = input.match(regex);
    return result ? [
      input.slice(result[0].length),
      result[1],
    ] : [
      input,
      '',
    ];
  };

  const exitHandler = (pid, { exit }) => {
    const success = exit.code === '0';
    const element = cy.getElementById(pid);
    if (!success) {
      element.style({ label: `${element.style().label} (${exit.code})` });
    }
    element.animate({
      style: {
        backgroundColor: (
          success
            ? 'mediumaquamarine'
            : isNaN(parseInt(exit.code))
              ? 'darkslateblue' // killed by a signal
              : 'tomato' // non zero exit code
        ),
      },
    }, {
      duration: 100,
    });
  };

  const syscallHandler = (pid, syscall, { args, returnValue, io }) => {
    if (forkSyscalls.has(syscall)) {
      const father = cy.getElementById(pid);
      cy.add([
        {
          group: 'nodes',
          data: { id: returnValue },
          renderedPosition: { ...father.renderedPosition },
        },
        {
          group: 'edges',
          data: {
            id: `${pid}${returnValue}`,
            source: pid,
            target: returnValue,
          },
        },
      ]);
      cy.layout(options).run();
    } else if (syscall === 'execve') {
      if (options.roots.length === 0) {
        options.roots.push(pid)
        cy.add([
          {
            group: 'nodes',
            data: { id: pid },
          },
        ]);
        cy.layout(options).run();
      }
      const basename = regexSlice(args[0], /".*\/(.*)"/)[1];
      cy.getElementById(pid).style({ label: basename });
    } else if (syscall === 'read') {
      if (!io) {
        return;
      }
      const { source, content } = io;
      // FIXME not accurate, this always creates a write/read edge for all the
      // members of fdToPid, will need to revisit this
      fdToPid.write[source]?.forEach(originalPid => {
        const id = `pipe:${originalPid},${pid}`;
        const style = {
          'target-arrow-color': 'coral',
          'line-style': 'dashed',
          'line-color': 'coral',
          width: 2,
        };
        cy.add([{
          group: 'edges',
          data: {
            id,
            source: originalPid,
            target: pid,
          },
        }]);
        cy.getElementById(id).style(style);
      });
    } else if (syscall === 'write') {
      // TODO
    }
  };

  const pidSet = new Set();
  const forkSyscalls = new Set(['clone', 'fork', 'vfork']);
  const straceInfo = new Map();
  const tasks = [];
  let totalTime = 0;
  let additionalTimeDiff = 0;

  straceOutput.split('\n').forEach(line => {
    const initialLine = line;
    let pid, syscall, timeDiffStr;
    [line, pid] = regexSlice(line, /^(\d+)/);

    const pidInfo = (() => {
      if (!straceInfo.has(pid)) {
        straceInfo.set(pid, {
          syscalls: [],
          pendingSyscalls: new Map(),
          exit: {
            code: undefined,
            time: undefined,
          },
        });
      }
      return straceInfo.get(pid);
    })();

    line = line.trim();
    [line, timeDiffStr] = regexSlice(line, /^(\d+\.\d+)/);
    if (timeDiffStr === '') {
      console.warn(`Failed to parse time diff, ignoring: "${line}"`);
      return;
    }

    const timeDiff = parseFloat(timeDiffStr);
    totalTime += timeDiff;
    [line, syscall] = regexSlice(line, /^ (\w+)\(/);
    let resumed = false;
    if (!syscall) { // either process exit or resumed syscall case
      if ((
        pidInfo.exit.code = (
          regexSlice(line, /^ \+\+\+ exited with (\d+) \+\+\+/)[1] ||
          regexSlice(line, /^ \+\+\+ killed by SIG([^ ]+) \+\+\+/)[1]
        )
      )) {
        pidInfo.exit.time = totalTime;
        tasks.push([
          () => exitHandler(pid, pidInfo),
          timeDiff + additionalTimeDiff,
        ]);
        additionalTimeDiff = 0;
        return;
      } else if (([line, syscall] = regexSlice(line, /^ <\.\.\. (\w+) resumed> */)) && syscall) {
        resumed = true;
      } else {
        console.warn(
          'Time diff found, but no syscall or exit message parsed, ignoring:',
          `"${line}"`,
        );
        additionalTimeDiff = timeDiff + additionalTimeDiff;
        return;
      }
    }

    const unfinished = Boolean(line.match(/.*<unfinished \.\.\.>$/));

    const syscallInfo = (() => {
      const initialInfo = {};
      if (unfinished) {
        if (pidInfo.pendingSyscalls.has(syscall)) {
          console.error('pending syscall conflict', pid, syscall);
        } else {
          pidInfo.pendingSyscalls.set(syscall, initialInfo);
        }
        return pidInfo.pendingSyscalls.get(syscall);
      } else if (resumed) {
        const info = pidInfo.pendingSyscalls.get(syscall);
        if (info === undefined) {
          console.error(
            'Could not find unfinished syscall for resumed one', pid, syscall);
        }
        pidInfo.pendingSyscalls.delete(syscall);
        pidInfo.syscalls.push([syscall, info]);
        return info;
      }
      pidInfo.syscalls.push([syscall, initialInfo]);
      return initialInfo;
    })();

    if (syscall) {
      // eat everything up to parenthesis or < for unfinished calls
      const argsString = regexSlice(line, /(.*)[<)]/)[1];
      if (argsString) {
        // FIXME splitting on ', ' is unsafe considering it can be contained in
        // strings and arrays
        syscallInfo.args = (syscallInfo.args || []).concat(argsString.split(', '));
      }
    }

    if (!unfinished) {
      syscallInfo.returnValue = regexSlice(line, /.* = (-?\d+)/)[1];
      if (forkSyscalls.has(syscall)) {
        pidSet.add(syscallInfo.returnValue);
        tasks.push([
          () => syscallHandler(pid, syscall, syscallInfo),
          timeDiff + additionalTimeDiff,
        ]);
      } else if (syscall === 'read' || syscall === 'write') {
        const pipeTarget = regexSlice(syscallInfo.args[0], /\d+<(pipe:\[\d+\])/)[1];
        if (pipeTarget) {
          syscallInfo.io = {
            source: pipeTarget,
            content: regexSlice(syscallInfo.args[1], /"(.*)"/)[1],
          };
          tasks.push([
            () => {
              if (fdToPid[syscall][pipeTarget] === undefined) {
                fdToPid[syscall][pipeTarget] = [ pid ];
              } else {
                fdToPid[syscall][pipeTarget].push(pid);
              }
              syscallHandler(pid, syscall, syscallInfo)
            },
            timeDiff + additionalTimeDiff,
          ]);
        }
        additionalTimeDiff = 0;
      } else {
        tasks.push([
          () => syscallHandler(pid, syscall, syscallInfo),
          timeDiff + additionalTimeDiff,
        ]);
      }
    } else {
      // no effective action for now, we need to take the current time interval
      // into account for the next one.
      additionalTimeDiff = timeDiff + additionalTimeDiff;
    }

    syscallInfo.started = totalTime;

    if (resumed) {
      syscallInfo.ended = totalTime;
    } else {
      syscallInfo.ended = syscallInfo.started; // not accurate
    }
  });

  if (speedSetupNeeded) {
    setupSpeedInputs(totalTime, straceInfo.size);
    speedSetupNeeded = false;
  }

  run(tasks);
};

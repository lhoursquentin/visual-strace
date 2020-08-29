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
    elements: [ // list of graph elements to start with
      {
        data: { id: 'root' },
      },
    ],

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

  const options = {
    name: 'breadthfirst',
    animate: true,
    spacingFactor: 0.75,
    nodeDimensionsIncludeLabels: true,
    roots: ['root'],
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
    if (!forkPidSet.has(pid)) {
      pid = 'root';
    }
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

  const syscallHandler = (pid, syscall, { path, returnValue }) => {
    if (!forkPidSet.has(pid)) {
      pid = 'root';
    }
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
      const basename = regexSlice(path, /.*\/(.*)/)[1];
      cy.getElementById(pid).style({ label: basename });
    }
  };

  const forkPidSet = new Set();
  const forkSyscalls = new Set(['clone', 'fork', 'vfork']);
  const straceInfo = new Map();
  const tasks = [];
  let totalTime = 0;
  let additionalTimeDiff = 0;

  straceOutput.split('\n').forEach(line => {
    let pid, timeDiff, syscall;
    [line, pid] = regexSlice(line, /^\[pid (\d+)\]/);
    if (!pid) {
      pid = 'root';
    }

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
    [line, timeDiff] = regexSlice(line, /^(\d+\.\d+)/);
    if (timeDiff === '') {
      console.warn(`Failed to parse time diff, ignoring: "${line}"`);
      return;
    }

    totalTime += parseFloat(timeDiff);
    [line, syscall] = regexSlice(line, /^ (\w+)/);
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
      } else if ((syscall = regexSlice(line, /^ <\.\.\. (\w+) resumed>/)[1])) {
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

    if (syscall === 'execve' && !resumed) {
      syscallInfo.path = regexSlice(line, /\("([^"]+)/)[1];
    }

    if (!unfinished) {
      syscallInfo.returnValue = regexSlice(line, /.* = (-?\d+)/)[1];
      if (forkSyscalls.has(syscall)) {
        forkPidSet.add(syscallInfo.returnValue);
      }
      tasks.push([
        () => syscallHandler(pid, syscall, syscallInfo),
        timeDiff + additionalTimeDiff,
      ]);
      additionalTimeDiff = 0;
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
    setupSpeedInputs(totalTime);
    speedSetupNeeded = false;
  }

  run(tasks);
};

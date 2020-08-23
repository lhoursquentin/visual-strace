var cy = cytoscape({

  container: document.getElementById('cy'), // container to render in

  elements: [ // list of graph elements to start with
    { // node a
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

const forkPidSet = new Set();
const speed = 200000;
const forkSyscalls = new Set(['clone', 'fork', 'vfork']);
const straceInfo = new Map();
let totalTime = 0;

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
    return;
  }

  totalTime += parseFloat(timeDiff);
  [line, syscall] = regexSlice(line, /^ (\w+)/);
  let resumed = false;
  if (!syscall) { // either process exit or resumed syscall case
    if ((pidInfo.exit.code = regexSlice(line, /^ \+\+\+ exited with (\d+) \+\+\+/)[1]) !== '') {
      pidInfo.exit.time = totalTime;
      return;
    }
    if ((syscall = regexSlice(line, /^ <\.\.\. (\w+) resumed>/)[1])) {
      resumed = true;
    } else {
      return;
    }
  }

  const unfinished = Boolean(line.match(/.*<unfinished \.\.\.>$/));

  const syscallInfo = (() => {
    if (unfinished) {
      if (pidInfo.pendingSyscalls.has(syscall)) {
        console.error('pending syscall conflict', pid, syscall);
      } else {
        pidInfo.pendingSyscalls.set(syscall, {});
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
    const info = {};
    pidInfo.syscalls.push([syscall, info]);
    return info;
  })();

  if (syscall === 'execve' && !resumed) {
    syscallInfo.path = regexSlice(line, /\("([^"]+)/)[1];
  }

  syscallInfo.started = totalTime;

  if (resumed) {
    syscallInfo.ended = totalTime;
  } else {
    syscallInfo.ended = syscallInfo.started; // not accurate
  }

  if (!unfinished) {
    syscallInfo.returnValue = regexSlice(line, /.* = (-?\d+)/)[1];
    if (forkSyscalls.has(syscall)) {
      forkPidSet.add(syscallInfo.returnValue);
    }
  }
});

straceInfo.forEach((
  {
    syscalls,
    exit,
  },
  pid,
) => {
  if (!forkPidSet.has(pid)) {
    pid = 'root';
  }
  syscalls.forEach((
    [
      syscall,
      {
        returnValue,
        started,
        ended,
        path,
      },
    ],
  ) => {
    setTimeout(() => {
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
    }, started * speed);
  });

  if (exit.code !== undefined) {
    setTimeout(() => {
      cy.getElementById(pid).animate({
        style: {
          backgroundColor:
              exit.code === '0'
                ? 'mediumseagreen'
                : 'tomato',
        },
      }, {
        duration: Math.min(speed / 10, 300),
      });
    }, exit.time * speed);
  }
});

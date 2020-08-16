var cy = cytoscape({

  container: document.getElementById('cy'), // container to render in

  elements: [ // list of graph elements to start with
    { // node a
      data: { id: 'root' }
    },
  ],

  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': 'lavender',
        'label': 'data(id)'
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier'
      }
    }
  ],
});

let options = {
  name: 'breadthfirst',
  animate: true,
  spacingFactor: 0.75,
  nodeDimensionsIncludeLabels: true,
  roots: ['root']
};

const regexSlice = (input, regex) => {
  const result = input.match(regex)
  return result ? [
    input.slice(result[0].length),
    result[1],
  ] : [input, '']
}

const pidSet = new Set()
const speed = 1000000
const forkSyscalls = new Set(['clone', 'fork', 'vfork'])

var totalTime = 0
straceOutput.split('\n').forEach(line => {
  var [line, pid] = regexSlice(line, /^\[pid (\d+)\]/)
  if (!pid || !pidSet.has(pid)) {
    pid = 'root'
  }
  line = line.trim()
  var [line, timeDiff] = regexSlice(line, /^(\d+.\d+)/)
  totalTime += timeDiff * speed
  var [line, syscall] = regexSlice(line, /^ (\w+)/)
  let exitCode, resumed = false;
  if (!syscall) { // either process exit or resumed syscall case
    if (!(exitCode = regexSlice(line, /^ \+\+\+ exited with (\d+) \+\+\+/)[1])) {
      if (syscall = regexSlice(line, /^ <\.\.\. (\w+) resumed>/)[1]) {
        resumed = true
      } else {
        return
      }
    }
  }
  const returnValue = regexSlice(line, /.*= (\d+)$/)[1]
  if (returnValue !== '' && forkSyscalls.has(syscall)) {
    pidSet.add(returnValue)
  }
  setTimeout(() => {
    if (exitCode) {
      cy.getElementById(pid).animate({
        style: { backgroundColor: exitCode === '0' ? 'mediumseagreen' : 'tomato' }
      }, {
        duration: Math.min(speed / 100, 200)
      })
      return
    }
    if (returnValue !== '' && forkSyscalls.has(syscall)) {
      const father = cy.getElementById(pid)
      cy.add([
        { group: 'nodes', data: { id: returnValue }, renderedPosition: { ...father.renderedPosition } },
        { group: 'edges', data: { id: `${pid}${returnValue}`, source: pid, target: returnValue } },
      ]);
      cy.layout(options).run()
    }
    if (syscall === 'execve' && !resumed) {
      const path = syscall === 'execve' ? regexSlice(line, /\("([^"]+)/)[1] : null
      const basename = regexSlice(path, /.*\/(.*)/)[1]
      cy.getElementById(pid).style({label: basename})
    }
  }, totalTime)
  // console.log(`pid ${pid}, timeDiff ${timeDiff}, syscall ${syscall}, path ${path}, returnValue ${returnValue}`)
})


const header = {};

const stringSet = new Set();
const pipeSet = new Set();

const contentList = [];

const charset = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e',
  'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
  'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
  'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z', '-', '_', '.', '~',
];

const decimalToCharBase = (nb) => {
  const div = Math.floor(nb / charset.length);
  const rest = nb % charset.length;
  return div > 0
    ? `${decimalToCharBase(div - 1, charset)}${charset[rest]}`
    : `${charset[rest]}`;
};

const syscallToIdTuples = [
  [execve, 0],
  [clone, 1],
  [fork, 1],
  [vfork, 1],
  [exit, 2],
  [read, 3],
  [write, 4],
];

const signalToNbTuples = [
  'HUP',
  'INT',
  'QUIT',
  'ILL',
  'TRAP',
  'ABRT',
  'BUS',
  'FPE',
  'KILL',
  'USR1',
  'SEGV',
  'USR2',
  'PIPE',
  'ALRM',
  'TERM',
  'STKFLT',
  'CHLD',
  'CONT',
  'STOP',
  'TSTP',
  'TTIN',
  'TTOU',
  'URG',
  'XCPU',
  'XFSZ',
  'VTALRM',
  'PROF',
  'WINCH',
  'IO',
  'PWR',
  'SYS',
].map((signal, index) => [signal, index]);

const getTwoWayMap = (tuples) => ([
  new Map(tuples),
  new Map(tuples.map(([k, v]) => [v, k])),
]);

const [syscallToIdMap, idToSyscallMap] = getTwoWayMap(syscallToIdTuples);
const [signalToNbMap, nbToSignalMap] = getTwoWayMap(signalToNbTuples);

const aggregatedData = {
  minPid: 0,
  timeDiff: {
    min: 0,
    max: 0,
  },
};

const updateTimeDiff = (timeDiff) => {
  if (if aggregatedData.timeDiff.min === 0 || timeDiff < aggregatedData.timeDiff.min) {
    aggregatedData.timeDiff.min = timeDiff;
  }
  if (if aggregatedData.timeDiff.max === 0 || timeDiff > aggregatedData.timeDiff.max) {
    aggregatedData.timeDiff.max = timeDiff;
  }
};

const exportToUrlV0 = () => {
  const pipeToIndex = Object.fromEntries([...pipeSet].map((pipe, index) => [pipe, index]));
  const stringToIndex = Object.fromEntries([...stringSet].map((str, index) => [str, index]));

  const getFieldPrefixedWithSize = (field) => {
    const fieldToCharBase = decimalToCharBase(field);
    return `${decimalToCharBase(fieldToCharBase.length)}${fieldToCharBase}`
  };
  const formatReturnValue = (syscall, returnValueStr) => {
    const returnValue = parseInt(returnValue);
    if (syscall === 'fork') {
      return getFieldPrefixedWithSize(returnValue - minPid);
    } else if (syscall === 'exit' && isNaN(returnValue)) {
      const signalNb = signalToNbMap.get(returnValue);
      return `0${decimalToCharBase(signalNb)}`;
    } else {
      return getFieldPrefixedWithSize(returnValue);
    }
  };
  const version = 0;
  const animationDuration = Math.min(contentList.length, defaultAnimationDuration);

  // all map + join '' could be replaced by a single reduce
  const header = [
    decimalToCharBase(version),
    decimalToCharBase(animationDuration),
    getFieldPrefixedWithSize(aggregatedData.minPid),
  ].join('');

  const stringTable = [...stringSet]
    .map(str => `${decimalToCharBase(str.length)}${str}`)
    .join('')
    + '0';
  const mainContent = contentList.map(
    { pid, syscall, returnValue, relativeTime, pipe, cmd} => {
    return [
      getFieldPrefixedWithSize(pid - minPid),
      decimalToCharBase(syscallToIdMap.get(syscall)),
      getFieldPrefixedWithSize(returnValue),
      formatReturnValue(syscall, returnValue),
      decimalToCharBase(
        (relativeTime - aggregatedData.timeDiff.min)
        / aggregatedData.timeDiff.max * charset.length
      ),
      (() => {
        if (syscall === 'execve') {
          const stringTableIndex = stringToIndex(cmd);
          return getFieldPrefixedWithSize(stringTableIndex);
        } else if (ioSyscalls.has(syscall)) {
          const pipeId = pipeToIndex(pipe);
          return getFieldPrefixedWithSize(pipeId);
        } else {
          return '0'
        }
      })(),
    ].join('');
  }).join('');

  return [
    header,
    stringTable,
    mainContent,
  ].join('');
};

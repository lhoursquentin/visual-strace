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
  const intNb = Math.floor(nb);
  const div = Math.floor(intNb / charset.length);
  const rest = intNb % charset.length;
  return div > 0
    ? `${decimalToCharBase(div - 1, charset)}${charset[rest]}`
    : `${charset[rest]}`;
};

// indexOf(char) is not very efficient, ideally use a hashmap with char to index
const charBaseToDecimal = (str) => [...str].reverse().reduce(
  (acc, char, index) =>
    acc
    + charset.indexOf(char) * charset.length ** index
    + (index && charset.length ** index)
, 0);

const syscallToIdTuples = [
  ['execve', 0],
  ['clone', 1],
  ['fork', 1],
  ['vfork', 1],
  ['exit', 2],
  ['read', 3],
  ['write', 4],
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
  if (aggregatedData.timeDiff.min === 0 || timeDiff < aggregatedData.timeDiff.min) {
    aggregatedData.timeDiff.min = timeDiff;
  }
  if (aggregatedData.timeDiff.max === 0 || timeDiff > aggregatedData.timeDiff.max) {
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
    const returnValue = parseInt(returnValueStr);
    if (forkSyscalls.has(syscall)) {
      return getFieldPrefixedWithSize(returnValue - aggregatedData.minPid);
    } else if (syscall === 'exit' && isNaN(returnValue)) {
      const signalNb = signalToNbMap.get(returnValueStr);
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
    .map(s => `${decimalToCharBase(s.length)}${s}`)
    .join('')
    + '0';
  const mainContent = contentList.map(
    ({ pid, syscall, returnValue, relativeTime, pipe, cmd }) => ([
      // [pid, syscall, returnValue, relativeTime, pipe, cmd].join(', '),
      getFieldPrefixedWithSize(pid - aggregatedData.minPid),
      relativeTime === 0 ? '0' : decimalToCharBase(
        (relativeTime - aggregatedData.timeDiff.min)
        / aggregatedData.timeDiff.max * charset.length
      ),
      decimalToCharBase(syscallToIdMap.get(syscall)),
      formatReturnValue(syscall, returnValue),
      (() => {
        if (syscall === 'execve') {
          const stringTableIndex = stringToIndex[cmd];
          return getFieldPrefixedWithSize(stringTableIndex);
        } else if (ioSyscalls.has(syscall)) {
          const pipeId = pipeToIndex[pipe];
          return getFieldPrefixedWithSize(pipeId);
        } else {
          return '0'
        }
      })(),
    ].join('')
  )).join('');

  return [
    header,
    stringTable,
    mainContent,
  ].join('');
};

const importFromUrlV0 = () => {
  let query = new URLSearchParams(window.location.search).get('q');
  const processQuery = (size, handler) => {
    const rawValue = query.slice(0, size);
    const value = handler ? handler(rawValue) : rawValue;
    query = query.slice(size);
    return value;
  };

  const processQueryWithFieldSize = (handler) =>
    processQuery(processQuery(1, charBaseToDecimal), handler)

  const version = processQuery(1, charBaseToDecimal);
  if (version !== 0) {
    console.error('Trying to deserialize incompatible version')
    return;
  }
  const animationDuration = processQuery(1, charBaseToDecimal);
  const minPid = processQueryWithFieldSize(charBaseToDecimal);

  const stringTable = [];
  while (query[0] != '0') {
    stringTable.push(processQueryWithFieldSize()); 
  }
  processQuery(1);

  const contentTable = [];
  while (query) {
    let pid = processQueryWithFieldSize(charBaseToDecimal) + minPid;
    let relativeTime = processQuery(1, charBaseToDecimal);
    // Doesn't look like this time calculation is correct
    let ellapsedTime = `0.${relativeTime}`;
    let syscallId = processQuery(1, charBaseToDecimal);
    let syscall = idToSyscallMap.get(syscallId);
    let syscallInfo;
    if (forkSyscalls.has(syscall)) {
      let childPid = minPid + processQueryWithFieldSize(charBaseToDecimal);
      syscallInfo = `fork(...) = ${childPid}`;
      processQuery(1)
    } else if (syscall === 'exit') {
      let exitRetValFieldSize = processQuery(1, charBaseToDecimal);
      if (exitRetValFieldSize === 0) {
        let signal = nbToSignalMap.get(processQuery(1, charBaseToDecimal));
        syscallInfo = `killed by SIG${signal}`
      } else {
        let exitCode = processQuery(exitRetValFieldSize, charBaseToDecimal);
        syscallInfo = `exited with ${exitCode}`
      }
      syscallInfo = `+++ ${syscallInfo} +++`
      processQuery(1)
    } else if (ioSyscalls.has(syscall)) {
      let syscallRetVal = processQueryWithFieldSize(charBaseToDecimal);
      let pipeId = processQueryWithFieldSize(charBaseToDecimal);
      syscallInfo = `${syscall}(?<pipe:[${pipeId}]>, ...) = ${syscallRetVal}`
    } else if (syscall === 'execve') {
      let syscallRetVal = processQueryWithFieldSize(charBaseToDecimal);
      let cmdNamePointer = processQueryWithFieldSize(charBaseToDecimal);
      let cmdName = stringTable[cmdNamePointer];
      syscallInfo = `execve("./${cmdName}", ...) = ${syscallRetVal}`
    }
    contentTable.push(`${pid}  ${ellapsedTime} ${syscallInfo}`)
  }
  return contentTable.join('\n');
};

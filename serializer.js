const header = {};

const stringSet = new Set();
const pipeSet = new Set();

const contentList = [];

const content = [];

const decimalToCharBase = (nb) => {
  const charset = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z', '-', '_', '.', '~',
  ];

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

const syscallToIdMap = new Map(syscallToIdTuples);

const idToSyscallMap = new Map(syscallToIdTuples.map(([k, v]) => [v, k]));

const aggregatedData = {
  minPid: 0,
  animationDuration: 0, // FIXME
};

const exportToUrlV0 = () => {
  const getFieldPrefixedWithSize = (field) => (
    `${decimalToCharBase(field.length)}${field}`
  );
  const version = decimalToCharBase(0);
  const animationDuration = decimalToCharBase(aggregatedData.animationDuration);
  const pidOffset = aggregatedData.minPid;
  // all map + join '' could be replaced by a single reduce
  const stringTable = [...stringSet]
    .map(getFieldPrefixedWithSize)
    .join('')
    + '0';
  const mainContent = content.map(
    { pid, syscall, returnValue, relativeTime, pipe, cmd} => {
    return [
      getFieldPrefixedWithSize(item.pid),
      decimalToCharBase(syscallToIdMap.get(syscall)),
      ????
    ].join('');
  }).join('');
  return [
    decimalToCharBase(version),
    decimalToCharBase(aggregatedData.animationDuration),
  ].join('');
};

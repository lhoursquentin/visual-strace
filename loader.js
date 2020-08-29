var speedSetupNeeded = true;
const straceOutputElement = document.getElementById('strace-output');

const loadStrace = () => {
  showGraph(straceOutputElement.value);
};

const loadExample = () => {
  straceOutputElement.value = exampleStraceOutput;
  speedSetupNeeded = true;
  showGraph(exampleStraceOutput);
};

document.getElementById('run').onclick = loadStrace;
document.getElementById('load-example').onclick = loadExample;
// If we change the strace output, reset the speed default values on the next
// run
straceOutputElement.addEventListener('input', (() => speedSetupNeeded = true));

var speedSetupNeeded = true;
const straceOutputElement = document.getElementById('strace-output');
const runButton = document.getElementById('run');

const loadStrace = () => {
  showGraph(straceOutputElement.value);
};

const loadExample = () => {
  speedSetupNeeded = true;
  straceOutputElement.value = exampleStraceOutput;
  runButton.disabled = false;
  showGraph(exampleStraceOutput);
};

runButton.onclick = loadStrace;
document.getElementById('load-example').onclick = loadExample;
// If we change the strace output, reset the speed default values on the next
// run
straceOutputElement.addEventListener('input', (event) => {
  speedSetupNeeded = true;
  runButton.disabled = event.target.value.trim() === '';
});

const straceCmdInput = document.getElementById('strace-cmd');
// Using input.size is clearer but is somehow slightly wider than the content
straceCmdInput.style.width = `${straceCmdInput.value.length}ch`;

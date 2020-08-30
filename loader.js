const loadExampleButton = document.getElementById('load-example');
const runButton = document.getElementById('run');
const straceCmdInput = document.getElementById('strace-cmd');
const straceOutputElement = document.getElementById('strace-output');
const toggleLoaderButton = document.getElementById('toggle-loader');
const loaderContent = document.getElementById('loader-content');

var speedSetupNeeded = true;

const loadExample = () => {
  speedSetupNeeded = true;
  straceOutputElement.value = exampleStraceOutput;
  runButton.disabled = false;
  showGraph(exampleStraceOutput);
};

const loadStrace = () => {
  showGraph(straceOutputElement.value);
};

const straceOutputChange = ({ target: { value } }) => {
  // If we change the strace output, reset the speed default values on the next
  // run
  speedSetupNeeded = true;
  runButton.disabled = value.trim() === '';
};

const toggleLoader = ({ target }) => {
  if (loaderContent.style.display === 'none') {
    target.title = 'minimize window';
    target.innerText = '-';
    loaderContent.style.display = 'block';
  } else {
    target.title = 'expand window';
    target.innerText = '+';
    loaderContent.style.display = 'none';
  }
};

loadExampleButton.addEventListener('click', loadExample);
runButton.addEventListener('click', loadStrace);
straceOutputElement.addEventListener('input', straceOutputChange);
toggleLoaderButton.addEventListener('click', toggleLoader);

// Using input.size is clearer but is somehow slightly wider than the content
straceCmdInput.style.width = `${straceCmdInput.value.length}ch`;

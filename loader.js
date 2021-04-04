const runButton = document.getElementById('run');
const straceCmdInput = document.getElementById('strace-cmd');
const straceOutputElement = document.getElementById('strace-output');
const toggleLoaderButton = document.getElementById('toggle-loader');
const loaderContent = document.getElementById('loader-content');
const straceFileInput = document.getElementById('strace-file-input');

var speedSetupNeeded = true;
var generateExportUrl = false;

const loadStraceOutputArea = (straceContent) => {
  speedSetupNeeded = true;
  straceOutputElement.value = straceContent;
  runButton.disabled = false;
  loadStrace();
};

const loadStrace = () => {
  minimizeLoader();
  showGraph(straceOutputElement.value);
};

const straceOutputChange = ({ target: { value } }) => {
  // If we change the strace output, reset the speed default values on the next
  // run
  speedSetupNeeded = true;
  generateExportUrl = true;
  runButton.disabled = value.trim() === '';
};

const minimizeLoader = () => {
  toggleLoaderButton.title = 'expand window';
  toggleLoaderButton.innerText = '+';
  loaderContent.style.display = 'none';
};

const openLoader = () => {
  toggleLoaderButton.title = 'minimize window';
  toggleLoaderButton.innerText = '-';
  loaderContent.style.display = 'block';
};

const toggleLoader = () => {
  if (loaderContent.style.display === 'none') {
    openLoader();
  } else {
    minimizeLoader();
  }
};

const readFileContents = ({ target: { files: [file] } }) => {
  const reader = new FileReader();
  reader.readAsText(file, 'UTF-8');
  reader.onload = ({ target: { result } }) => {
    generateExportUrl = true;
    loadStraceOutputArea(result);
  };
};

runButton.addEventListener('click', loadStrace);
straceOutputElement.addEventListener('input', straceOutputChange);
straceOutputElement.addEventListener('input', straceOutputChange);
toggleLoaderButton.addEventListener('click', toggleLoader);
straceFileInput.addEventListener('change', readFileContents);

// Using input.size is clearer but is somehow slightly wider than the content
straceCmdInput.style.width = `${straceCmdInput.value.length}ch`;

document.addEventListener("DOMContentLoaded", () => {
  const straceOutputFromUrl = importFromUrlV0();
  if (straceOutputFromUrl) {
    generateExportUrl = false;
    loadStraceOutputArea(straceOutputFromUrl);
  }
});

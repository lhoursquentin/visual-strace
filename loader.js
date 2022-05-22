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

  // check if we have a shared URL in the input instead of a strace output,
  // this is useful to overcome the 8000 char max URL length limitation of some
  // servers
  const query = value.match(/^https?:[^ ]+q=(?<query>.+)/)?.groups.query;
  if (query) {
    generateExportUrl = false;
    const straceOutputFromUrl = importFromUrlV0(query);
    loadStraceOutputArea(straceOutputFromUrl);
  } else {
    generateExportUrl = true;
    runButton.disabled = value.trim() === '';
  }
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
toggleLoaderButton.addEventListener('click', toggleLoader);
straceFileInput.addEventListener('change', readFileContents);

// Using input.size is clearer but is somehow slightly wider than the content
straceCmdInput.style.width = `${straceCmdInput.value.length}ch`;

document.addEventListener('DOMContentLoaded', () => {
  const query = new URLSearchParams(window.location.search).get('q');
  if (query) {
    generateExportUrl = false;
    const straceOutputFromUrl = importFromUrlV0(query);
    loadStraceOutputArea(straceOutputFromUrl);
  }
});

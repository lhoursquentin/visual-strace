const loadStrace = () => {
  showGraph(document.getElementById('strace-output').value);
};

const loadExample = () => {
  document.getElementById('strace-output').value = exampleStraceOutput;
  showGraph(exampleStraceOutput);
};

document.getElementById('run').onclick = loadStrace;
document.getElementById('load-example').onclick = loadExample;

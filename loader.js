const loadStrace = () => {
  run(document.getElementById('strace-output').value);
};

const loadExample = () => {
  document.getElementById('strace-output').value = exampleStraceOutput;
  run(exampleStraceOutput);
}

document.getElementById('run').onclick = loadStrace;
document.getElementById('load-example').onclick = loadExample;

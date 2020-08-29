// Speed represents a slow down factor

const defaultAnimationDuration = 20; // seconds
const minAnimationDuration = 1;
const slider = document.getElementById('speed-slider');
const valueBox = document.getElementById('speed-value-input');

var speed;

const updateSpeedInputs = () => {
  slider.value = speed;
  valueBox.value = speed;
  if (remainingTasks?.length > 0) {
    clearTimeout(currentTimeout);
    run(remainingTasks);
  }
};

const handleSpeedChange = (event) => {
  speed = event.target.value;
  updateSpeedInputs();
};

const setupSpeedInputs = (totalTime, totalNodes) => {
  slider.addEventListener('input', handleSpeedChange);
  valueBox.addEventListener('input', handleSpeedChange);
  // one node === 1s up to defaultAnimationDuration limit
  const defaultSpeed = (
    1 / (totalTime / Math.min(totalNodes, defaultAnimationDuration))
  );
  speed = defaultSpeed;
  slider.min = 1 / (totalTime / minAnimationDuration);
  slider.max = defaultSpeed * 10;
  updateSpeedInputs();

  document.getElementById('speed-controller').style.visibility = 'visible';
};

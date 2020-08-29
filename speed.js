// Speed represents a slow down factor

const defaultAnimationDuration = 20; // seconds
const slider = document.getElementById('speed-slider');
const valueBox = document.getElementById('speed-value-input');

var speed;

const updateSpeedInputs = () => {
  slider.value = speed;
  valueBox.value = speed;
};

const handleSpeedChange = (event) => {
  speed = event.target.value;
  updateSpeedInputs();
};

const setupSpeedInputs = (totalTime) => {
  slider.addEventListener('input', handleSpeedChange);
  valueBox.addEventListener('input', handleSpeedChange);
  const defaultSpeed = 1 / (totalTime / defaultAnimationDuration);
  speed = defaultSpeed;
  slider.min = 0; // paused basically
  slider.max = defaultSpeed * defaultAnimationDuration; // 1s as the minimum duration
  updateSpeedInputs();

  document.getElementById('speed-controller').style.visibility = 'visible';
};

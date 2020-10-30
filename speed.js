// Speed represents a slow down factor

const defaultAnimationDuration = 20; // seconds
const minAnimationDuration = 1;
const slider = document.getElementById('speed-slider');
const valueBox = document.getElementById('speed-value-input');
const pauseButton = document.getElementById('pause-button');

var speed;

const updateSpeedInputs = () => {
  slider.value = speed;
  valueBox.value = speed;
};

const isAnimationRunning = () =>
  pauseButton.innerText === 'Pause' && pauseButton.style.display !== 'none';

const handleSpeedChange = ({ target }) => {
  speed = target.value;
  updateSpeedInputs();
  if (isAnimationRunning() && remainingTasks?.length > 0) {
    clearTimeout(currentTimeout);
    run(remainingTasks);
  }
};

const togglePause = ({ target }) => {
  if (isAnimationRunning()) {
    if (remainingTasks?.length > 0) {
      clearTimeout(currentTimeout);
    }
    target.innerText = 'Resume';
  } else {
    target.innerText = 'Pause';
    if (remainingTasks?.length > 0) {
      run(remainingTasks);
    }
  }
};

const setupSpeedInputs = (totalTime, totalNodes) => {
  pauseButton.addEventListener('click', togglePause);
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

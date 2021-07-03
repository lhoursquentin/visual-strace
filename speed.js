// Speed represents a slow down factor

const defaultAnimationDuration = 20; // seconds
const minAnimationDuration = 1;
const slider = document.getElementById('speed-slider');
const valueBox = document.getElementById('speed-value-input');
const pauseButton = document.getElementById('pause-button');

var speed;

const updateSpeedInputs = (attributes) => {
  const updateProps = (obj) => Object.assign(obj, attributes);
  [slider, valueBox].forEach(updateProps);
};

const isAnimationRunning = () => pauseButton.innerText === 'Pause';

const handleSpeedChange = ({ target }) => {
  speed = Number.parseFloat(target.value);
  updateSpeedInputs({ value: speed });
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
  } else if (target.innerText === 'Resume') {
    target.innerText = 'Pause';
    if (remainingTasks?.length > 0) {
      run(remainingTasks);
    }
  } else { // rerun
    loadStrace();
  }
};

// For nbSignicantDigits === 2:
// 1234.5678       -> 1235
// 0.12345678      -> 0.12
// 0.0000012345678 -> 0.0000012
const prettifyNumber = (nb, nbSignicantDigits) =>
  nb === 0
    ? nb
    : nb.toFixed(Math.max(0, nbSignicantDigits - Math.log10(nb)))
    ;

const setupSpeedInputs = (totalTime, totalNodes) => {
  pauseButton.addEventListener('click', togglePause);
  slider.addEventListener('input', handleSpeedChange);
  valueBox.addEventListener('input', handleSpeedChange);

  // one node === 1s up to defaultAnimationDuration limit
  const defaultSpeed = (
    1 / (totalTime / Math.min(totalNodes, defaultAnimationDuration))
  );
  const roundedSpeed = prettifyNumber(defaultSpeed, 2);
  const step = prettifyNumber(roundedSpeed / 5, 2);
  const min = prettifyNumber(1 / (totalTime / minAnimationDuration), 1);
  const max = roundedSpeed * 10;
  speed = roundedSpeed;

  updateSpeedInputs({
    min,
    max,
    step,
    value: speed,
  });

  document.getElementById('speed-controller').style.visibility = 'visible';
};

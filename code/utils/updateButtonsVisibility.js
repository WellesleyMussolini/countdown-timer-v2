const start = document.querySelector('.start');
const pause = document.querySelector('.pause');

export const updateButtonsVisibility = (isRunningCountdown) => isRunningCountdown ? (start.style.display = 'none') | (pause.style.display = 'block') : (start.style.display = 'block') | (pause.style.display = 'none');
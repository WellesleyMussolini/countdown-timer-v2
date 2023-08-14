import { toggleElementVisibility } from "./toggleElementVisibility.js";

const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');

export const updateButtonsVisibility = (isRunningCountdown) => {
    if (isRunningCountdown) {
        toggleElementVisibility.hidden(start);
        toggleElementVisibility.visible(pause);
        toggleElementVisibility.hidden(reset);
    } else {
        toggleElementVisibility.visible(start);
        toggleElementVisibility.hidden(pause);
        toggleElementVisibility.visible(reset);
    }
};
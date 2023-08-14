import { toggleElementVisibility } from "./toggleElementVisibility.js";

const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const edit = document.querySelector(".edit");

export const buttonVisibility = function (isRunningCountdown) {
    if (isRunningCountdown) {
        toggleElementVisibility.hidden(start);
        toggleElementVisibility.visible(pause);
        toggleElementVisibility.hidden(reset);
        toggleElementVisibility.hidden(edit);
    } else {
        toggleElementVisibility.visible(start);
        toggleElementVisibility.hidden(pause);
        toggleElementVisibility.visible(reset);
        toggleElementVisibility.visible(edit);
    };
};
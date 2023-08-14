import { toggleElementVisibility } from "./toggleElementVisibility.js";

export const buttonVisibility = function (isRunningCountdown, start, pause, edit) {
    if (isRunningCountdown) {
        toggleElementVisibility.hidden(start);
        toggleElementVisibility.visible(pause);
        toggleElementVisibility.hidden(edit);
    } else {
        toggleElementVisibility.visible(start);
        toggleElementVisibility.hidden(pause);
        toggleElementVisibility.visible(edit);
    };
};
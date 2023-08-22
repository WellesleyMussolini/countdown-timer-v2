import { updateDOM } from "./updateDOM.js";

export const updateModalValues = (
    // select elements
    selectHours,
    selectMinutes,
    selectSeconds,

    // function where it updates the input values
    updateDigitsMethod
) => {
    // Get the selected values directly from the <select> elements
    const hours = parseInt(selectHours.value);
    const minutes = parseInt(selectMinutes.value);
    const seconds = parseInt(selectSeconds.value);

    // updates the DOM
    updateDOM(hours, minutes, seconds, updateDigitsMethod);

    return { hours, minutes, seconds };
};
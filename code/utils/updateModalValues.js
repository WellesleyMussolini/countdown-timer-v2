import { checkInputCharacters } from "./checkInputCharacters.js";
import { updateDOM } from "./updateDOM.js";

export const updateModalValues = (
    // inputs
    hoursInputHTML,
    minutesInputHTML,
    secondsInputHTML,

    // variables that will be updated
    hoursRemaining,
    minutesRemaining,
    secondsRemaining,

    // function where it updates the input values
    updateDigitsMethod
) => {
    checkInputCharacters(hoursInputHTML);
    checkInputCharacters(minutesInputHTML);
    checkInputCharacters(secondsInputHTML);

    // if the input is empty then remains the last digit
    const hours = parseInt(hoursInputHTML.value.trim()) || hoursRemaining;
    const minutes = parseInt(minutesInputHTML.value.trim()) || minutesRemaining;
    const seconds = parseInt(secondsInputHTML.value.trim()) || secondsRemaining;

    // updates the DOM
    updateDOM(hours, minutes, seconds, updateDigitsMethod);

    return { hours, minutes, seconds };
};
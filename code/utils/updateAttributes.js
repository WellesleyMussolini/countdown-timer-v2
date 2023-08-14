import { updateDOM } from "./updateDOM.js";

export const updateAttributes = (
    that,
    hoursElement,
    minutesElement,
    secondsElement,
    hours,
    minutes,
    seconds,
    updateDigits
) => {
    hoursElement.setAttribute('hours', hours);
    minutesElement.setAttribute('minutes', minutes);
    secondsElement.setAttribute('seconds', seconds);

    that.values.hours = hours;
    that.values.minutes = minutes;
    that.values.seconds = seconds;

    that.total_seconds = hours * 60 * 60 + (minutes * 60) + seconds;

    if (updateDigits) updateDOM(hours, minutes, seconds, updateDigits);
};
// hours
const hourTopLeftHTML = document.getElementById("hour-top-left");
const hourBottomLeftHTML = document.getElementById("hour-bottom-left");
const hourTopRightHTML = document.getElementById("hour-top-right");
const hourBottomRightHTML = document.getElementById("hour-bottom-right");

// minutes
const minuteTopLeftHTML = document.getElementById("minute-top-left");
const minuteBottomLeftHTML = document.getElementById("minute-bottom-left");
const minuteTopRightHTML = document.getElementById("minute-top-right");
const minuteBottomRightHTML = document.getElementById("minute-bottom-right");

// seconds
const secondTopLeftHTML = document.getElementById("second-top-left");
const secondBottomLeftHTML = document.getElementById("second-bottom-left");
const secondTopRightHTML = document.getElementById("second-top-right");
const secondBottomRightHTML = document.getElementById("second-bottom-right");

export const updateDOM = (
    hoursRemaining,
    minutesRemaining,
    secondsRemaining,
    updateDigitsMethod,
) => {
    // calls the function that updates the HTML attributes
    updateDigitsMethod(hoursRemaining, hourTopLeftHTML, hourBottomLeftHTML, hourTopRightHTML, hourBottomRightHTML);
    updateDigitsMethod(minutesRemaining, minuteTopLeftHTML, minuteBottomLeftHTML, minuteTopRightHTML, minuteBottomRightHTML);
    updateDigitsMethod(secondsRemaining, secondTopLeftHTML, secondBottomLeftHTML, secondTopRightHTML, secondBottomRightHTML);
};
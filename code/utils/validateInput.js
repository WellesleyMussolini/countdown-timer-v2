import { clearModal } from "./clearModal.js";

const hoursInput = document.querySelector(".input-hours");
const minutesInput = document.querySelector(".input-minutes");
const secondsInput = document.querySelector(".input-seconds");

const inputsMap = new Map([
    [hoursInput, { max: 99, min: 0, message: "Provide a valid hour number" }],
    [minutesInput, { max: 59, min: 0, message: "Provide a valid minutes number" }],
    [secondsInput, { max: 59, min: 0, message: "Provide a valid seconds number" }],
]);

export const validateInput = inputElement => {
    const inputInfo = inputsMap.get(inputElement);
    if (!inputInfo) {
        console.error("Input element wasn't found");
        return;
    }
    
    const inputValue = inputElement.value;
    if (inputValue.length > 2) {
        inputElement.value = inputValue.substring(0, 2); // Limit to 2 digits
    }
    
    const value = parseInt(inputElement.value);
    if (value > inputInfo.max || value < inputInfo.min) {
        alert(inputInfo.message);
        clearModal(hoursInput, minutesInput, secondsInput);
    }
};
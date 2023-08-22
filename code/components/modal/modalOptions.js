import { generateOptions } from "./generateOptions.js";

export const modalOptions = () => {
    const selectElements = document.querySelectorAll('.input-hours, .input-minutes, .input-seconds');

    selectElements.forEach(select => {
        const maxValue = select.classList.contains('input-hours') ? 99 : 59;
        generateOptions(select, maxValue);
    });
};
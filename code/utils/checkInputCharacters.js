import { validateInput } from "./validateInput.js";

export const checkInputCharacters = inputElement => {
    if (!inputElement) {
        console.error(`Input element not found.`);
        return;
    }
    inputElement.addEventListener("input", event => {
        const input = event.target.value;
        const checkInput = input.replace(/[^0-9]/g, '');
        inputElement.value = checkInput;

        // Trigger real-time validation
        validateInput(inputElement);
    });
};
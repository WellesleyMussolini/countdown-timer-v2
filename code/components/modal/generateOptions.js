export const generateOptions = (selectElement, maxValue) => {
    for (let i = 0; i <= maxValue; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i.toString().padStart(2, '0');
        selectElement.appendChild(option);
    }
};
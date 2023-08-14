const updateDigitElements = (digit, topElement, bottomElement) => {
    topElement.textContent = digit;
    bottomElement.textContent = digit;
};

export const updateDigits = (value, topDigitFirstPart, bottomDigitFirstPart, topDigitSecondPart, bottomDigitSecondPart) => {
    const paddedValue = value.toString().padStart(2, '0');

    const firstDigit = paddedValue[0];
    const secondDigit = paddedValue[1];

    updateDigitElements(firstDigit, topDigitFirstPart, bottomDigitFirstPart);
    updateDigitElements(secondDigit, topDigitSecondPart, bottomDigitSecondPart);
};
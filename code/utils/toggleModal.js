import { toggleElementVisibility } from "./toggleElementVisibility.js";
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

export const toggleModal = (isEdited) => {
    if (isEdited) {
        toggleElementVisibility.visible(modal);
        toggleElementVisibility.visible(overlay);
    } else {
        toggleElementVisibility.hidden(modal);
        toggleElementVisibility.hidden(overlay);
    }
};
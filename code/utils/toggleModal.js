import { toggleElementVisibility } from "./toggleElementVisibility.js";

const overlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");

export const toggleModal = (isEdited) => {
    toggleElementVisibility[isEdited ? 'visible' : 'hidden'](overlay);
    toggleElementVisibility[isEdited ? 'visible' : 'hidden'](modal);
};
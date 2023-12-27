import { addButtonEvent, checkboxEvent, removeTasks, trashButtonEvent } from "./modules/clickEffects";
import { modalDisplay } from "./modules/modalWindow";

function init() {
    checkboxEvent();
    addButtonEvent();
    trashButtonEvent();
    modalDisplay();
    removeTasks();
}

init();

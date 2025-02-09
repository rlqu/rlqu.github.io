import { getCaret } from "./line_util";
import { getCommandLineText } from "./text_util";

var caretIndex = 0;

function moveLeft() {
    if(caretIndex >= getCommandLineText().length) {
        return;
    }

    caretIndex++;
    setCaretIndex(caretIndex);
    return;
}

function moveRight() {
    if(caretIndex <= 0) {
        return;
    }

    caretIndex--;
    setCaretIndex(caretIndex);
    return;
}

export function getCaretIndex(): number {
    return caretIndex;
}

export function setCaretIndex(index) {
    caretIndex = index;

    let caret = getCaret();
    if(caret == null) return;

    caret.style.transform = "translateX(-" + caretIndex * 100 + "%)";
}

window.addEventListener('keydown', (event) => {
    
    if(event.key == "ArrowLeft") {
        moveLeft();
        return;
    }
        
    if(event.key == "ArrowRight") {
        moveRight();
        return;
    }
});
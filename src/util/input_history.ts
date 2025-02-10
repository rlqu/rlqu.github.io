import { setCommandLineText } from "./text_util.ts";

let history = Array<string>();
var historyIndex = 0;

export function addToHistory(input: string) {
    if(!history.slice(-1).includes(input) && input.trim().length > 0) history.push(input);
}

function goBack() {
    if(historyIndex + 1 > history.length) return;
    historyIndex++;

    display();
}

function goForward() {
    if(historyIndex <= 1) return;
    historyIndex--;
    display();
}

function display() {
    setCommandLineText(history[history.length - historyIndex]);
}


window.addEventListener("keydown", (event) => {
    if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(event.code) > -1) {
        event.preventDefault();
    }

    if(event.key == "Enter") historyIndex = 0;

    if(event.key == "ArrowUp") {
        goBack();
        return;
    }
        
    if(event.key == "ArrowDown") {
        goForward();
        return;
    }
        
}, false);

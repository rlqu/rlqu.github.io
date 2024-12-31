import {
    setCommandLineText
} from "/util/text_util.js";

let history = [];
var historyIndex = 0;

export function addToHistory(input) {
    if(history.slice(-1) != input && input != "") history.push(input);
}

function goBack() {
    console.log("history length: " + history.length);
    if(historyIndex + 1 > history.length) return;
    historyIndex++;
    console.log("history index: " + historyIndex);

    display();
}

function goForward() {
    
    if(historyIndex - 1 > history.length) return;
    historyIndex--;

    console.log("history index: " + historyIndex);
    console.log("history length: " + history.length);
    display();
}

function display() {
    setCommandLineText(history[history.length - historyIndex]);
}


window.onkeydown = (event) => {
if(event.key == "ArrowUp") {
    goBack();
    return;
}

if(event.key == "ArrowDown") {
    goForward();
    return;
}
}

window.addEventListener("keydown", function(e) {
    if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);

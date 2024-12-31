export function getCommandLineText() {
    return document.querySelector("#console > div:last-of-type > p").innerHTML.split("</span>")[1];
}

export function setCommandLineText(text) {
    var line = document.querySelector("#console > div:last-of-type > p");
    var span = document.querySelector("#console > div:last-of-type > p > span");
    line.innerHTML = line.innerHTML.split("</span>")[1] = "<span>" + span.innerHTML + "</span>" + text;
}


export function addCommandLineText(text) {
    setCommandLineText(getCommandLineText() + text);
}

export function getCommandLinePrefix() {
    return document.querySelector("#console > div:last-of-type > p > span").textContent;
}

export function setCommandLinePrefix(text) {
    document.querySelector("#console > div:last-of-type > p > span").textContent = text;
}


export function addCommandLinePrefix(text) {
    setCommandLinePrefix(getCommandLinePrefix() + text);
}

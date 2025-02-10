export function getCommandLineText(): string {
    return document.querySelector("#console > div:last-of-type > p")?.innerHTML.split("</span>")[1] ?? "";
}

export function setCommandLineText(text: string) {
    var line = document.querySelector("#console > div:last-of-type > p");
    if(line == null) return;

    var span = document.querySelector("#console > div:last-of-type > p > span");
    if(span == null) return;

    line.innerHTML = line.innerHTML.split("</span>")[1] = "<span>" + span.innerHTML + "</span>" + text;
}

export function addCommandLineText(text: string, index: number) {
    if(!index) index = 0;

    let content = getCommandLineText();
    if(content == null) return;

    let split = splitAtIndex(content, content.length - index);
    let contentBeforeCaret = split[0];
    let contentAfterCaret = split[1];

    setCommandLineText(contentBeforeCaret + text + contentAfterCaret);
}

export function getCommandLinePrefix(): string {
    return document.querySelector("#console > div:last-of-type > p > span")?.textContent;
}

export function setCommandLinePrefix(text: string) {
    let span = document.querySelector("#console > div:last-of-type > p > span")
    
    if(span == null) return;
    span.textContent = text;
}

export function addCommandLinePrefix(text: string) {
    setCommandLinePrefix(getCommandLinePrefix() + text);
}

export function splitAtIndex(text: string, index: number): [string, string] {
    return [text.slice(0, index), text.slice(index)];
}
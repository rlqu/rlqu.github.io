export let inputPrefix: string = "jannik@website:/$ ";

export function newLine(prefix: string, text: string = "", prefixColor: string = "", textColor: string = "") {
    let lastCaret = document.querySelector("#console > div:last-of-type > div.caret")
    if(lastCaret != null) lastCaret.remove();
    
    let console = document.getElementById("console")
    if(console == null) return;

    console.innerHTML += `<div class="line"><p class="command" style="color: ${textColor}"><span class="prefix" style="color: ${prefixColor}">${prefix}</span>${text}</p><div class="caret"></div></div>`;
}

export function setInputPrefix(prefix: string) {
    inputPrefix = prefix;
}

export function getCaret(): HTMLElement | null {
    return document.querySelector("#console > div:last-of-type > div.caret");
}
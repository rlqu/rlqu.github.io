export const inputPrefix = "jannik@website:/$ ";

export function newLine(prefix, text, prefixColor, textColor) {
    let lastCaret = document.querySelector("#console > div:last-of-type > div.caret")
    if(lastCaret != null) lastCaret.remove();
    
    document.getElementById("console").innerHTML += `<div class="line"><p class="command" style="color: ${textColor}"><span class="prefix" style="color: ${prefixColor}">${prefix}</span>${text}</p><div class="caret"></div></div>`;
}
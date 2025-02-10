import {
    addCommandLineText, 
    getCommandLineText,
    setCommandLineText,
} from "./util/text_util.ts";
import { execute } from "./util/command_executor.ts";
import { newLine, inputPrefix, getCaret } from "./util/line_util.ts";
import { addToHistory } from "./util/input_history.ts";
import { loadMotd } from "./util/motd.ts";
import { getCaretIndex, setCaretIndex } from "./util/caret_util.ts";

window.addEventListener('load', async (event) => {
    //await loadMotd(); broken atm
    newLine(inputPrefix, "");
});

window.addEventListener('keypress', async (event) => {
    if(event.ctrlKey) return;

    if(event.key == "Enter") {
        let content = getCommandLineText().trim();

        if(content.length <= 0) {
            newLine(inputPrefix, "");
            return;
        }
        
        let splitInput = content.split(" ");
        let commandName = splitInput[0];
        let args = splitInput.slice(1);
        
        addToHistory(content.trim());
        await execute(commandName, args);
        newLine(inputPrefix, "");

        setCaretIndex(0);
        return;
    }

    addCommandLineText(String.fromCharCode(event.which), getCaretIndex());
});


window.addEventListener('keydown', (event) => {
    if(event.key == "Backspace") {
        let content = getCommandLineText();
        let contentBeforeCaret = content.slice(0, content.length - getCaretIndex());
        let contentAfterCaret = content.slice(content.length - getCaretIndex());

        if(content.length <= 0) {
            return;
        }

        if(event.ctrlKey) {
            let splitContent = contentBeforeCaret.split(" ");
            let newContent = splitContent.slice(0, -1).join(" ");
            setCommandLineText(newContent + contentAfterCaret);
            return;
        }

        let newContent = contentBeforeCaret.slice(0, -1);
        setCommandLineText(newContent + contentAfterCaret);
        return;
    }
});
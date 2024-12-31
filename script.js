import {
    addCommandLineText, 
    getCommandLineText,
} from "./util/text_util.js";
import { execute } from "./util/command_executor.js";
import { newLine, inputPrefix } from "./util/line_util.js";
import { addToHistory } from "./util/input_history.js";
import { loadMotd } from "./util/motd.js";

window.onload = async (event) => {
    await loadMotd();
    newLine(inputPrefix, "");
};

window.onkeypress = async (event) => {

    if(event.key == "Enter") {
        let content = getCommandLineText();
        let splitInput = content.split(" ");
        let commandName = splitInput[0];
        let args = splitInput.slice(1);
        
        addToHistory(content.trim());
        await execute(commandName, args);
        newLine(inputPrefix, "");
        return;
    }

    addCommandLineText(String.fromCharCode(event.which));

}
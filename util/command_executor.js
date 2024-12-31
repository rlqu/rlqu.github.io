import { newLine, inputPrefix } from "./line_util.js";

export async function execute(commandName, args) {

    try {
        const commandModule = await import(`./command/${commandName}.js`);
    
        if (typeof commandModule.executeCommand !== 'function') {
            throw new Error(`Command "${commandName}" does not export an executeCommand function.`);
        }
    
        return await commandModule.executeCommand(args);
    } catch (error) {
        newLine(commandName + ": ", "command not found");
        return;
    }

}
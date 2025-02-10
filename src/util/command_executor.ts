import { newLine } from "./line_util.ts";

export async function execute(commandName: string, args: Array<string>) {

    try {
        const commandModule = await import(`./command/${commandName}.ts`);
    
        if (typeof commandModule.executeCommand !== 'function') {
            throw new Error(`Command "${commandName}" does not export an executeCommand function.`);
        }
    
        return await commandModule.executeCommand(args);
    } catch (error) {
        newLine(commandName + ": ", "command not found");
        console.error(error);
        return;
    }

}
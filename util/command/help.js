import { newLine } from "../line_util.js";

export function executeCommand(name) {
    if(name == "") {
        newLine("Overview of usable commands", "", "#d4d4d4", "#d4d4d4");
        newLine(" ", "", "");
        newLine("Available commands:", "", "#d4d4d4", "#d4d4d4");
        newLine("  ", "ls     Lists all files in the current directory", "#d4d4d4", "#d4d4d4");
        newLine("  ", "cd     Changes the directory", "#d4d4d4", "#d4d4d4");
        newLine("  ", "cat    Prints out content of the given file", "#d4d4d4", "#d4d4d4");
        newLine("  ", "echo   Prints out back what you've entered", "#d4d4d4", "#d4d4d4");
        newLine(" ", "");
        newLine("Use \"help [command]\" for more information about a command.", "", "#d4d4d4", "#d4d4d4");
        return;
    }

    switch (String(name)) {
        case "cd":
            var list = [
                "Change your current directory",
                " ",
                "Usage:",
                "  cd [directory]",
                " "
            ]

            newLine(list.join('\n'), "", "#d4d4d4");
            break;
            case "cat":
                var list = [
                    "Catch some data!",
                    " ",
                    "Usage:",
                    "  cat [file]",
                    " "
                ]
                
                newLine(list.join('\n'), "", "#d4d4d4");
            break;
            case "echo":
                var list = [
                    "Write something, you'll get it back.",
                    " ",
                    "Usage:",
                    "  echo [message]",
                    " "
                ]
                
                newLine(list.join('\n'), "", "#d4d4d4");
            break;
            
            default:
                newLine("-bash: ", "help: no help topics match '" + name + "'. Try 'help'.", "#d4d4d4", "#d4d4d4");
            break;
    }

    
}
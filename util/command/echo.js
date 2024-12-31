import { newLine } from "../line_util.js";

export function executeCommand(message) {
    newLine("", message.join(" "), "", "#d4d4d4");
}
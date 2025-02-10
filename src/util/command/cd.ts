import { setInputPrefix, newLine } from "../line_util.js";

export function executeCommand(path: string) {
    if(path.toString().trim().length <= 0) return;
    /**let actualPath = baseDirectory + ((path.toString().split("")[0] != "/") ? "/" : "") + path;
    
    if(!navigateAbsolutePath(actualPath)) {
        newLine("-bash: cd: " + path + ": ", "No such file or directory");
    } else {
        setInputPrefix("jannik@website:" + currentPath + "$ ");
    }**/
}
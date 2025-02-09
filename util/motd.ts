import { newLine } from "./line_util";

export async function loadMotd(): Promise<void> {
    let currentDate = new Date();
    let day = currentDate.getDate();
    let month = currentDate.getMonth() + 1;
    let year = currentDate.getFullYear();
    let hour = currentDate.getHours();
    let minute = currentDate.getMinutes();
    let second = currentDate.getSeconds();

    return await fetch('../config/motd')
        .then(response => response.text())
        .then((data: string) => {
            let string = data.replace("<now>", day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second);
            newLine(string, "", "#d4d4d4");
        })
}
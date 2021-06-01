#!/usr/bin/env node

let input = process.argv.slice(2);

//here input is the command -> tree , organize , help


let command = input[0];
let fs = require("fs");
let path = require("path");
let helpobj = require("./commands/help.js")
let treeobj = require("./commands/tree.js")
let organizeobj = require("./commands/organize.js")


let types = {
    media: ["mp4", "mkv"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    images: ['jpeg', 'jpg', 'png', 'gif'],
    drawings: ['dwg'],
    app: ['exe', 'dmg', 'pkg', "deb"]
};

switch (command) {
    case "tree":
        //input[1] is the directory path
        treeobj.treeKey(input[1]);
        break;
    case "organize":
        organizeobj.organizeKey(input[1]);
        break;
    case "help":
        helpobj.helpKey();
        break;
    default:
        console.log("Enter the appropriate command");
}
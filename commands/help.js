let fs = require("fs");
let path = require("path");

function helpfn() {
    console.log(`Below are the functionalities of command
            help-for knowing the commands
            organize-for organizing the content
            tree- to get tree structure of content
            `);
}

module.exports = {
    helpKey: helpfn
}
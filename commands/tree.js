let fs = require("fs");
let path = require("path");

function treefn(dirpath) {
    if (dirpath == undefined) {
        dirpath = process.cwd();
        treefnhelper(dirpath, "");
        return;
    } else {
        let doesexist = fs.existsSync(dirpath);
        if (doesexist) {

            treefnhelper(dirpath, " ");


        } else {
            console.log("Enter the correct path");
        }
    }



}


function treefnhelper(src, indent) {

    let checker = fs.lstatSync(src).isFile();

    if (checker) {
        let filename = path.basename(src);
        console.log(indent + "├──" + filename);
    } else {
        let dirname = path.basename(src);
        console.log(indent + "└──" + dirname);

        let childs = fs.readdirSync(src);
        for (let i = 0; i < childs.length; i++) {
            let childpath = path.join(src, childs[i]);
            treefn(childpath, "");
        }
    }

}

module.exports = {
    treeKey: treefn
}
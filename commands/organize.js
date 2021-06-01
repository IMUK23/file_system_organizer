let fs = require("fs");
let path = require("path");

function organizefn(dirpath) {

    //1) input-> dirpath
    //2)create organized files directory if not there
    //3)check files inside given path and identify their category
    //4)now copy/cut file from given directory to organized directory
    //5) check whether organized directory have that specific files' folder 
    //6) if there add inside that if not then create and then add 

    let destpath;
    if (dirpath == undefined) {
        destpath = process.cwd();

    } else {
        let doesexist = fs.existsSync(dirpath);
        if (doesexist) {
            //lets create a destination path
            destpath = path.join(dirpath, "organizedfile");
            if (fs.existsSync(destpath) == false) {
                fs.mkdirSync(destpath);
            }



        } else {
            console.log("Enter the correct path");
        }
    }

    organizefnhelper(dirpath, destpath);
}

function organizefnhelper(src, dest) {
    let childnames = fs.readdirSync(src);
    // we got childlames not get their path

    for (let i = 0; i < childnames.length; i++) {
        let childaddress = path.join(src, childnames[i]);

        let checker = fs.lstatSync(childaddress);

        if (checker.isFile()) {

            let category = getCategory(childnames[i]);
            //console.log(childnames[i] + "-> " + category);

            sendFile(childaddress, dest, category);

        }
    }



}

function sendFile(src, dest, category) {
    let catpath = path.join(dest, category);
    if (fs.existsSync(catpath) == false) {
        fs.mkdirSync(catpath);
    }

    let filename = path.basename(src);

    let destfilepath = path.join(catpath, filename);


    if (fs.existsSync(destfilepath)) {
        fs.unlinkSync(src);
    } else {
        fs.copyFileSync(src, destfilepath);
        fs.unlinkSync(src);
    }
}


function getCategory(name) {
    let ext = path.extname(name);
    ext = ext.slice(1);

    for (let type in types) {
        let currarray = types[type];
        for (let i = 0; i < currarray.length; i++) {

            if (ext == currarray[i]) {
                return type;
            }
        }

    }
    return "other";

}

module.exports = {
    organizeKey: organizefn
}
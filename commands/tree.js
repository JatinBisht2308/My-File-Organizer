// requiring the fs and path module

const fs = require("fs");
const path = require("path");

function treeFun(srcPathOfDir) {
  if (srcPathOfDir == undefined) {
    console.log(".....No path is specified.....");
    process.exit();
  }
  //    1)- check that this directory exist or not
  let checkExistence = fs.existsSync(srcPathOfDir);
  if (checkExistence) {
    treeDisplay(srcPathOfDir,"");
  } else {
    console.log("......This kind of file does not exist.......");
  }
}

// treeDisplay() function introduction
function treeDisplay(dirPath, indent) {
  // base case: if there is no sub folders left then print the file name and return back from the function
  let isDirectory = fs.lstatSync(dirPath).isDirectory();
  if (!isDirectory) {
    // console.log("🔤");
    let fileName = path.basename(dirPath);
    console.log(indent + "├── 🔤 " + fileName);
    return;
  }

  //   body of the recursive function
  let dirName = path.basename(dirPath);
  //   console.log("📁 ");
  console.log(indent + "└── 📁 " + dirName);

  let subDir = fs.readdirSync(dirPath);

  for (let i = 0; i < subDir.length; i++) {
    let subDirPath = path.join(dirPath, subDir[i]);
    treeDisplay(subDirPath, indent + "\t");
  }
}

// exporting the module 
module.exports = {
    tree:treeFun
}

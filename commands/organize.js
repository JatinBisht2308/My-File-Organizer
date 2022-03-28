// making the functionality of the organize.js

// introducing the different types of the files we can have inside a folder eg📹,🎵,document,image etc.

// path module
let path = require("path");
let fs = require("fs");
let types = {
  media: ["mp4", "mkv", "mp3", "mov"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
    "csv",
    "json",
  ],
  app: ["exe", "dmg", "pkg", "deb", "apk"],
  images: ["png", "jpg", "jpeg"],
 
};

// organize function intro
var srcPath;
// function startss...........
function organize(srcPath) {
  // 1)- To check that the source path is defined or not
  if (srcPath == undefined) {
    // The process.cwd() method returns the current working directory of the Node.js process.
    srcPath = process.cwd();
    // console.log(srcPath);
  }
  //    srcPath = "J:/Pepcoding Course/Web Development/Live Class/Project_3(day_20,21)/File_Organizer";

  // ----------------------------------------------------------------------------------
  //   Joining the organized_files folder in the srcPath
  // 2)- To create a directory named as organized_files
  let organizedFiles = path.join(srcPath, "organized_files");
  // console.log(organizedFiles);
  // mkdirSync(path) creates a directory of the arguments that you have passed in it
  if (!fs.existsSync(organizedFiles)) {
    fs.mkdirSync(organizedFiles);
  } else {
    console.log("💀💀 folder already exists💀💀");
    process.exit();
  }

  //   3)- scan the entire srcPath(downloads folder in this case)

  let allFiles = fs.readdirSync(srcPath);
  // console.log(allFiles);

  //   4)-  Travaese over the allFiles array and classify them on the basic of there extension (.mp3,.exe,.txt,etc.)

  for (let i = 0; i < allFiles.length; i++) {
    //  let fileExtension = allFiles[i].split('.')[1];
    //  let fileExtension = path.extname(allFiles[i]);
    //  console.log(fileExtension);
    // 1)- check if it is a file or folder bcoz we only organize the files
    let fullPathOfFile = path.join(srcPath, allFiles[i]);
    let isFile = fs.lstatSync(fullPathOfFile).isFile(); //is file ke bare ma notes and is drectory ke bare ma bhi notes
    // fs.lstatSync ke bare ma bhi notes
    // console.log(isFile);
    // 1.1)- get extension name
    if (isFile) {
      let fileExtension = path.extname(allFiles[i]).slice(1);
      // console.log(fileExtension);
      // 1.2)- get folder name from extension
      let folderName = getFolderName(fileExtension);
      // console.log(folderName);
      // 1.3)- copy files from the source path and paste it in the destination folder(media,docs,archeives,images).
      copyFilesToDest(folderName, srcPath, fullPathOfFile);
      // fullPathOfFile-> is the path of the file we have to copy.(kya copy karo)
      // folderName-> is the destination where we have to paste the file.(kaha paste karo)
      // srcPath-> is the directory/folder from where we have to copy the file.(kaha se copy karna ha)
    }
  }
}
// ..........function endss
// 👾👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 👾 
// functions used
// 1)- getFolderName
function getFolderName(fileExtension) {
  // magic
  let count = 0;
  for(key in types)
  {
    count++;
    let val = key;
    // console.log("This is val:");
    // console.log(val);
    // console.log("This is the values inside the val:");
    // console.log(types[val]);
    // for(let i =0;i<types[val].length;i++){
    //   console.log(types[val][i]);
    // }
    if(types[val].includes(fileExtension))
    {
      // console.log(val);
      // return the foldername in which it has to be pasted.(destination folder name).
      return val;
    }
    // edge case of this functionality🧮 
    // if fileExtension type is out our range then return miscallaeous
    if(count==5)
    {
      return "miscellaneous";
    }
  }
}

// 2)- copyFilesToDest
function copyFilesToDest(folderName, srcPath, fullPathOfFile) {
    // 1)- folderName ka path banana padega
    let destFolderPath = path.join(srcPath,"Organized_Files",folderName);

    // 2)- check that the destFolder exists or not if not then make this folder/directory
    if(!fs.existsSync(destFolderPath))
    {
      fs.mkdirSync(destFolderPath);
    }

    // 3)- copy file from the fullPathOfFile and then paste it to the destination folder
      
    // baseName returns the last portion of the path
    let fileName = path.basename(fullPathOfFile);//abc.zip
    // end wali jo abc.zip hogi uska path destFileName ke andar hoga
    let destFilePath = path.join(destFolderPath, fileName);
    // console.log(destFilePath);
    // copy the content of the for eg..(abc.zip) to the destFileName
           //where the file exist    //from where the file has to pasted
    fs.copyFileSync(fullPathOfFile, destFilePath);
              //idhar copy content  //idhar paste content 
}


// let dirPath =
//   "J:/Pepcoding Course/Web Development/Live Class/Project_3/File_Organizer/downloads";
// organize(dirPath);

module.exports = {
 organizeFunction:organize
};
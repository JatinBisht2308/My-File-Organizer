// Entry point of my command line.

// Taking input from the user
let inputByUser = process.argv.slice(2);

let userCommand = inputByUser[0];
let path = inputByUser[1];
console.log(path);


// ===========> Requiring the different modules inside the commands folder<============

// 1)- requiring the help.js 
const helpRequired = require('./commands/help');
// 2)- requiring the organize.js 
const organizeRequired = require('./commands/organize');
// 3)- requiring the tree.js
const treeRequired = require("./commands/tree");
// Checking and assiging the userCommand and alloting it a particular function by using Switch statements

switch(userCommand)
{
    case 'tree':
        // call tree function
       treeRequired.tree(path);
       console.log("ππππ Required tree for the directory has been createdππππ");
        break;
    case 'help':
        // call help function
        helpRequired.helpFunc();
        break;
    case 'organize':
        // call organize function
        organizeRequired.organizeFunction(path);
        console.log("ππππ Organized Files folder has been createdππππ");
        break;
    default:
        console.log("ππ!!!command not recognized!!!ππ");
        process.exit();
}                             

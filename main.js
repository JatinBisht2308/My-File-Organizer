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
// Checking and assiging the userCommand and alloting it a particular function by using Switch statements

switch(userCommand)
{
    case 'tree':
        // call tree function
        break;
    case 'help':
        // call help function
        helpRequired.helpFunc();
        break;
    case 'organize':
        // call organize function
        organizeRequired.organizeFunction(path);
        console.log("😇😇😇😇 Organized Files folder has been created😇😇😇😇");
        break;
    default:
        console.log("💀💀!!!command not recognized!!!💀💀");
        process.exit();
}
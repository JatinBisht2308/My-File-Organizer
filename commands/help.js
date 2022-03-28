// Help function
function help()
{
    console.log(`
    These are some common commands of myCLI used in various situations:💟 
    
    1: node main.js tree <path>
    2: node main.js organize <path>
    3: node main.js help 
    `);
}

// exporting this to the main.js
module.exports = {
    helpFunc:help
}
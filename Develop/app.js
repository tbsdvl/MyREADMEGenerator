const fs = require("fs");

function convertToMarkdown(data){
    convert = JSON.stringify(data);
    return convert
}
function generateMarkdown(data){
fs.writeFile("README2.md", convertToMarkdown(data.Title), (err) => 
err ? console.log(err) : console.log("Success!"))
}

module.exports = {
    fs,
    convertToMarkdown,
    generateMarkdown
}

const fs = require("fs");

function tableOfContents(){
  TOC = 
  "\n## Table of Contents\n\n"
  + "[Description](#description)\n\n"
  + "[Installation](#installation)\n\n"
  + "[Usage](#usage)\n\n"
  + "[Contributing](#contributing)\n\n"
  + "[Tests](#tests)\n\n"
  + "[Licenses](#licenses)\n\n"
  + "[Questions](#questions)\n\n"
   return TOC;
}

function getBadge(readLicense){
const badges = [
  "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0",
  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
];

if (readLicense.includes("MIT")) {
  return badges[2];
} else if (readLicense.includes("Mozilla")) {
  return badges[3];
} else if (readLicense.includes("Apache")) {
  return badges[0];
} else if (readLicense.includes("GNU")) {
  return badges[1];
}else{
    return
}
};

function convertToMarkdown(data) {
    readLicense = `## Licenses\n${data.License}\n`;
    readBadge = getBadge(readLicense);
    readTitle = `# ${data.Title}`+ " " + readBadge + `\n`;
    readTable = tableOfContents();
    readDesc = `## Description\n${data.Description}\n`;
    readInst = `## Installation\n${data.Installation}\n`;
    readUsage = `## Usage\n${data.Usage}\n`;
    readContrib = `## Contributing\n${data.Contributing}\n`;
    readTest = `## Tests\n${data.Tests}\n`;
    readGit = `## Questions\nMy GitHub Profile: [${data.github}](https://github.com/${data.github})\n`;
    readEmail = `\nMy Email: [${data.email}](mailto:${data.email})`;
    
    return readTitle + readTable + readDesc + readInst + readUsage + readContrib + readTest + readLicense + readGit + readEmail;
}

function generateMarkdown(data) {
  fs.writeFile("README2.md", convertToMarkdown(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

module.exports = {
  fs,
  // getBadge,
  convertToMarkdown,
  generateMarkdown,
};

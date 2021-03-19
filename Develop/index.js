const inquirer = require("inquirer");
const app = require('./app');

inquirer.prompt([
    {
        type: "input",
        message: "Project Title:",
        name: "Title",
    },
    {
        type: "input",
        message: "Description",
        name: "Description",
    },
    {
        type: "input",
        message: "Installation",
        name: "Installation",
    },
    {
        type: "input",
        message: "Usage",
        name: "Usage",
    },
    {
        type: "input",
        message: "Contributing",
        name: "Contributing",
    },
    {
        type: "input",
        message: "Tests",
        name: "Tests",
    },
    {
        type: "checkbox",
        message: "License: ",
        choices: ["MIT license", "Mozilla Public License 2.0", "Apache License 2.0", "GNU General Public License"],
        name: "License",
    },
    {
        type: "input",
        message: "GitHub username: ",
        name: "github",
    },
    {
        type: "input",
        message: "Enter email address: ",
        name: "email",
    }, 
])
.then((data) => {
    console.log(data)
    app.generateMarkdown(data)
});
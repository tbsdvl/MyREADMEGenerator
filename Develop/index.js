const inquirer = require("inquirer");
const app = require('./app');

inquirer.prompt([
    {
        type: "input",
        message: "Project Title:",
        name: "Title",
    }
])
.then((data) => {
    console.log(data)
    app.generateMarkdown(data)
});
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer')
const generateMarkdown = require('./generateMarkdown');

const questions = [
    {
        type: "input",
        name: "github",
        message: "what is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message: "what is your email?"
    },
    {
        type: "input",
        name: "projectURL",
        message: "Please link your project"
    },
    {
        type: "input",
        name: "projectName",
        message: "what is your Project name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a quick description of your project."
    },
    {
        type: "list",
        name: "license",
        message: "What licenses does your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]

    },
    {
        type: "input",
        name: "installation",
        message: "What commands do you need to install your dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"

    },{
        type: "input",
        name: "usage",
        message: "Please write quick things to know about your repository."
    },{
        type: "input",
        name: "contributing",
        message: "What does your user need to know about contributing to the repository?"
    },
    
];

function writeToFile(fileName, data){
    console.log(fileName,data);
    let x = fs.writeFileSync(path.join(process.cwd(),fileName),data);
    return x
}

function init(){
    inquirer.prompt(questions).then((inquirerResponses) =>{
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })
}

init();
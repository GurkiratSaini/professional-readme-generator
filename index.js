// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdownUtil = require("./utils/generateMarkdown.js");
const { generateMarkdown } = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project?",
  "Please write a brief description of your project: ",
  "Please enter the installation instructions for your project: ",
  "Please enter the intended usage for your project: ",
  "Please select the correct license for your project",
  "Please enter contributing information for your project: ",
  "Please enter the tests for your project: ",
  "Please enter your GitHub username: ",
  "Please enter your email address: ",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`./${fileName}`, JSON.stringify(data, null, "\t"), (err) => {
    if (err) throw err;
    console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        name: "project-title",
        type: "input",
        message: questions[0],
      },
      {
        name: "project-description",
        type: "input",
        message: questions[1],
      },
      {
        name: "installation-instructions",
        type: "input",
        message: questions[2],
      },
      {
        name: "project-usage",
        type: "input",
        message: questions[3],
      },
      {
        name: "project-license",
        type: "list",
        message: questions[4],
        choices: ["MIT", "Add more options pls"],
      },
      {
        name: "project-contributing",
        type: "input",
        message: questions[5],
      },
      {
        name: "project-tests",
        type: "input",
        message: questions[6],
      },
      {
        name: "github-username",
        type: "input",
        message: questions[7],
      },
      {
        name: "email-address",
        type: "input",
        message: questions[8],
      },
    ])
    .then((data) => {
      return generateMarkdown(data);
    })
    .then((markdownData => {
      console.log(markdownData);
      writeToFile("README.md", markdownData);
    }));
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project?",
  "Please write a brief description of your project: ",
  "Please enter the headings for a Table of Contents: ",
  "Please enter the installation instructions: ",
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
        name: "project-content-table-headings",
        type: "input",
        message: questions[2],
      },
      {
        name: "installation-instructions",
        type: "input",
        mesage: questions[3],
      },
      {
        name: "project-usage",
        type: "input",
        mesage: questions[4],
      },
      {
        name: "project-license",
        type: "list",
        mesage: questions[5],
        choices: ["MIT", "Add more options pls"],
      },
      {
        name: "project-contributing",
        type: "input",
        mesage: questions[6],
      },
      {
        name: "project-tests",
        type: "input",
        mesage: questions[7],
      },
      {
        name: "github-username",
        type: "input",
        mesage: questions[8],
      },
      {
        name: "email-address",
        type: "input",
        mesage: questions[9],
      },
    ])
    .then((data) => {
      console.log(data);
      writeToFile("README.md", data);
    });
}

// Function call to initialize app
init();

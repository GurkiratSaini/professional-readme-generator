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
  fs.writeFile(`./${fileName}`, data, (err) => {
    if (err) throw err;
    console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        name: "projectTitle",
        type: "input",
        message: questions[0],
        validate: (projectNameInput) => {
          if (projectNameInput) {
            return true;
          }
          console.log("Please enter the project name!");
          return false;
        }
      },
      {
        name: "projectDescription",
        type: "input",
        message: questions[1],
      },
      {
        name: "installInstructions",
        type: "input",
        message: questions[2],
      },
      {
        name: "projectUsage",
        type: "input",
        message: questions[3],
      },
      {
        name: "projectLicense",
        type: "list",
        message: questions[4],
        choices: ["None", "MIT License", "GNU General Public License", "Apache License 2.0", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
        default: "MIT License"
      },
      {
        name: "projectContribute",
        type: "input",
        message: questions[5],
      },
      {
        name: "projectTests",
        type: "input",
        message: questions[6],
      },
      {
        name: "githubUsername",
        type: "input",
        message: questions[7],
        validate: (githubName) => {
          if (githubName) {
            return true;
          } else {
            console.log("Please enter your GitHub username!");
            return false;
          }
        }
      },
      {
        name: "emailAddress",
        type: "input",
        message: questions[8],
        validate: (userEmail) => {
          if (userEmail) {
            return true;
          } else {
            console.log("Please enter your email address!")
            return false;
          }
        }
      },
      {
        name: "preferredMethodOfContact",
        type: "list",
        message: "What is your preferred method of contact?",
        choices: ["Email", "Github"]
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

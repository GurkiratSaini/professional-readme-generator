// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  // ["None", "MIT License", "GNU General Public License", "Apache License 2.0", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"]
  const licenseName = "";
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  if (license === "None") {
    return `[![License: ${licenseName}](${licenseBadge})](${licenseLink})`;
  }

  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  // projectLicense

  const badge = renderLicenseSection(data.projectLicense);
  return `# ${data.projectTitle}
  ${badge}

  ${data.projectDescription}

  ### Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

  ## Installation
  ${data.installInstructions}

  ## Usage
  ${data.projectUsage}

  ## Contributing
  ${data.projectContribute}

  ## Tests
  ${data.projectTests}

  ## Questions

  Contact email: ${data.emailAddress}\n
  GitHub: ${data.githubUsername}\n
  ${data.preferredMethodOfContact} is the best way to reach me.

  ## License
  This project is licensed under the terms of ${data.projectLicense}
  `;
}

module.exports = { generateMarkdown };

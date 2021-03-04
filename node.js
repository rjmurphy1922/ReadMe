const inquirer = require("inquirer")
const fs = require("fs")
 userPrompt = () => {
inquirer
  .prompt([
    
    {
  
    type: "input",
    name:"github",
    message: "Please Enter Your Project Title"

    },
{

    type: "input",
    name: "Installation",
    message:" Please Enter Installation Instructions",
   

},
{
    type: "input",
    name: "Usage",
    message:"Please Enter Usage Information",
},
{
    type: "input",
    name: "Contribution",
    message:"Contribution Guidelines",

},
{
    type: "input",
    name: "Test",
    message:"Please Enter Testing Information ",
},

{
  type: "input",
  name: "Tech",
  message:"Please Enter Technologies ",
},

{
  type: "list",
  name: "License",
  message:"Please select a License ",
  choices:[
    "MIT",
    "Apache license 2.0",
    "Mozilla Public License 2.0"
]
},

{
  type: "input",
  name: "Email",
  message:"Please input your email address",
},




  ])
  .then(answers => {

    



   const tempVar = `

   [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


   # ${answers.github}

   ## ${"Table of Contents"}

   


   [Installation](#Installation)
    <br>
   [Usage](#Usage)
   <br>
   [Conbtribution](#Contribution)
   <br>
   [Testing](#Testing)


  ## Installation
  ${answers.Installation}

  ## Usage Information
  ${answers.Usage}

  ## Contribution Information
  ${answers.Contribution}

  ## Testing Information
  ${answers.Test}

  ## Technologiess
  ${answers.Tech}

   ## Questions

   Please feel free to reach out with any additional questions through my email or on github.
   <br>
   https://github.com/rjmurphy1922
   <br>
  ${answers.Email}

   `
   fs.writeFileSync("README.md", tempVar)
    console.log(answers.github)
  })
  .catch(error => {
    if(error) {
   throw error
    };

   

  })



}


userPrompt();

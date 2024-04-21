#! /usr/bin/env code

import inquirer from "inquirer";



const answer = await inquirer.prompt([
   {message: "Enter 1st number:", type: "number", name: "first_Number"},
   {message: "Enter 2nd number:", type: "number", name: "second_Number"},
  {
    message: 'Select any operator',
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"]
  }
]);

if (answer.operator === "Addition") {
  console.log(answer.first_Number + answer.second_Number);
} else if (answer.operator === "Subtraction") {
  console.log(answer.first_Number - answer.second_Number);
}
else if (answer.operator === "Multiplication") {
  console.log(answer.first_Number * answer.second_Number);
}
else if (answer.operator === "Division") {
  console.log(answer.first_Number / answer.second_Number);
} else {
  console.log("Please select valid operator");
}



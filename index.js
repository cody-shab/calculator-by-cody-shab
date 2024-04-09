#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter 1st num:", type: "number", name: "firstNum" },
    { message: "Enter 2nd num:", type: "number", name: "secondNum" },
    {
        message: 'Select any operator',
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNum + answer.SecndNum);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNum - answer.SecndNum);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNum * answer.SecndNum);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNum / answer.SecndNum);
}
else {
    console.log("Please select valid operator");
}

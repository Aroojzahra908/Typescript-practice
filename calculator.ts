import inquirer from "inquirer";

let userInput=await inquirer.prompt([{
    type: "input",
    name: "num1",
    message: "Enter your First Number",
    validate: (ans) => {
        if (!ans) {
            return "Enter your Number please"
        }
        return true

    }
},
{
    type: "input",
    name: "num2",
    message: "Enter Your Second Number",
    validate: (ans) => {
        if (!ans) {
            return "Enter your Number please"
        }
        return true
    }
},
{
    type: "list",
    name: "operations",
    message: "Select the operation you want to perform",
    choices: ["Addition", "Subtraction", "Multiplication", "Division", "Modulos", "Exponent"],
    validate: (ans) => {
        if (!ans) {
            return "Enter your Number please"
        }
        return true
    }

}
])


let result: number;

switch (userInput.operations) {
    case "Addition":
        result = userInput.num1 + userInput.num2;
        console.log("The Addition of number 1 and number 2 is", result);
        break;
    case "Subtraction":
        result = userInput.num1 - userInput.num2;
        console.log("The Subtraction of number 1 and number 2 is", result);
        break;

    case "Multiplication":
        result = userInput.num1 * userInput.num2;
        console.log("The Multiplication of number 1 and number 2 is", result);
        break;

    case "Division":
        result = userInput.num1 / userInput.num2;
        console.log("The Division of number 1 and number 2 is", result);
        break;

    case "Modulos":
        result = userInput.num1 % userInput.num2;
        console.log("The Modulos of number 1 and number 2 is", result);
        break;

    case "Exponent":
        result = userInput.num1 ** userInput.num2;
        console.log("The Exponent of number 1 and number 2 is", result);
        break;



}

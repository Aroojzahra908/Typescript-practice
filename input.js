"use strict";
// npm init 
// tsc --init 
//tsc
// changes
// package.json >>>> type: module
// tsconfig: >> 14."target": "ES2022",  28. "module": "NodeNext", >> 30. "moduleResolution": "NodeNext", 
// 1.search npm inquirer
// 2.npm i inquirer >> terminal
// 3.npm install --save @types/inquirer >> terminal
//question 1
// import inquirer from 'inquirer';
// async function getUserInput() {
//     const questions = [
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is your name?',
//         },
//         {
//             type: 'list',
//             name: 'color',
//             message: 'Choose a color:',
//             choices: ['Red', 'Green', 'Blue'],
//         },
//     ];
//     const answers = await inquirer.prompt(questions);
// //     console.log('User input:');
// //     console.log(answers);
//  }
// getUserInput();
//question 2: 
// const answer = await inquirer.prompt([
//     {
//       type: "number",
//       name: "num1",
//       message: "Enter your first number",
//     },
//     {
//       type: "number",
//       name: "num2",
//       message: "Enter your second number",
//     },
//     {
//       type: "list",
//       name: "operator",
//       message: "Select the operator you want perform",
//       choices: ["Add", "Divide", "Multiply", "Substraction"],
//     },
//   ]);
//   let result: number;
//   switch (answer.operator) {
//     case "Add":
//       result = answer.num1 + answer.num2;
//       console.log("The answer for Add is " + result);
//       break;
//     case "Divide":
//       result = answer.num1 / answer.num2;
//       console.log("The answer for Divide is " + result);
//       break;
//     case "Multiply":
//       result = answer.num1 * answer.num2;
//       console.log("The answer for Multiply is " + result);
//       break;
//     case "Substraction":
//       result = answer.num1 - answer.num2;
//       console.log("The answer for Substraction is " + result);
//       break;
//   }
//add two numbers:
// async function main() {
//     const questions = [
//         {
//             type: 'number',
//             name: 'num1',
//             message: 'Enter the first number:',
//         },
//         {
//             type: 'number',
//             name: 'num2',
//             message: 'Enter the second number:',
//         },
//     ];
//     const answers = await inquirer.prompt(questions);
//     const num1 = answers.num2;
//     const num2 = answers.num2;
//     const result = num1 + num2;
//     console.log(result);
// }
// main();

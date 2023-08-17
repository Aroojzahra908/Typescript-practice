"use strict";
// write a program having an array of todos id the todos are in odd delete one from the center
// of array othereise remove two todos from the center of the array???
var todos = ["arooj", "ali", "areeba", "Aline", "Aiza", "Rameen"];
if (todos.length % 2 == 0) {
    var a = Math.floor(todos.length / 2);
    todos.splice(a, 2);
    console.log("the number is even", todos);
}
else if (todos.length % 2 != 0) {
    var b = Math.floor(todos.length / 2);
    todos.splice(b, 1);
    console.log("the number is odd", todos);
}
else {
    console.log("invalid input");
}
//consective cell is called array.
// print table 2 by using loop:
var index = 1;
while (index <= 10) {
    var result = index * 2;
    console.log("2*", index, "=", result);
    index++;
}
// Assignment no 4:
//Question no 1:
// Create a function that takes an array, an index, and a value as parameters.
// Inside the function, use the splice method to insert the value at the specified 
// index in the array. Return the modified array. 
function insertValueAtIndex(array, index, value) {
    if (index >= 0 && index <= array.length) {
        array.splice(index, 0, value);
    }
    else {
        console.log("Invalid index. The value was not inserted.");
    }
    return array;
}
var originalArray = [1, 2, 3, 4, 5];
var newIndex = 2;
var newValue = 10;
var modifiedArray = insertValueAtIndex(originalArray, newIndex, newValue);
console.log("Modified Array:", modifiedArray);
// second method:
function addMultipleValues(array, values) {
    array.push(...values);
    return array;
}
var originalArray = [1, 2, 3, 4, 5];
var newValues = [10, 11, 12];
var modifiedArray = addMultipleValues(originalArray, newValues);
console.log("Modified Array:", modifiedArray);
//Question no 2:
// Implement a simple shopping cart program using an array. Create functions to add items,
// remove items, and update quantities using the splice method. Print the cart's contents 
// after each operation 
//using splice function:
var items = [];
function cartItem() {
    //add
    items.splice(1, 0, "arooj", "ali", "Ayesha", "aliza", "rameen", "anaya");
    console.log("array after adding", items);
    //update
    items.splice(2, 1, "bisma");
    console.log("array after updating:", items);
    items.splice(2, 2, "bisma");
    console.log("array after updating", items);
    //delete
    items.splice(2, 1);
    console.log("array after deletion", items);
}
cartItem();
//using push function:
//var items: string[] = [];
// function cartItem() {
//     items.push("ali","hassan","arooj","alizy","rameen","bushra");
//   var a= typeof(items)
//   console.log(a)
//     console.log("The following items are",items);
// }
// cartItem()
//Question no 3:
// Write a program that uses a while loop to print the first 25 integers.
var index = 1;
while (index <= 25) {
    console.log(index);
    index++;
}
//Question no 4:
// Write a program that uses a while loop to print the first 10 even numbers
var index = 1;
while (index <= 10) {
    if (index % 2 === 0) {
        console.log("even number are:", index);
    }
    index++;
}
// question no 5:
// Create a function that takes a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.
// function factorial(num1:number){
//     while(num1>=1){
//         var fact:number=1;
//         fact*num1;
//         console.log(num1)
//     }
//     num1--;
//     console.log(num1)
//     return factorial;
// }
// factorial(55)
function factorialize(num) {
    // Step 1. Create a variable result to store num
    var result = num;
    // If num = 0 OR num = 1, the factorial will return 1
    if (num === 0 || num === 1)
        return 1;
    // Step 2. Create the WHILE loop 
    while (num > 1) {
        num--; // decrementation by 1 at each iteration
        result = result * num; // or result *= num; 
        /*
                        num           num--      var result      result *= num
        1st iteration:   5             4            5             20 = 5 * 4
        2nd iteration:   4             3           20             60 = 20 * 3
        3rd iteration:   3             2           60            120 = 60 * 2
        4th iteration:   2             1          120            120 = 120 * 1
        5th iteration:   1             0          120
        End of the WHILE loop
        */
    }
    // Step 3. Return the factorial of the provided integer
    return result; // 120
}
function factorial(num) {
    var result = 1; // Initialize result to 1
    while (num > 1) {
        result = result * num;
        num--;
    }
    return result;
}
console.log(factorial(1)); // Output: 120

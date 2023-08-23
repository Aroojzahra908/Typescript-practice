"use strict";
// write a program having an array of todos id the todos are in odd delete one from the center
// of array othereise remove two todos from the center of the array???
var todos = ["arooj", "ali", "areeba", "Aline", "Aiza", "Rameen"];
if (todos.length % 2 == 0) {
    var a = Math.floor(todos.length / 2);
    todos.splice(a - 1, 2);
    console.log("the number is even", todos);
}
else if (todos.length % 2 != 0) {
    var b = Math.floor(todos.length / 2);
    todos.splice(b - 1, 1);
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
function factorial(num) {
    var result = 1; // Initialize result to 1
    while (num > 1) {
        result = result * num;
        num--;
    }
    return result;
}
console.log(factorial(5)); // Output: 120
//working
/*
                num           num--      var result      result *= num
1st iteration:   5             4            5             20 = 5 * 4
2nd iteration:   4             3           20             60 = 20 * 3
3rd iteration:   3             2           60            120 = 60 * 2
4th iteration:   2             1          120            120 = 120 * 1
5th iteration:   1             0          120
End of the WHILE loop
*/
//Question no6:
// Write a program having an array of numbers if the number is negative, it should remove the negative number from the array.
// filter method to create a new array that contains only the numbers greater than or equal to 0.
//simple array method 1:
// the arrow function item => item >= 0 correctly represents the filtering condition where each item 
// in the array is checked whether it's greater than or equal to 0. The resulting array a will only 
// contain the non-negative numbers.
var array = [1, 2, 3, -1, -2, -3, 45];
var a = array.filter((item) => item >= 0);
console.log(a);
//array by using function method 2:
function isPositive(item) {
    return item >= 0;
}
var array = [1, 2, 3, -1, -2, -3, 45];
var a = array.filter(isPositive);
console.log(a);
// Question no7:
// Create a function that takes an array of numbers as parameters.Use a while loop to calculate and return the sum of all the 
// numbers in the array?
function SumOfArray(values) {
    var sum = 0;
    var index = 0;
    while (index < values.length) {
        sum = sum + values[index];
        index++;
    }
    return sum;
}
var value2 = [1, 2, 3, 4, 5, 6];
var a = SumOfArray(value2);
console.log(a);
// Question no 8:
// Convert each temperature to Fahrenheit using the formula F = (C * 9/5) + 32 and store the converted 
// temperatures in an array. Use a while loop to perform the conversion for each temperature
var celsiusTemperatures = [0, 10, 20, 30, 40];
var convertedTemperatures = [];
var index = 0;
while (index < celsiusTemperatures.length) {
    var celsius = celsiusTemperatures[index];
    var fahrenheit = (celsius * 9 / 5) + 32;
    convertedTemperatures.push(fahrenheit);
    index++;
}
console.log("Converted Temperatures:", convertedTemperatures);

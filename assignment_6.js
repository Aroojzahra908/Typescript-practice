"use strict";
// 1. Write a program that uses filter to remove all negative numbers from an array of numbers
var numbers = [12, -45, 7, -89, 34, -67, 23, 56];
var positiveNumbers = numbers.filter((num1) => {
    return num1 >= 0;
});
console.log("Original array:", numbers);
console.log("Array after removing negative numbers:", positiveNumbers);
// 2. Given an array of numbers [1, 2, 3, 4, 5], use the map method to create a new array where each number is multiplied by 2:
var numbers = [1, 2, 3, 4, 5];
var multipliedNumbers = numbers.map((num2) => {
    return num2 * 2;
});
console.log("Original array:", numbers);
console.log("New array with multiplied numbers:", multipliedNumbers);
// 3. Given an array of strings ["apple", "banana", "cherry", "date","grape"], use the filter method to create a new array containing 
// only the fruits with more than 5 characters.
var fruits = ["apple", "banana", "cherry", "date", "grape"];
var longFruits = fruits.filter((fruit) => {
    return fruit.length > 5;
});
console.log("Original array:", fruits);
console.log("New array with long fruits:", longFruits);
// 4. Given an array of numbers [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], use the map and filter methods together to create a new array containing the 
// squares of even numbers.
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var evenSquaredNumbers = nums.filter((numb) => {
    return numb % 2 === 0; // Filter even numbers
});
var arr2 = nums.map((evenNumber) => {
    return evenNumber ** 2; // Map to their squares
});
console.log("Original array:", nums);
console.log("New array with squares of even numbers:", arr2);
// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is 
// converted to Fahrenheit using the formula (Celsius * 9/5) + 32.
var celsiusTemperatures = [0, 10, 20, 30, 40];
var fahrenheitTemperatures = celsiusTemperatures.map((celsius) => {
    return (celsius * 9 / 5) + 32;
});
console.log("Original Celsius temperatures:", celsiusTemperatures);
console.log("Fahrenheit temperatures:", fahrenheitTemperatures);
// 6. Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the 
// doubled values of odd numbers.
var numbers = [3, 6, 9, 12, 15, 18];
var doubledOddValues = numbers.filter((num2) => {
    return num2 % 2 !== 0; // Filter odd numbers
});
var ar4 = numbers.map((oddNumber) => {
    return oddNumber * 2; // Map to their doubled values
});
console.log("Original array:", numbers);
console.log("New array with doubled values of odd numbers:", doubledOddValues);
// 7. Given an array of names ["Alice", "Bob", "Charlie", "David", "Emily"], use the forEach method to log each name with an 
// exclamation mark at the end, e.g., "Alice!"
var names = ["Alice", "Bob", "Charlie", "David", "Emily"];
names.forEach((name) => {
    console.log(name + "!");
});

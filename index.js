"use strict";
// Area of rectangle:
// question no 1:
// var width:number = 5
// var length: number = 12
// var area : number = length * width 
// console.log ( area ) 
// Question no 2 :
// length of cube:
// var c :number = 2
// var cube = c**3
// console.log(cube)
// QUESTION NO 1:
// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
// (celsius * 9/5) + 32;
// (fahrenheit - 32) * 5/9;
var Celsiustemp = 70;
var C_tO_F = (Celsiustemp * 9 / 5) + 32;
console.log("celcius to fahrehiet temperature is:", C_tO_F);
var fahrenheit = 70;
var F_tO_C = (fahrenheit - 32) * 5 / 9;
console.log("fahrehiet to celcius temperature is:", F_tO_C);
// QUESTION NO 2:
// Write a program that calculates the percentage.
var value = 75;
var total = 150;
var percentage = (value / total) * 100;
console.log("total percentage is", percentage);
// QUESTION NO 3:
// Write a program that converts given number of days in to weeks and days 
// such as 17 days = 2 weeks and 3 days.
var given_days = 17;
var week = 7;
var day_to_week = given_days / week;
var remaining_days = given_days % week;
console.log(given_days, "Days =", day_to_week.toFixed(0), "weeks and ", remaining_days, "days");
// write a program that convert month to years
var months = 18;
var year = 12;
var months_to_year = months / year;
var remaining_months = months % year;
console.log(months, "Months = ", months_to_year.toFixed(1), "years and ", remaining_months, "months");
// without roundoff
var months = 18;
var year = 12;
var months_to_year = months / year;
var remaining_months = months % year;
console.log(months, "Months = ", Math.floor(months_to_year), "years and ", remaining_months, "months");
// QUESTION NO 4:
// Write a program that calculates the discount for a product based on its 
// price. If the price is above $100, apply a 10% discount; otherwise, apply a 
// 5% discount:
var product_price = 100;
if (product_price > 100) {
    var discount_10_percent = product_price * ((100 - 10) / 100);
    console.log(`your price of product after 10% discount  ${discount_10_percent}`);
}
else {
    var discount_5_percent = product_price * ((100 - 5) / 100);
    console.log(`your price of product after 5% discount  ${discount_5_percent}`);
}
// QUESTION NO 5:
// Create a program that determines the category of a user-provided age. If the age 
// is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager."
// Otherwise, print "Adult."
var age = 12; // User-provided age
if (age >= 0 && age <= 12) {
    console.log("Child");
}
else if (age >= 13 && age <= 19) {
    console.log("Teenager");
}
else {
    console.log("Adult");
}
// QUESTION NO 6:
// Write a program that takes temperature and check it.
// If it is cold then suggest the user to wear warm clothes and so on according to the weather.
var temperature = 30;
if (temperature <= 20) {
    console.log("It's very cold. Wear heavy winter clothing.");
}
else if (temperature > 20 && temperature <= 30) {
    console.log("It's warm. A T-shirt and shorts would be comfortable.");
}
else if (temperature > 30) {
    console.log("It's cool. A light jacket or sweater should be fine.");
}
else {
    console.log("It's hot. Wear light and breathable clothing.");
}
// QUESTION NO 7:
// Write a program that checks if the given number is divisible by 3 or 5
// or both or not divisible by anyone show output accordingly.
var number = 12;
if (number % 3 === 0 && number % 5 === 0) {
    console.log(number + " is divisible by both 3 and 5.");
}
else if (number % 3 === 0) {
    console.log(number + " is divisible by 3.");
}
else if (number % 5 === 0) {
    console.log(number + " is divisible by 5.");
}
else {
    console.log(number + " is not divisible by either 3 or 5.");
}
// QUESTION NO 8:
// Write a program that checks if the given year is leap year or not.
var year = 2020;
if (year % 4 === 0) {
    console.log(year + " is a leap year.");
}
else {
    console.log(year + " is not a leap year.");
}

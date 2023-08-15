
// QUESTION NO 1:
// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse.
function CTOF(){
var Celsiustemp = 70;
var C_tO_F = (Celsiustemp * 9 / 5) + 32;
console.log("celcius to fahrehiet temperature is:", C_tO_F);
var fahrenheit = 70;
var F_tO_C = (fahrenheit - 32) * 5 / 9;
console.log("fahrehiet to celcius temperature is:", F_tO_C);
}

CTOF()
// QUESTION NO 2:
// Write a program that calculates the percentage.
function percent(value:number){
var total : number = 150;
var percentage: number = (value / total) * 100;
console.log("total percentage is", percentage);
}
percent(34)
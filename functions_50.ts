// Question no1:
// Write a JavaScript function that reverses a number.
function reverseNumber(value: number) {
    return parseInt(value.toString().split('').reverse().join(''));
}
const originalNumber = 1233;
const reversed = reverseNumber(originalNumber);
console.log("Original number:", originalNumber);
console.log("Reversed number:", reversed);
// Question no 2:
//Write a function that takes the length and width of a rectangle as parameters and calculates its area and perimeter.
function calculate_area_parameter(length: number = 5, width: number = 10) {
    var area: number = length * width;
    var parameter: number = 2 * (length + width)
    console.log("the area of a rectagle is:", area)
    console.log("the parameter of a rectangle is:", parameter)
}
calculate_area_parameter()
// Question no 3:
//Create a function to convert temperatures between Celsius and Fahrenheit. Write two functions, one for each conversion direction.
function ctof(celcius: number) {
    var c_to_F: number = celcius * (9 / 5) + 32;
    console.log("celcius to fahrenheit is:", c_to_F)
    return c_to_F;
}

ctof(33)
function ftoc(Fahrenheit: number) {
    var f_to_c: number = (Fahrenheit - 32) * 5 / 9;
    console.log("fahrenheit to celcius is:", f_to_c)
    return f_to_c
}
ftoc(78)
// Question no 3:
// Implement a function to calculate the factorial of a given positive integer?
function factorial_is(fact: number): number {
    if (fact === 0 || fact === 1) {
        return 1;
    }
    else {

        return fact * factorial_is(fact - 1);
    }
}
console.log("factorail is :", factorial_is(5))
// Question no 3:
// Write a function that checks whether a given number is positive or not.
function prime(num1: number) {
    if (num1 >= 0) {
        console.log("the number is positive")
    }
    else {
        console.log("the number is nagative")
    }
    return num1;
}

prime(-1)


// Question no 4:
// Write a typescript function to check whether an `input` is an array or not.
//false
function checkArray(input: any): boolean {
    return Array.isArray(input);
}
var a: number = 44;
console.log(checkArray(a));     // Output: false


//true
function checkArray1(input: any): boolean {
    return Array.isArray(input);
}
var array: number[] = [44, 33, 44, 55];
console.log(checkArray1(array));   // Output: true

// Question no 5:
// Write a JavaScript program that accepts a string as input and swaps the case of each character. 
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
function swapCase(input: string) {
    let result = '';
    for (var i = 0; i < input.length; i++) {
        var char = input[i];
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}
const inputString = 'The Quick Brown Fox';
const swappedString = swapCase(inputString);
console.log(swappedString);     // Output: 'tHE qUICK bROWN fOX'

// Question no 6:
// Write a typescriptScript program that accepts a string as input and swaps the case of each character. 
// For example if you input 'the QUiCk BroWn FoX' the output should be 'THE quIcK bRoWn fOx'.

function swapcase2(input2: string) {
    var result2: string = '';
    for (var i = 0; i < input2.length; i++) {
        var char2 = input2[i];
        if (char2 === char2.toUpperCase()) {
            result2 = result2 + char2.toLowerCase();
        }
        else {
            result2 = result2 + char2.toUpperCase();
        }
    }
    return result2;
}
var inputstring: string = "the QUiCk BroWn FoX";
var swapstring = swapcase2(inputstring);
console.log(swapstring);

// Question no 7:
//  Write a typeScript program to find the leap years in a given range of years.
function leapyear(startyear:number, endyear:number){
    var resultyear=[]
    for (var year = startyear; year <= endyear; year++) {
        if (year%4===0){
            console.log("the given year is leap year")
            resultyear.push(year);
        }
    }
    return resultyear;
}
 var startyear=2000;
 var endyear=2023;
var leapyear_in_range=leapyear(startyear,endyear)
console.log("Leap years between", startyear, "and", endyear, ":", leapyear_in_range);

//Question no 8:
// Write a JavaScript function that merges two arrays and removes all duplicate elements.
function summ_of(arr1:any, arr22:any){
    var mergedArray = arr1.concat(arr22);
    var unique_array= Array.from(new Set(mergedArray))
     return unique_array;
}
var arr1=[1,2,3,4,5]
var arr22=[2,3,4,66,7,8]
var result2=summ_of(arr1,arr22);
console.log(result2)

//Question no 9:
// Write a JavaScript function to remove a specific element from an array.
var input = [11, 22, 33, 44, 55];
var removed_number = input.splice(2, 1);
console.log("Removed number:", removed_number);
console.log("Remaining array:", input);

function element(input:any){
    var removed_number = input.splice(2, 1);
    return removed_number;
}
var input=[11,22,44,66,77]
var final_array=element(input)
console.log(final_array)

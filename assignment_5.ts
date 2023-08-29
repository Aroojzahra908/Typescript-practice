// Develop a program that calculates and prints the sum of the first n even numbers using a for loop??

var natural_number:number=10;
var sum:number=0
for(var i=1; i<=natural_number;i++){
    if(natural_number%2==0){
        sum=sum+i;             
    }
}
console.log("the sum of even natural number is:",sum);

//second method
var n = 5;    // Change this value to the desired number of even numbers
var sum = 0;

for (var i = 2; i <= 2 * n; i += 2) {
    sum += i;
}
console.log("Sum of the first", n, "even numbers:", sum);

// Implement a program that uses a for loop to iterate through an array of numbers and print only the even 
// numbers.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Even numbers in the array:");
for (var i = 0; i < numbers.length; i++) {
    if (i% 2 === 0) {
        console.log(i);
    }
}
// Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers 
// from them and just leave the odd ones??
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original array:", numbers);
for (var i = 0;i<=numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        numbers.splice(i, 1);
    }
}
console.log("Array after removing even numbers:", numbers);


// Write a program that defines a function to calculate the area of a circle. The function should take the radius as 
// input and return the calculated area.
function calculateCircleArea(radius:number) {
    var area = Math.PI * radius * radius;
    return area;
}
// var radius:number = 5; // Replace with the desired radius
var circleArea = calculateCircleArea(56);
console.log("The area of the circle with radius is:", circleArea);

// Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from 
// the array.
var grades = [85, 40, 65, 90, 30, 70, 55, 75, 48, 92];
console.log("Original grades:", grades);
for (var i = 0; i <grades.length; i++) {
    if (grades[i] < 50) {   
        grades.splice(i, 1);
    }
}
console.log("Grades after removing failing grades:", grades);

// Write a program that uses a function to find the largest element in an array of numbers.
var numbers = [12, 45, 7, 89, 34, 67, 23, 56];
if (numbers.length > 0) {
    var largestNumber = Math.max(...numbers);
    console.log("The largest number in the array is:", largestNumber);
} else {
    console.log("The array is empty.");
}
//second method:

// function largest(arr:any) {
//     var largestNumber = arr[0]; 
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] > largestNumber) {
//             largestNumber = arr[i];
//         }
// }
//     return largestNumber;
// }
// var numbers = [44, 4433, 63, 278, 27];
// var largestNumber:number = largest(numbers);
// console.log("The largest number in the array is:", largestNumber);

//for min
function largest(arr:any) {
    var largestNumber = arr[0]; 
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < largestNumber) {
            largestNumber = arr[i];
        }
}
    return largestNumber;
}
var numbers = [44, 4433, 63, 278, 27]
var largestNumber:number = largest(numbers);
console.log("The largest number in the array is:", largestNumber);


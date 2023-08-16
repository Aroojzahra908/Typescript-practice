"use strict";
// // write a program having an array of todos id the todos are in odd delete one from the center
// // of array othereise remove two todos from the center of the array???
// var todos:string[]=["arooj", "ali","hassan","Aline","Aiza","Rameen"];
// if(todos.length % 2==0){
//     var a= Math.floor(todos.length/2)
// todos.splice(a,2);
// console.log("the number is even",todos);
// }
// else if(todos.length %2 !=0){
// var b= Math.floor(todos.length/2)
//     todos.splice(b,1)
//     console.log("the number is odd",todos);
// }
// else{
//     console.log("invalid input")
// }
// //consective cell is called array.
// // print table 2 by using loop:
// var index:number=1;
// while(index<=10){
//     var result=index*2;
//     console.log("2*" ,index, "=", result)
//     index++;
// }
// // Assignment no 4:
// //Question no 1:
// // Create a function that takes an array, an index, and a value as parameters.
// // Inside the function, use the splice method to insert the value at the specified 
// // index in the array. Return the modified array. 
// function insertValueAtIndex(array:any, index:any, value:any) {
//     if (index >= 0 && index <= array.length) {
//         array.splice(index, 0, value);
//     } else {
//         console.log("Invalid index. The value was not inserted.");
//     }
//     return array;
// }
// var originalArray = [1, 2, 3, 4, 5];
// var newIndex = 2;
// var newValue = 10;
// var modifiedArray = insertValueAtIndex(originalArray, newIndex, newValue);
// console.log("Modified Array:", modifiedArray);
// // Implement a simple shopping cart program using an array. Create functions to add items,
// // remove items, and update quantities using the splice method. Print the cart's contents 
// // after each operation 
// var items: string[] = [];
// function cartItem() {
//     console.log("Shopping cart content:", items);
// }
// function add_item(index: number, value: string) {
//     if (index >= 0 && index <= items.length) {
//         if (index === items.length) {
//             items.push(value); // If index is at the end, use push
//         } 
//     } else {
//         console.log("Please add a correct value.");
//     }
//     return items;
// }
// cartItem();
// add_item(1, "ali");
function addMultipleValues(array, values) {
    array.push(...values);
    return array;
}
var originalArray = [1, 2, 3, 4, 5];
var newValues = [10, 11, 12];
var modifiedArray = addMultipleValues(originalArray, newValues);
console.log("Modified Array:", modifiedArray);

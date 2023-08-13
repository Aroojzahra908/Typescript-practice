"use strict";
// write a program having an array of todos id the todos are in odd delete one from the center
// of array othereise remove two todos from the center of the array???
var todos = ["arooj", "ali", "hassan", "Aline", "Aiza", "Rameen"];
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

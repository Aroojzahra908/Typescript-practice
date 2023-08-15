"use strict";
// // function sum(num1:number,num2:number){
// //     var result:number=num1+num2
// //     return result
// // }
// // var sumResult:number=sum(10,20)
// // sumResult=sumResult+40
// // console.log(sumResult)
// //before and after
// // function sum(num1:number,num2:number){
// //     var result:number=num1+num2
// //     console.log(result)
// //     return result
// // }
// // var sumResult:number=sum(10,20)
// // sumResult=sumResult+40
// // console.log(sumResult)
// // function sum(num1:number,num2:number){
// //     var result:number=num1+num2
// //     return result
// //         //error bcz return two times in one block 
// //  var result2:number=num1+num2+10
// // return result2
// // }
// // function sum(num1:number,num2:number):number{   //data type here
// //     var result:number=num1+num2
// //     console.log(result)
// //     return "arooj"            //error here due to data type
// // }
// // var sumResult:number=sum(10,20)
// // sumResult=sumResult+40
// // console.log(sumResult)
// //calling before function: and then define function 
// // sum(10,20)
// // function sum(num1:number,num2:number){
// //     var result:number=num1+num2
// //     console.log(result)
// //     return result
// // }
// //arrow function: anonyms function(jin ka koi name na ho ) //result empty
// // ()=>{
// //     var num1:number=10;
// //     var num2:number=20;
// //     var result:number=num1+num2;
// //     console.log(result)
// // }
// // method 2: print value 
// // var sumArow=()=>{
// //     var num1:number=10;
// //     var num2:number=20;
// //     var result:number=num1+num2;
// //     console.log(result)
// // }
// // sumArow()
// // receive paremeters
// // var sumArow=(num1:number, num2:number)=>{
// //     var result:number=num1+num2;
// //     console.log(result)
// // }
// // sumArow(10,20)
// // //also we use datatype 
// // var sumArow=(num1:number, num2:number):number=>{
// //     var result:number=num1+num2;
// //     console.log(result)
// // return result
// // }
// // sumArow(10,20)
// //Type
// // var sumArow=(num1:number, num2:number):number=>num1+num2
// // console.log(typeof sumArow)
// //local scope variable is not accessible in global scope 
// // var num1:number=10;
// // let num2:number=110;
// // const num3:number=210;
// // function printConsole(){
// //     var localvariable=50;
// //     console.log("function")
// // }
// // localvariable            //global scope
// //global scope variables are accessible in local scope:
// // var num1:number=10;
// // let num2:number=110;
// // const num3:number=210;
// // function printConsole(){
// //  //num1    (accessible)
// //     var localvariable=50;
// //     console.log("function", num1);
// // }
// // printConsole()
// //block scope with function: //error because of if function 
// // if (2>5){
// //     var ifVariable:number=10;
// // }
// // console.log(ifVariable);
//block scope  (not accessible)
{
    var ifVariable = 10;
    // let ifVariable:number=10; (not accesible)
    // const ifVariable:number=10; (not accesible)
}
console.log(ifVariable);

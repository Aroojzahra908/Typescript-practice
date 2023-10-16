// Develop a program that determines the day of the week. Ask the user for a number (1-7) 
// and use nested if statements to print the corresponding day's name.
var dayNumber:number=6;
if (dayNumber >= 1 && dayNumber <= 7) {
    if (dayNumber === 1) {
        console.log("Day " + dayNumber + " is Sunday.");
    } else if (dayNumber === 2) {
        console.log("Day " + dayNumber + " is Monday.");
    } else if (dayNumber === 3) {
        console.log("Day " + dayNumber + " is Tuesday.");
    } else if (dayNumber === 4) {
        console.log("Day " + dayNumber + " is Wednesday.");
    } else if (dayNumber === 5) {
        console.log("Day " + dayNumber + " is Thursday.");
    } else if (dayNumber === 6) {
        console.log("Day " + dayNumber + " is Friday.");
    } else {
        console.log("Day " + dayNumber + " is Saturday.");
    }
} else {
    console.log("Invalid input. Please enter a number between 1 and 7.");
}

// Write a program that takes the number of units consumed by a user if it is greater
// than 100 then add 10% tax if greater than 200 then add 15% of tax so on up to if
// greater than 500 then add 25% of tax Where the tax amount will be calculated by
// the amount of bill.

var consumedUnit:number=100;
var numOfunits:number= 600
var bill:number= numOfunits* consumedUnit;

if(numOfunits>100 && numOfunits<200){
    var updated_bill:number=bill+(bill*0.1);
    console.log("your no of units is", numOfunits, "so your bill after tax is", updated_bill);

}

else if(numOfunits>200 && numOfunits<500){
    var updated_bill:number=bill+(bill*0.15);
    console.log("your no of units is", numOfunits, "so your bill after tax is", updated_bill);
    
}
else if(numOfunits>500){
    var updated_bill:number=bill+(bill*0.15);
    console.log("your no of units is", numOfunits, "so your bill after tax is", updated_bill);
    
}
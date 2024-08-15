// Q2: Personal Message: Store a person’s name in a variable, and print a message to
// that person. Your message should be simple, such as, “Hello Eric, would you like
// to learn some Python today?”

var Name: string = "Farhan";
console.log("Hello " + Name + " would you like to learn some Python today?");

function Greetings(Name: string) {
    console.log("Hello " + Name + " would you like to learn some Python today?");
}

Greetings("farhan,Ali")

//Q3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

function titleCase(Name: string) {
    console.log("Name in upper case: " + Name.toUpperCase());
    console.log("Name in lower case: " + Name.toLowerCase());

    const TitleCase: string = Name
        .split(' ')
        .map((words) => words.charAt(0).toUpperCase() + words.slice(1).toLowerCase())
        .join(' ');
    console.log(TitleCase)
}

titleCase("farhan Ali")

// Q4 Famous Quote: Find a quote from a famous person you admire. Print the quote
// and the name of its author. Your output should look something like the following,
// including the quotation marks:


var Qoute: string = '"A person who never made a mistake never tried anything new" ';
console.log("Albert Einstein once said, ", Qoute);

// Q5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name
// in a variable called famous_person. Then compose your message and store it in a
// new variable called message. Print your message.


var personName: string = "David";
var message: string = '"Eyes never lies"';

console.log(personName, "once Said, ", message);


// Q6 Stripping Names: Store a person’s name, and include some whitespace characters
// at the beginning and end of the name. Make sure you use each character
// combination, "\t" and "\n", at least once. Print the name once, so the whitespace
// around the name is displayed. Then print the name after striping the white
// spaces.


var stripName: string = "\tFarhan\n\tAli";
console.log(stripName);

const NewName: string = stripName.trim()
console.log(NewName);

// Q7+ Q8 Number Eight: Write addition, subtraction, multiplication, and division operations
// that each result in the number 8. Be sure to enclose your operations in print
// statements to see the results.

// it will print sum, sub, mult, div, of two numberrs
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);


// Q9 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.

var FavNum: number = 5;
var message: string = "Your Favourite number is";
// it will combine both of above two variables and print message
console.log(message, " ", FavNum);

// Question 10 related to comments so i have added comments in the above questions


// Q11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

var Names: string[] = ["Shaheen", "Shahdab", "Shoaib Malik", "Haris Rauf", "Naseem Shah"];
console.log(Names);

for (let i = 0; i < Names.length; i++) {
    console.log(Names[i]);

}

// Q12 Greetings: Start with the array you used in Exercise 11, but instead of just printing
// each person’s name, print a message to them. The text of each message should
// be the same, but each message should be personalized with the person’s name.

var Names: string[] = ["Ali", "Asad", "Alina", "Ayesha"];
console.log(Names);

for (let i = 0; i < Names.length; i++) {
    console.log(Names[i], "Good Evening");

}

// 13. Your Own Array: Think of your favorite mode of transportation, such as a
// motorcycle or a car, and make a list that stores several examples. Use your list to
// print a series of statements about these items, such as “I would like to own a
// Honda motorcycle.”


var transportation: string[] = ["BMW", "YBR", "Heavy Bike"];
console.log(Names);

for (let i = 0; i < transportation.length; i++) {
    // console.log(Names[i],"Good Evening");
    if (transportation[i] == "BMW") {
        console.log(transportation[i], "i like BMW");

    } else if (transportation[i] == "YBR") {
        console.log(transportation[i], "fav bike");
    } else if (transportation[i] == "Heavy Bike") {
        console.log(transportation[i], "Most fav bike");
    }
}

// 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would
// you invite? Make a list that includes at least three people you’d like to invite to
// dinner. Then use your list to print a message to each person, inviting them to
// dinner.

var Guest: string[] = ["Javeria", "Talha", "Hannan", "sidra"];
console.log(Names);
Guest.splice(3, 1, "Faiza")


for (let i = 0; i < Guest.length; i++) {
    // console.log(Names[i],"Good Evening");

    if (Guest[i] == "Javeria") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");

    } else if (Guest[i] == "Talha") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Hannan") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Faiza") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }

}
console.log("Sidra cannot join us in the party");
// 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
            // functinality includein next function
// Q16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
// a. Start with your program from Exercise 15. Add a print statement to the end of
// your program informing people that you found a bigger dinner table.

var Guest: string[] = ["Javeria", "Talha", "Hannan", "sidra"];
console.log(Names);
Guest.splice(3, 1, "Faiza")
// b. Add one new guest to the beginning of your array.
Guest.unshift("Waleed")
// c. Add one new guest to the middle of your array. • Use append() to add one new
// guest to the end of your list. • Print a new set of invitation messages, one for
// each person in your list.
Guest.splice(Guest.length / 2 + 1, 0, "Afridi")
// • Use append() to add one new guest to the end of your list. •
Guest.push("Razaq")
for (let i = 0; i < Guest.length; i++) {
    // console.log(Names[i],"Good Evening");

    if (Guest[i] == "Javeria") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");

    } else if (Guest[i] == "Talha") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Hannan") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Faiza") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Waleed") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Afridi") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Razaq") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }

}
console.log("Sidra cannot join us in the party");
// a. Start with your program from Exercise 15. Add a print statement to the end of
// your program informing people that you found a bigger dinner table.
console.log("We found a bigger table so we will invite more mehmaan");






// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
var Guest: string[] = ["Javeria", "Talha", "Hannan", "sidra"];
console.log(Names);
Guest.splice(3, 1, "Faiza")

Guest.unshift("Waleed")

Guest.splice(Guest.length / 2 + 1, 0, "Afridi")
for (let i = 0; i < Guest.length; i++) {


    if (Guest[i] == "Javeria") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");

    } else if (Guest[i] == "Talha") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Hannan") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Faiza") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Waleed") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    } else if (Guest[i] == "Afridi") {
        console.log(Guest[i], "Hi i hope you are doing well, i am very excited to invite you ion my Company party");
    }

}
console.log("Sidra cannot join us in the party");

console.log("We found a bigger table so we will invite more mehmaan");
// 17(a). Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

console.log("you can invite only two people for dinner.");

// 17(b). Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

var Guest1: string[] = ["Javeria", "Talha", "Hannan", "sidra"];
while (Guest1.length > 2) {
    var Final = Guest1.pop()
    console.log("you’re sorry you can’t invite them to dinner.", Final);

}



// 17(c). Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let i = 0; i < Guest1.length; i++) {
    console.log(Guest1[i], "You are still invited");

}
// 17(d). Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
for (let i = 0; i <= Guest1.length; i++) {
    Guest1.pop()

}
console.log(Guest1);



// 18. Seeing the World: Think of at least five places in the world you’d like to visit

// 18(a) Store the locations in a array. Make sure the array is not in alphabetical order.
var favLocations: string[] = ["a", "e", "t", "c", "f"];
// 18(b). Print your array in its original order.
console.log("Array in its origional order is: ", favLocations);
// 18(c). Print your array in alphabetical order without modifying the actual list.
var copyArray: string[] = [...favLocations];// it will make an copy of array favlocations
copyArray.sort();
console.log(copyArray);

// 18(d). Show that your array is still in its original order by printing it.
console.log(favLocations);

// 18(e). Print your array in reverse alphabetical order without changing the order of the original list.
var copyArray1: string[] = [...favLocations];// it will make an copy of array favlocations
copyArray1.reverse();
console.log(copyArray1);

// 18(f). Show that your array is still in its original order by printing it again
console.log("18(f) origional", favLocations);

// 18(g). Reverse the order of your list. Print the array to show that its order has changed.
var copyArray1: string[] = [...favLocations];// it will make an copy of array favlocations
copyArray1.reverse();
console.log(copyArray1);

// 18(h). Reverse the order of your list again. Print the list to show it’s back to its original order.
var copyArray1: string[] = [...favLocations];// it will make an copy of array favlocations
copyArray1.sort();
console.log(copyArray1);
// 18(i). Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
var copyArray1: string[] = [...favLocations];// it will make an copy of array favlocations
copyArray1.sort();
console.log(copyArray1);

// 18(j). Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
var copyArray1: string[] = [...favLocations];// it will make an copy of array favlocations
copyArray1.reverse();
console.log(copyArray1);

// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var Dinner: string[] = ["Ali", "fatima", "Ahmed"]
var Maxpeople: number = 0
for (let i = 0; i < Dinner.length; i++) {

    Maxpeople = Maxpeople + i;


}
console.log("Totall nuber of people you invited are ", Maxpeople);

// 20. Think of something you could store in a array. For example, you could make a list
// of mountains, rivers, countries, cities, languages, or anything else you’d like. Write
// a program that creates a list containing these items.

var Arr: string[] = ["Python", "Farhan", "Nokia", "Open Ai", "Meta"];
console.log("List of items");
console.log(".............");
var Arr_1 = Arr.map((items, index) => {
    console.log((index + 1) + ". " + items);


})

// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

var car: { model: number, name: string, color: string } = {
    model: 2020,
    name: "BMW",
    color: "Black"
};

// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program

var ErrorIndex: string[] = ["Farhan", "Leo", "AI", "Specialist"];
ErrorIndex.splice(1, 0, "DataScience");
console.log(ErrorIndex);
console.log(ErrorIndex[10]); // it will cause an error

// 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// a. Look closely at your results, and make sure you understand why each line evaluates to True or False.

// Example 1 test for equality
let num: number = 42;
console.log("Is number == 42? I predict True.");
console.log(num == 42);
// Example 2  test for enequality
let fruit: string = "banana";
console.log("is fruit is not equal to apple? i pridict the true");
console.log(fruit != "Apple");
// Example 3  Numeric comparison
let num1: number = 20;
console.log("is number<30? i pridecit the true");
console.log(num1 < 30);

// Example 4  weekend test
let day: string = "sunday"
console.log("is it sunday? i pridict true");
console.log(day == "sunday");

// Example 5  weekend test
let year: string = "September"
console.log("is it September? i pridict true");
console.log(year == "September");


// Example 6  logical
let isweekend = true;
let hasPlane = false;
console.log("today i have a plan i pridict false");
console.log(isweekend && hasPlane);

// Example 7  logical
let isRainyDay = true;
console.log("it is raining ? i pridict false ");
console.log(!isRainyDay);

// Example 8  logical
let isFeePaid = false;
console.log(" fee is paid ? i pridict false ");
console.log(isFeePaid);

// Example 9 logical operators

let isNameFarhan = true;
let isAge26 = true;
console.log("my age is 26? i pridict false");
console.log(!isAge26);

// Example 10 logical operators

let uni = true;
console.log("i didnt go to uni i prodict false");
console.log(!uni);


// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// a. Tests for equality and inequality with strings
// Equality
let equality: string = "Leo";
console.log("is leo==leo? i pridict true");
console.log(equality == "Leo");
// inequality
let equality1: string = "Leo";
console.log("is leo==leo? i pridict true");
console.log(equality1 == "leo");



// b. Tests using the lower case function

let lowerCase: string = "farhan";
let isLowerCase = false;
console.log("it is lower case? i predict true");
console.log(lowerCase.toLowerCase() == "farhan");

// c. Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let a: number = 10;
let b: number = 20;
console.log("start", a == b);
console.log(a != b);
console.log(a >= b && a <= b);
console.log(a >= b || a <= b);
console.log(a <= b);
console.log("............");

// d. Tests using "and" and "or" operators
let c: number = 20;
let d: number = 30;
console.log(c == d && c < d);
console.log(c == d || c < d);
console.log("*****");

// e. Test whether an item is in a array
var arr2: string[] = ["Chocolate", "Sandwich", "Pizza", "burger"];
if (arr2.includes("Chocolate")) {
    console.log("Chocolate");
} else {
    console.log("item not include");

}


// f. Test whether an item is not in a array
var arr3: string[] = ["Chocolate", "Sandwich", "Pizza", "burger"];
if (arr3.includes("fries")) {
    console.log("Chocolate");
} else {
    console.log("item not include");

}
// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

var alien_color: string[] = ["green", "yellow", "red"];
// a. Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
let color: boolean = alien_color.includes("green")
if (color) {
    console.log("Player just earned 5 points");

}

//b. Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)

if (color) {
    console.log("Test is pass");
    console.log(color == true);
} else {
    console.log(false);

}


// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
var alien_color2: string[] = ["green", "yellow", "red"];
// a. If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let color2: boolean = alien_color2.includes("Green")
if (color2) {
    console.log("player just earned 5 points for shooting the alien.");
    // b. If the alien’s color isn’t green, print a statement that the player just earned 10 points. 
} else {
    console.log("player just earned 10 points.");

}


// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
var alien_color3: string[] = ["green", "yellow", "red"];

//a. If the alien is green, print a message that the player earned 5 points.
for (let i = 0; i < alien_color3.length; i++) {
    if (alien_color3[i] == "green") {
        console.log(alien_color3[i], "So, player earned 5 points.");
        //b. If the alien is yellow, print a message that the player earned 10 points.
    } else if (alien_color3[i] == "yellow") {
        console.log(alien_color3[i], "So,player earned 10 points.");
        //c. If the alien is red, print a message that the player earned 15 points.
    } else if (alien_color3[i] == "red") {
        console.log(alien_color3[i], "So,player earned 15 points.");
    }
}

// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:

var age: number = 24;
// a. If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    console.log("person is baby");
    // b. If the person is at least 2 years old but less than 4, print a message that the  person is a toddler. 
} else if (age == 2 || age < 4) {
    console.log("person is a toddler.");
    // c. If the person is at least 4 years old but less than 13, print a message that the person is a kid.   
} else if (age == 4 || age < 13) {
    console.log("person is a kid");
    // d. If the person is at least 13 years old but less than 20, print a message that the person is a teenager.    
} else if (age == 13 || age < 20) {
    console.log("person is a teenager.");
    // e. If the person is at least 20 years old but less than 65, print a message that the person is an adult.   
} else if (age == 20 || age < 65) {
    console.log("person is an adult.");
    // f. If the person is age 65 or older, print a message that the person is an  elder    
} else if (age >= 65) {
    console.log("person is an  elder");

}

// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// a. Make a array of your three favorite fruits and call it favorite_fruits.
var favFruits: string[] = ["apple", "banana", "orange", "dates", "kiwi", "grapes"]

// b. Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
favFruits.map((fruit) => {
    if (fruit == "apple") {
        console.log("i like apple it Gives the energy");

    } else if (fruit == "banana") {
        console.log("i like banana it Gives the energy ");

    } else if (fruit == "orange") {
        console.log("i like orange it Gives the energy ");

    } else if (fruit == "dates") {
        console.log("i like dates it Gives the energy ");

    } else if (fruit == "kiwi") {
        console.log("i like kiwi it Gives the energy ");

    } else {
        console.log("i dont like ");

    }
})


// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:


var usernames: string[] = ["admin", "farhan", "ali", "asad"]

// a. If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
usernames.map((Names) => {
    if (Names == "admin") {
        console.log("HELLO ADMIN would you like to see a status report?");
        // b. Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.     
    } else if (Names == "farhan") {
        console.log("Hello", Names, "thank you for logging in again.");

    } else if (Names == "ali") {
        console.log("Hello", Names, "thank you for logging in again.");

    } else if (Names == "asad") {
        console.log("Hello", Names, "thank you for logging in again.");

    }
})

console.log(".........******");

// by using for loop
for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == "admin") {
        console.log("HELLO ", usernames[i], "would you like to see a status report?");

    } else {
        console.log("Hello", usernames[i], "thank you for logging in again.");

    }
}
// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

var users: string[] = ["Farhan", "Ali", "Asad", "Hassan"]
// a. Remove all of the usernames from your array, and make sure the correct message is printed.

while (users.length > 0) {
    users.pop()
}
// b. If the list is empty, print the message We need to find some users!
if (users.length == 0) {
    console.log("We Need some users!");

}


// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username. 

// a. Make a list of five or more usernames called current_users.

var current_users: string[] = ["Farhan", "Talha", "Hanan", "Asad", "Ali"]

// b. Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

var new_users: string[] = ["Zohaib", "Ahmed", "Shehriyaar", "Sami", "Farhan", "Hanan"]

// c. Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

for (var i = 0; i < new_users.length; i++) {

    if (current_users.includes(new_users[i])) {
        console.log(new_users[i], "Sorry, the username is already in use.");
    } else {
        console.log(new_users[i], "Congratulations! The username is available.");
    }
}


// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.



// a. Store the numbers 1 through 9 in a array.

var ordinalNum: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// c. Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.

for (let i = 0; i < ordinalNum.length; i++) {
    if (ordinalNum[i] == 1) {
        console.log(ordinalNum[i]);

    } else if (ordinalNum[i] == 2) {
        console.log(ordinalNum[i]);
    } else if (ordinalNum[i] == 3) {
        console.log(ordinalNum[i]);
    } else {
        console.log(ordinalNum[i] + "th");

    }
}

// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.

var pizzas: string[] = ["chicken fajita", "behari kabbab", "malai boti"]

for (let i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);

}
// a. Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
var pizzas: string[] = ["chicken fajita", "behari kabbab", "malai boti"]

for (let i = 0; i < pizzas.length; i++) {
    console.log("i like", pizzas[i], "pizza");

}
console.log("Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven");




// 35. Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var animals: string[] = ["Dog", "parriot", "Sparrow"]

for (let i = 0; i < animals.length; i++) {
    console.log("A", animals[i], " would make a great pet");

}
console.log("Any of these animals would make a great pet!");


// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size: number, message: string) {
    console.log("your size of T-shirt is", size, "and printed text is", message);

}

make_shirt(23, "Hello World");

// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt2(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`Your size of T-shirt is ${size} and printed text is "${message}"`);
}


make_shirt2();

make_shirt2("Medium");

make_shirt2("Small", "Hello, World!");


// 38. Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.



function describe_city(city: string, country: string = "Pakistan") {
    console.log(city, "is in", country);

}
describe_city("lahore")
describe_city("New York", "USA");

// 39. City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this: "Lahore, Pakistan" Call your function with at least three city-country pairs, and print the value that’s returned.


function city_country(city: string, country: string) {
    console.log('"' + city + ",", country + '"');

}

city_country("Faisalabd", "Pakistan")
city_country("Lahore", "Pakistan")
city_country("Islamabad", "Pakistan")

// 40. Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.


function make_album(artist_name: string, album_title: string) {

    const album1 = {
        title: "Tum Bin",
        artist: "Farhan",
        album: ["Song1", "song2", "song3", "song4"]
    }

    if (artist_name == album1.artist && album_title == album1.title) {
        console.log(album1);

    }

}

make_album("Farhan", "album1")

function albums(title: string, artist: string) {
    const album2 = {
        title: "Tum Bin",
        artist: "Farhan",
        album: ["Song1", "song2", "song3", "song4"]
    }
    const album3 = {
        title: "simplicity",
        artist: "Farhan",
        album: ["Song1", "song2", "song3", "song4"]
    }
    const album4 = {
        title: "Innocent",
        artist: "Farhan",
        album: ["Song1", "song2", "song3", "song4"]
    }

    if (title == album2.title && artist == album2.artist) {
        console.log(album2);

    } else if (title == album3.title && artist == album3.artist) {
        console.log(album3);

    } else if (title == album4.title && artist == album4.artist) {
        console.log(album4);

    }

}

albums("Innocent", "Farhan")

function make_new_album(songs: string[]) {
    let new_album = {
        title: "Tears",
        artist: "Farhan",
        songs: songs,
    };
    songs.push(...new_album.songs);
    console.log(new_album);
}

make_new_album(["s1", "s2", "s3"]);

// 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array
var magician_names: string[] = ["Ali", "Asad", "Alina", "David"];
function show_magicians(magician: string[]) {
    for (let i = 0; i < magician.length; i++) {
        console.log(magician[i]);


    }
}
show_magicians(magician_names)
console.log("**********");

// 42. Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

var magician_names: string[] = ["Ali", "Asad", "Alina", "David"];
function make_great(magician: string) {   

    for (let i = 0; i < magician_names.length; i++) {
        console.log(magician + magician_names[i]);
   }  
}

make_great("Great ")

// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

var magician_names: string[] = ["Ali", "Asad", "Alina", "David"];
function make_great1(magician: string="Great") {
    console.log("magician name with great ");
    for (let i = 0; i < magician_names.length; i++) {
        console.log(magician + magician_names[i]);
    }
    console.log("origional magician name");
    var copy_magician_name: string[] = [...magician_names];
    console.log(copy_magician_name);
}

make_great1()

// 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwich_order(items:string[]){
    console.log("*** Summary of your order ***");
    for(let i=0;i<items.length;i++){
        console.log(items[i]);        
    }    
}

sandwich_order(["Sandwich1","potato Sandwich","Chicken Sandwich"])
sandwich_order(["Simple_Sandwich","egg_Sandwich","Egg Potato_Sandwich"])
sandwich_order(["SANDWICH111","SANDWICH222","SANDWICH333"])

// 45. Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly


function Cars1(company: string = "Honda", model: number = 2024, ...args: any[]) {
    let car_object: any = {
        Company: company,
        Model: model,
    };

    
    for (let i = 0; i < args.length; i += 2) {
        const name: string = args[i];
        const value: any = args[i + 1];
        car_object[name] = value;
    }

    console.log(car_object);
}


Cars1("Suzuki", 2020, "Color", "Red", "Price", 2500000, "Engine", "8000cc");
Cars1("Honda", 2023, "Color", "Blue");
Cars1("Audi", 2024, "Color", "Silver", "OptionalFeature", "Sunroof");

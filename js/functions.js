"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */


console.log("EXERCISE: sayHello function");

function sayHello(name) {
    return "Hello, " + name + "!";
}



/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello("Emily");
console.log (helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "Emily";
console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */

console.log("EXERCISE: isTwo function");
console.log(random);

function isTwo(x) {
    return (x === 2);
}

console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

console.log("EXERCISE: calculateTip function");
function calculateTip (x,y) {
  var result = x * y;
  return result;
}

console.log(calculateTip(0.2,100));

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

console.log("EXERCISE: calculateTip function with prompts");
var billTotal = prompt("What is your bill total?");
console.log(billTotal);

var tipPercentage = prompt("What percentage would you like to tip?");
console.log(tipPercentage);

function tipDecimalAmount(tipPercentage) {
    var decimal = tipPercentage / 100;
    return decimal;
}

var tipTotal = calculateTip(tipDecimalAmount(tipPercentage),billTotal)

alert("Your tip amount is $" + calculateTip(tipDecimalAmount(tipPercentage),billTotal));

alert("Your total amount is $" + (parseInt(billTotal) + parseInt(tipTotal)));


/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */

console.log("EXERCISE: applyDiscount function");
function applyDiscount (originalPrice, discountPercent) {
    var result = (originalPrice * discountPercent);
    return result;
}

console.log(applyDiscount(100, 0.2))


// BEGIN BONUS EXERCISES
console.log("BEGIN BONUS EXERCISES");

console.log("BONUS: Identity function");
function identity (x) {
    return x;
}
console.log(identity("I am an argument"));

console.log("BONUS: isOdd function");
function isOdd (x) {
    var result = ((x % 2) !== 0);
    return result;
}

var x = 3;
console.log("input is " + x + ", result is " + isOdd(x));

console.log("BONUS: isEven function");
function isEven (x) {
    var result = ((x % 2) === 0);
    return result;
}

var x = 4;
console.log("input is " + x + ", result is " + isEven(x));

console.log("BONUS: isPositive function");
function isPositive(x) {
    return x > 0;
}

var x = 3;
console.log("input is " + x + ", result is " + isPositive(x));

console.log("BONUS: decrement function");
function decrement(someNumber) {
    return someNumber - 1;
}

var someNumber = 12;
console.log("input is " + someNumber + ", result is " + decrement(someNumber));

console.log("BONUS: hasSpaces function");
function hasSpaces(string) {
    var result = string.indexOf(" ") !== -1;
    return result;
}

var string = "Hello Codeup"
console.log("input is " + string + ", result is " + hasSpaces(string));

console.log("BONUS: isFive function");
function isFive(x) {
    var result = (x === 5);
    return result;
}

var x = 5;
console.log("input is " + x + ", result is " + isFive(x));

console.log("BONUS: square function");
function square(x) {
    return x * x;
}

var x = 4;
console.log("input is " + x + ", result is " + square(x));

console.log("BONUS: cube function");
function cube(x) {
    return (x * x * x);
}

var x = 3;
console.log("input is " + x + ", result is " + cube(x));

console.log("BONUS: half function");
function half(x) {
    return x/2;
}

var x = 24;
console.log("input is " + x + ", result is " + half(x));

console.log("BONUS: double function");
function double(x) {
    return x * 2;
}

var x = 24;
console.log("input is " + x + ", result is " + double(x));

console.log("BONUS: isValidPassword function");

var username = "codeup";
var password = "notastrongpassword";

function isValidPassword(password) {
    var passwordLength = (parseInt(password.length) > 5);
    var usernameNotIncluded = (password.indexOf(username)) === -1;
    var noWhitespace = (password.trim() === password);
    return passwordLength && usernameNotIncluded && noWhitespace;
}

console.log(isValidPassword(password));

console.log("BONUS: isRightTriangle function");
function isRightTriangle(a,b,c) {
    var aSquared = a*a;
    var bSquared = b*b;
    var cSquared = c*c;
    return (aSquared + bSquared) === cSquared;
}

var a = 3;
var b = 4;
var c = 5;
console.log("Input is a=" + a + ", b=" + b + ", and c=" + c + ". The result is..." + isRightTriangle(a,b,c))
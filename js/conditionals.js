"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

console.log("starting 'enter number' exercise");

var enterNumber = confirm("Would you like to enter a number?");

console.log(enterNumber);

if (enterNumber) {
    var userNumber = prompt("Please enter a number");
} else {
    alert("You did not enter a number");
}

var transformedNumber = parseFloat(userNumber);

console.log(transformedNumber);

var numberIsEven = (transformedNumber % 2) === 0;

if (numberIsEven) {
    alert("The number you entered is even.");
} else {
    alert("The number you entered is odd.");
}

function numberPlus100(transformedNumber) {
    return (transformedNumber + 100);
}

alert("The number you entered + 100 = " + numberPlus100(transformedNumber));


var numberIsPositive = (transformedNumber > 0);
var numberIsNegative = (transformedNumber < 0);

if (numberIsPositive) {
    alert("The number you entered is positive.");
} else if (numberIsNegative) {
    alert("The number you entered is negative.");
} else {
    alert("The number you entered is 0 or not a number");
}

console.log("End of 'enter number' exercise");


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

console.log("starting 'enter a color' exercise");
var color = 'red';

function analyzeColor(color) {
    if (color === "blue") {
        alert("blue is the color of the sky");
    } else if (color === "red"){
        alert("Strawberries are red");
    } else if (color === "cyan") {
        alert("I don't know anything about cyan");
    }
}

analyzeColor("red");

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
console.log("selecting a random color");
console.log("randomly selected color is " + randomColor);
analyzeColor(randomColor)

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

function analyzeColor(color){
    switch(color) {
        case "red":
            alert("Strawberries are red");
            break;
        case "orange":
            alert("Oranges are orange");
            break;
        case "yellow":
            alert("The sun is yellow");
            break;
        case "green":
            alert("The grass is green");
            break;
        case "blue":
            alert("The sky is blue");
            break;
        case "indigo":
            alert("Indigo girls?");
            break;
        case "violet":
            alert("You're turning violet, Violet");
            break;
    }
}



/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userInputColor = prompt("Please enter a color");

console.log("The color you entered is " + userInputColor)

analyzeColor(userInputColor)

console.log("End of 'enter a color' exercise");


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

console.log("starting 'calculate total' exercise");

function calculateTotal(x,y) {
    switch(luckyNumber) {
        case (1):
            x = 0.1;
            break;
        case (2):
            x = 0.25;
            break;
        case (3):
            x = 0.35;
            break;
        case (4):
            x = 0.5;
            break;
        case (5):
            x = 1;
            break;
}
return y - (x * y)
}


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

console.log("Your luckyNumber is " + luckyNumber);

var billTotal = prompt("What was the total amount of your bill?");

console.log("Your total, after the discount, comes to $" + parseFloat(calculateTotal(luckyNumber,billTotal)).toFixed(2));

console.log("End of 'calculate total' exercise");
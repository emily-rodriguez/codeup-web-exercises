'use strict';

// do {
//
//     var number = prompt("Please enter an odd number between 1 and 50");
//
// } while ((number % 2 === 0) || (number >= 50));
//
// console.log('Number to skip is:' + number);
//
// for (var i = 1; i < 50; i+=2) {
//
//     if (number == i) {
//         console.log('Yikes! Skipping number:' + i);
//         continue;
//     } else {
//         console.log('Here is an odd number: ' + i);
//     }
// }

// alternate solution:

function isNumeric(x) {
    return !isNaN(parseFloat(x));
}

function isOdd(input) {
    return isNumeric(input) && input % 2 !== 0;
}

var number;

do {
    number = parseFloat(prompt("Please input an odd number between 1 and 50"));
} while(!isOdd(number));

console.log("The number to skip is: " + number);

for (var i = 1; i <= 50; i++) {
    if (i == number) {
        console.log("Yikes! Skipping number " + i);
        continue;
    }
    if(isOdd(i)) {
        console.log("Here is an odd number: " + i);
    }
}



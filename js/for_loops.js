'use strict';

function showMultiplicationTable(number) {
   for (var i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number*i));
   }
}

showMultiplicationTable(7);

function randomInt(start, end){
    return Math.floor(Math.random() * (end - start)) + start;
}

for (var i = 1; i <= 10; i++) {
    var randomNumber = randomInt(20, 200);
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even");
    } else {
        console.log(randomNumber + " is odd");
    }
}


for (var i = 1; i < 10; i++) {
    var a = ' ';
    for(var b = 1; b <= i; b++) {
        var a = a + i;
    }
    console.log(a);
}

// alternate (WAY CLEANER!) solution:
//
// for (var i = 1; i <= 9; i++) {
//     i = i.toString();
//     console.log(i.repeat(i));
// }
// to add ten 0's...
//
// var string;
//
// for (var i = 1; i <= 10; i++) {
//     i = i.toString();
//     string = i.substring(i.length -1);
//     console.log(string.repeat(i));
// }

for (var i = 100; i >= 5; i -= 5) {
    console.log(i);
}
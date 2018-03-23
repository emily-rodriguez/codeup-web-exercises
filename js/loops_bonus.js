'use strict';

// 1. Write a loop that plays "99 bottles of beer" song.
// It should say bottle instead of bottles when there's only one, ' +
// 'and the song is over when there are 0 bottles.


console.log("99 bottles of beer on the wall, 99 bottles of beer. Take one down, pass it around ");

for (var i = 98; i > 0; i--) {
    if (i > 1) {
        console.log(i + " bottles of beer on the wall! " + i + " bottles of beer on the wall, " + i +
            " bottles of beer. Take one down, pass it around ");
    } else {
        console.log(i + " bottle of beer on the wall! " + i + " bottle of beer on the wall " + i +
            " bottle of beer. Take one down, pass it around 0 bottles of beer on the WAAAAALLLLLLL!!!! ");
    }
}

// 2. Write the loop and code necessary to sum all integers between 1 to 100, including 100.
//

var total = 0;

for (var i = 1; i <= 100; i++) {
    total += i;
}

console.log(total);


// 3. Write a loop that starts at 1 and goes to 100. for each number that
// is a multiple of 3, output the string "Fizz". For each number that is a
// multiple of 5, output the string "Buzz". For numbers that are multiples of
// both 3 and 5, output "FizzBuzz".. For all other numbers, output the number
// itself.

for (var i = 1; i <= 100; i++) {
    if ((i % 5 === 0) && (i % 3 === 0)) {
        console.log("FizzBuzz");
        continue;
    }
    if (i % 3 === 0) {
        console.log("Fizz");
        continue;
    }
    if (i % 5 === 0) {
        console.log("Buzz");
        continue;
    } else {
        console.log(i);
    }
}

//     Output:
// 1
// 2
// "Fizz"
// 4
// "Buzz"
// "Fizz"
// 7
// 8
// "Fizz"
// "Buzz"
// 11
// "Fizz"
// 13
// 14
// "FizzBuzz"
// 16
//     ...
//
// 4. Write the code/loop that outputs the first 20 Fibonacci numbers.

//
// Fibonacci sequence formula =
//
//     x(i) = x(i-1) + x(i-2)

var i;
var fib = [];

fib[0] = 0;
fib[1] = 1;
for(i = 2; i < 20; i++) {

    fib[i] = fib[i-2] + fib[i-1];
    console.log(fib[i]);

}
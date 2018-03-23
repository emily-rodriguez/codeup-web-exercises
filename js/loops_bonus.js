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

// for (var i = 1; i <= 100; i++) {
//     var a = parseFloat(' ');
//     for (var b = 1; b <= i, b++;) {
//        var a = a + i;
//     }
//     console.log(a);
// }

for (var i = 1; i <= 100; i++) {
    var a =
}



// 3. Write a loop that starts at 1 and goes to 100. for each number that
// is a multiple of 3, output the string "Fizz". For each number that is a
// multiple of 5, output the string "Buzz". For numbers that are multiples of
// both 3 and 5, output "FizzBuzz".. For all other numbers, output the number
// itself.



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
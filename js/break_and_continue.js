do {

    var number = prompt("Please enter an odd number between 1 and 50");

} while ((number % 2 === 0) || (number >= 50));

console.log('Number to skip is:' + number);

for (var i = 1; i < 50; i+=2) {

    if (number == i) {
        console.log('Yikes! Skipping number:' + i);
    } else {
        console.log('Here is an odd number: ' + i);
    }
}

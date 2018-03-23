var number = prompt("Please enter an odd number between 1 and 50");


console.log('Number to skip is:' + number);

for (var i = 1; i < 50; i++) {

    if (i % 2 == 0) {
        // number is even
        // odd numbers are cooler
        // skip the rest of the loop and continue with the next iteration
        continue;
    }

    if (number == i) {
        console.log('Yikes! Skipping number:' + i);
    } else {
        console.log('Here is an odd number: ' + i);
    }

    if (i >= 49) {
        break;
    }
}

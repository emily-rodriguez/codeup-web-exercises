function showMultiplicationTable(number) {
   for (var i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number*i));
   }
}

showMultiplicationTable(6);


for (var i = 1; i <= 10; i++) {
    var randomNumber = Math.floor(Math.random() * 200) + 20;
    // console.log('for loop iteration #' + i + ', random number = ' + randomNumber);
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even");
    } else {
        console.log(randomNumber + " is odd");
    }
}

function isString(input) {
    return typeof input === "string";
}

for (var i = 1; i < 10; i++) {
    var a = ' ';
    for(var b = 1; b <= i; b++) {
        var a = a + i;
    }
    console.log(a);
}

for (var i = 100; i >= 5; i) {
    console.log(i);
    var i = i - 5;
}
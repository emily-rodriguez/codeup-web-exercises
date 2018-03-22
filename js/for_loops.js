function showMultiplicationTable(number) {
   for (var i = 1; i <= 10; i++) {
    console.log(number + " x " + i + " = " + (number*i));
   }
}

showMultiplicationTable(6);


for (var i = 1; i <= 10; i++) {
    var randomNumber = Math.floor(Math.random() * 200) + 20;
    console.log('for loop iteration #' + i + ', random number = ' + randomNumber);
    if (randomNumber % 2 === 0) {
        console.log("Hey! That's an even number yo!");
    } else {
        console.log("Hey, that number is odd yo!");
    }
}
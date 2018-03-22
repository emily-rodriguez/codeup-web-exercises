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

for (var i = 1, j = 0; i < 10, j < 10; i++,) {

}
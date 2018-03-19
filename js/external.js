"use strict";

console.log("Hello from external JavaScript!")

// alert("Welcome to my Website!")
//
// var favColor = prompt("What's your favorite color?");
//
// alert("Great, " + favColor + " is my favorite color too!")


// // MOVIE PROBLEM
// var littleMermaidDays = prompt("How many days did you rent The Little Mermaid?");
// console.log(littleMermaidDays);
//
// var brotherBearDays = prompt("How many days did you rent Brother Bear?");
// console.log(brotherBearDays);
//
// var herculesDays = prompt("How many days did you rent Hercules?");
// console.log(herculesDays);
//
// var totalcost = ((Number(littleMermaidDays) + Number(brotherBearDays) + Number(herculesDays)) * 3);
//
// alert("You owe a total of $" + totalcost.toFixed(2));

// // PAY PROBLEM
// var googleRate = 400;
// var amazonRate = 380;
// var facebookRate = 350;
//
// var googleHours = prompt("How many hours did you work for Google?");
// var amazonHours = prompt("How many hours did you work for Amazon?");
// var facebookHours = prompt("How many hours did you work for Facebook?");
//
// var totalPay = ((googleRate * googleHours) + (amazonRate * amazonHours) + (facebookRate * facebookHours));
//
// alert("Your total pay will be $" + Number(totalPay));

// // CLASS PROBLEM
// var classFull = confirm("Is the class full?");
// console.log(classFull);
//
// var scheduleConflict = confirm("Does it conflict with your schedule?");
// console.log(scheduleConflict);
//
// var meetsRequirements = !classFull && !scheduleConflict;
//
// alert("Can you take this class?: " + meetsRequirements);
// console.log("Can user take class?: " + meetsRequirements);

//DISCOUNT PROBLEM
var items = prompt("How many items in your cart?");
console.log(items >= 2);

var offerexpired = confirm("Is the offer expired?");
console.log(offerexpired);

var premiumMember = confirm("Are you a premium member?")
console.log(premiumMember);

var enoughItems = items >= 2;

var canUseCoupon = (enoughItems && !offerexpired) || (enoughItems && premiumMember);

alert ("Can you use this coupon: " + canUseCoupon);
console.log("Can coupon be used?: " + canUseCoupon);

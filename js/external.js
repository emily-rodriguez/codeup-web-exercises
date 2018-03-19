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
// var pricePerDay = 3;
//
// var totalcost = ((Number(littleMermaidDays) + Number(brotherBearDays) + Number(herculesDays)) * pricePerDay);
//
// alert("You owe a total of $" + totalcost.toFixed(2));

// // PAY PROBLEM
// var googleRate = 400;
// var amazonRate = 380;
// var facebookRate = 350;
//
// var googleHours = parseInt(prompt("How many hours did you work for Google?"));
// var amazonHours = parseInt(prompt("How many hours did you work for Amazon?"));
// var facebookHours = parseInt(prompt("How many hours did you work for Facebook?"));
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

// DISCOUNT PROBLEM
var items = prompt("How many items in your cart?");
console.log(items > 2);

var isOfferExpired = confirm("Is the offer expired?");
console.log(isOfferExpired);

var isPremiumMember = confirm("Are you a premium member?");
console.log(isPremiumMember);

var canUseCoupon = (items > 2 && !isOfferExpired) || (enoughItems && isPremiumMember);

alert ("Can you use this coupon: " + canUseCoupon);
console.log("Can coupon be used?: " + canUseCoupon);

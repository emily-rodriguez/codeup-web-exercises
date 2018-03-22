var i = 2;

while (i <= 65536) {
    console.log(i);
    var i = i * 2;
}

var allCones = Math.floor(Math.random() * 50) + 50;


console.log("I have to sell " + allCones + " cones today");

do {
    var conesBought = Math.floor(Math.random() * 5) + 1;
    console.log("Customer would like " + conesBought + " cones");
    if (conesBought > allCones) {
        console.log("I'm sorry, I can't sell you " + conesBought + " cones, I only have " + allCones + " left");
        allCones -= allCones;
    } else {
        allCones -= conesBought;
    }
    if (conesBought <= allCones) {
        console.log(conesBought + " cones sold!");
    }
    console.log("I have " + allCones + " cones left.");
} while (allCones > 0);


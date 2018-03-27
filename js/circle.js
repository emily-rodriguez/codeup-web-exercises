(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function (input) {
            // TODO: complete this method
            // hint: area = pi * radius^2
            return Math.PI * Math.pow(this.radius, 2);
        },


        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (true) {
                area = Math.round(area);
                // If doRounding is true, round the result to the nearest integer.
                // Otherwise, output the complete value

                console.log("Area of a circle with radius: " + circle.radius + ", is: " + area);
            }
        }

    };

    var area = circle.getArea(circle);

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
    // console.log("Area of a circle with radius: " + circle.radius + ", is: " + circle.logInfo());

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
    // console.log("Area of a circle with radius: " + circle.radius + ", is: " + circle.logInfo());

})();

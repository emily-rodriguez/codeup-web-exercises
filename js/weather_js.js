"use strict";


var forecast = $.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: "71f25e5faa7c8d90ac72d5eae5ed34b3",
    q:     "San Antonio, US",
    units: "imperial",
    cnt: 3
});

forecast.fail(function(jqXHR, status, error) {
    console.log(status);
    console.log(error);
});

forecast.done(function(response){
    console.log(response);

    $('#weather-panels').html("");

    response.list.forEach(function(day){
        $('#weather-panels').append(
            "<div class='col card text-white text-center bg-primary'><div class='card-body'><h3>" + Math.round(day.main.temp_max) + "&deg/ " +
                Math.round(day.main.temp_min) + "&deg" + "</h3>" +
                "<h6>" + "<strong>" + day.weather[0].main + ": </strong>" + day.weather[0].description + "</h6>" +
                "<h6>" + "<strong>Humidity: </strong>" + day.main.humidity + "</h6>" +
                "<h6>" + "<strong>Wind: </strong>" + day.wind.speed + "</h6>" +
                "<h6>" + "<strong>Pressure: </strong>" + day.main.pressure + "</h6>"
        );
    });
});

var mapOptions = {
    zoom: 4,
    center: {
        lat: 39.8283,
        lng: -98.5795
    }
};
var mapCanvas = document.getElementById('map-canvas');

var map = new google.maps.Map(mapCanvas, mapOptions);

var geocoder = new google.maps.Geocoder();


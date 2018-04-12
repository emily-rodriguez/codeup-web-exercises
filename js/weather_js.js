"use strict";

var sanAntonio = {
    lat: 29.4241,
    lng: -98.4936
};

function scrollTop() {
    window.scroll ({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}

function getForecast(lat, lon) {

    var forecast = $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: "71f25e5faa7c8d90ac72d5eae5ed34b3",
        lat: lat,
        lon: lon,
        units: "imperial",
        cnt: 3
    });

    forecast.fail(function (jqXHR, status, error) {
        console.log(status);
        console.log(error);
    });

    forecast.done(function (response) {
        console.log(response);

        $('#weather-panels').html("");

        response.list.forEach(function (day) {
            $('#weather-panels').append("<div class='col card text-white text-center bg-primary'><div class='card-body'><h3>"
                + Math.round(day.main.temp_max) + "&deg/ " + Math.round(day.main.temp_min) + "&#8457" +
                "<div><img src='http://openweathermap.org/img/w/" + day.weather[0].icon + ".png'></div>" +
                "</h3>" + "<h6>" + "<strong>" + day.weather[0].main + ": </strong>" + day.weather[0].description + "</h6>" +
                "<h6>" + "<strong>Humidity: </strong>" + day.main.humidity + "</h6>" +
                "<h6>" + "<strong>Wind: </strong>" + day.wind.speed + "</h6>" +
                "<h6>" + "<strong>Pressure: </strong>" + day.main.pressure + "</h6>")
        });

        $('#city-name').html("");

        $('#city-name').append(response.city.name);

        scrollTop();

    });
};

getForecast(sanAntonio.lat, sanAntonio.lng);



var mapOptions = {
    zoom: 4,
    center: {
        lat: 39.8283,
        lng: -98.5795
    }
};

var mapCanvas = document.getElementById('map-canvas');

var map = new google.maps.Map(mapCanvas, mapOptions);


var marker = new google.maps.Marker({
    position: sanAntonio,
    map: map,
    draggable: true,
    animation: google.maps.Animation.DROP
});


google.maps.event.addListener(marker, 'dragend', function(event){
    var newLat = event.latLng.lat();
    var newLong = event.latLng.lng();
    getForecast(newLat, newLong);
});


function callback(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
        console.log(results);
        map.setCenter(results[0].geometry.location);
        var inputLat = results[0].geometry.location.lat;
        var inputLng = results[0].geometry.location.lng;
        getForecast(inputLat, inputLng);
        function moveMarker (map, marker) {
            marker.setPosition(results[0].geometry.location);
            map.panTo(results[0].geometry.location);
        };

        moveMarker(map, marker);

    } else {
        console.log("Geocoding was not successful - STATUS: " + status);
    }
}

var geocoder = new google.maps.Geocoder();

$('#search').click(function(event){
    var cityInput = $('#city-search').val();
    console.log(cityInput);
    geocoder.geocode({address: cityInput}, callback)
});

$('#city-search').keydown(function(event){
    if(event.key === 'Enter'){
        var userInput = $(this).val();
        geocoder.geocode({address: userInput}, callback);
    }
});








function weatherBalloon(zip_code) {
    var key = apikey;
    fetch('https://api.openweathermap.org/data/2.5/weather?zip=' + zip_code + '&appid=' + key)
        .then(function (resp) { return resp.json() }) // Convert data to json
        // .then(function (data) {
        //     console.log(data);
        // })

        .then(function (data) {
            drawWeather(data); // Call drawWeather
        })
        .catch(function () {
            // catch any errors
        });
}

function drawWeather(d) {
    // var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

    document.getElementById('description').innerHTML = d.weather[0].description;
    document.getElementById('temp').innerHTML = fahrenheit + ' &deg;F';
    document.getElementById('location').innerHTML = d.name;
}

zip_code = 84321;
window.onload = function () {
    weatherBalloon(zip_code);
}
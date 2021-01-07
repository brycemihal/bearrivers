// 41.96511 Lat, -111.55621 Lon

function oneCallWeather(lat, lon) {
    var key = apikey;
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + key)
        .then(function (resp) { return resp.json() }) // Convert data to json
        .then(function (data) {
            console.log(data);
        })

        // .then(function (data) {
        //     drawCurrentWeather(data); // Call drawWeather
        // })

        // .then(function (data) {
        //     drawHourlyForecast(data); // Call drawWeather
        // })

        .catch(function () {
            // catch any errors
        });
}

function drawCurrentWeather(d) {
    // var celcius = Math.round(parseFloat(d.current.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(d.current.temp) - 273.15) * 1.8) + 32);

    document.getElementById('description').innerHTML = d.current.weather[0].description;
    document.getElementById('temp').innerHTML = fahrenheit + ' &deg;F';
    document.getElementById('location').innerHTML = 'Beaver Mountain';
}

function drawHourlyForecast(d) {
    // var celcius = Math.round(parseFloat(d.current.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(d.hourly[0].temp) - 273.15) * 1.8) + 32);

    document.getElementById('description').innerHTML = d.current.weather[0].description;
    document.getElementById('temp').innerHTML = fahrenheit + ' &deg;F';
    document.getElementById('location').innerHTML = 'Beaver Mountain';
}

// zip_code = 84321;
// beaver mountain
var lat = 41.96511;
var lon = -111.55621;
window.onload = function () {
    oneCallWeather(lat, lon);
}
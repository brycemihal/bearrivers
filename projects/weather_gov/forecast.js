// async function getUACForecast(region) {
//     var url = 'https://utahavalanchecenter.org/forecast/' + region + '/json';
//     const response = await fetch(url, {
//         method: 'GET',
//         mode: 'no-cors',
//         credentials: 'include',
//         headers: {
//             'Content-Type': 'application/json',
//             'User-Agent': 'https://brycemihal.github.io/bearrivers/, bryce.mialevich@gmail.com',
//         }
//     });
//     console.log(response)
//     const data = await response.json();
//     console.log(data);
//     // drawRose(data);
// }

// function drawRose(d) {
//     document.getElementById('uac').src = d.overall_danger_rose_image;
// }
// function drawWeather(d) {
//     // var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
//     var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

//     document.getElementById('description').innerHTML = d.weather[0].description;
//     document.getElementById('temp').innerHTML = fahrenheit + ' &deg;F';
//     document.getElementById('location').innerHTML = d.name;
// }

async function getGrids(lat, lon) {
    var url = 'https://api.weather.gov/points/' + lat + ',' + lon;
    console.log(url)
    const response = await fetch(url, {
        // method: 'GET',
        // headers: {
        // 'User Agent': 'https://brycemihal.github.io/bearrivers/, bryce.mialevich@gmail.com',
        // }
    });

    const data = await response.json();
    console.log(data)
    // return [data.properties.gridX];//, data.properties.gridY, data.properties.gridID];
}

async function getGrids(lat, lon) {
    var url = 'https://api.weather.gov/points/' + lat + ',' + lon;
    console.log(url)
    const response = await fetch(url, {
        // method: 'GET',
        // headers: {
        // 'User Agent': 'https://brycemihal.github.io/bearrivers/, bryce.mialevich@gmail.com',
        // }
    });

    const data = await response.json();
    console.log(data)
    // return [data.properties.gridX];//, data.properties.gridY, data.properties.gridID];
}

var lat = 41.72839;
var lon = -111.8349;

// const [gridX,gridY,gridID] = getGrids(lat, lon)
//     .catch(function () {
//         console.error(error); // catch any errors            
//     });

var gridID = "SLC";
var gridX = 107;
var gridY = 218;

getForecast(gridX, gridY, gridID)
    .catch(function () {
        console.error(error); // catch any errors            
    });
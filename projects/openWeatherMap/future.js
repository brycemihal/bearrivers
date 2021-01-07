async function getForecast(lat, lon) {
    var key = apikey;
    var url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + key;
    const response = await fetch(url, {});
    const data = await response.json();

    //create plot
    var airT = data.hourly.map(x => x.temp);
    var dt = data.hourly.map(x => x.dt);
    dt = dt.map(x => new Date(x * 1000).toISOString());
    plotForecastAirTemp(dt, airT)
};

function plotForecastAirTemp(dt, airT) {
    // combine site data into array
    var plotData = [];
    plotData = {
        x: dt,
        y: airT.map(x => x - 273.15), // mm to inches
        type: "scatter",
        mode: "lines+markers",
        name: "",
        // hovertemplate: '%{text}<br>' +
        // '%{x}<br>' +
        // '%{y}',
        // text: t,//[d.STATION[i].NAME],
        marker: {
            size: 3
        },
        line: {
            width: 1
        }
    }

    var layout = {
        hovermode: 'closest',
        xaxis: {
            title: 'Datetime',
            linecolor: '#121F1F',
            mirror: false
        },
        yaxis: {
            title: 'Air Temperatrue [C]',
            linecolor: '#121F1F'
        },
        margin: {
            l: 60,
            r: 0,
            b: 60,
            t: 0,
            pad: 10,
        },
        showlegend: false,
        dragmode: 'pan',
    };
    console.log(plotData)
    Plotly.newPlot('airT_forecast', [plotData], layout, { scrollZoom: false });
}

var lat = 41.72839;
var lon = -111.8349;

window.onload = function () {
    getForecast(lat, lon);
}
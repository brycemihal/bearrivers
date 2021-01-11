async function getForecast() {
    var url = 'https://api.weather.gov/gridpoints/SLC/113,226';
    const response = await fetch(url, {
    });

    const data = await response.json();
    console.log(data)

    plotForecast(data)

}

function plotForecast(d) {

    var temp_dv = d.properties.temperature.values.map(x => x.value * 5 / 9 + 32); // C to F
    var temp_dt = d.properties.temperature.values.map(x => x.validTime);
    temp_dt = temp_dt.map(x => x.split("/")).map(x => x[0]).map(x => new Date(x))

    var dewpoint_dv = d.properties.dewpoint.values.map(x => x.value * 5 / 9 + 32); // C to F
    var dewpoint_dt = d.properties.dewpoint.values.map(x => x.validTime);
    dewpoint_dt = dewpoint_dt.map(x => x.split("/")).map(x => x[0]).map(x => new Date(x))

    var windChill_dv = d.properties.windChill.values.map(x => x.value * 5 / 9 + 32); // C to F
    var windChill_dt = d.properties.windChill.values.map(x => x.validTime);
    windChill_dt = windChill_dt.map(x => x.split("/")).map(x => x[0]).map(x => new Date(x))

    var rh_dv = d.properties.relativeHumidity.values.map(x => x.value);
    var rh_dt = d.properties.relativeHumidity.values.map(x => x.validTime);
    rh_dt = rh_dt.map(x => x.split("/")).map(x => x[0]).map(x => new Date(x))

    var wind_dv = d.properties.windSpeed.values.map(x => x.value * 0.621371); // km/h to mph
    var wind_dt = d.properties.windSpeed.values.map(x => x.validTime);
    wind_dt = wind_dt.map(x => x.split("/")).map(x => x[0]).map(x => new Date(x))

    var windDirection_dv = d.properties.windDirection.values.map(x => x.value);
    var windDirection_dt = d.properties.windDirection.values.map(x => x.validTime);
    windDirection_dt = windDirection_dt.map(x => x.split("/")).map(x => x[0]).map(x => new Date(x))

    var snow_dv = d.properties.snowfallAmount.values.map(x => x.value * 0.0393701); // mm to in
    var snow_dt = d.properties.snowfallAmount.values.map(x => x.validTime);
    snow_dt = snow_dt.map(x => x.split("/")).map(x => x[0]).map(x => new Date(x))

    // var ice_dv = d.properties.iceAccumulation.values.map(x => x.value);
    // var ice_dt = d.properties.iceAccumulation.values.map(x => x.validTime);
    // ice_dt = ice_dt.map(x => x.split("/")).map(x => x[0]).map(x => new Date(x))

    // var rain_dv = d.properties.snowfallAmount.values.map(x => x.value);
    // var rain_dt = d.properties.snowfallAmount.values.map(x => x.validTime);
    // rain_dt = rain_dt.map(x => x.split("/")).map(x => x[0]).map(x => new Date(x))

    var snowLevel_dv = d.properties.snowLevel.values.map(x => x.value * 3.28084); // m to ft
    var snowLevel_dt = d.properties.snowLevel.values.map(x => x.validTime);
    snowLevel_dt = snowLevel_dt.map(x => x.split("/")).map(x => x[0]).map(x => new Date(x))

    var data = [{
        name: 'Air Temperature',
        xaxis: "x",
        yaxis: "y1",
        color: '#2b83ba',
        x: temp_dt,
        y: temp_dv,
        type: "scatter",
        mode: "lines+markers",
        marker: {
            size: 3
        },
        line: {
            width: 1
        }
    }, {
        name: 'Dew Point',
        xaxis: "x",
        yaxis: "y1",
        x: dewpoint_dt,
        y: dewpoint_dv,
        type: "scatter",
        mode: "lines+markers",
        marker: {
            size: 3
        },
        line: {
            width: 1
        }
    }, {
        name: 'Wind Chill',
        xaxis: "x",
        yaxis: "y1",
        x: windChill_dt,
        y: windChill_dv,
        type: "scatter",
        mode: "lines+markers",
        marker: {
            size: 3
        },
        line: {
            width: 1
        }
    }, {
        name: 'Relative Humidity',
        showlegend: true,
        legendgroup: 'g2',
        xaxis: "x",
        yaxis: "y2",
        x: rh_dt,
        y: rh_dv,
        type: "scatter",
        mode: "lines+markers",
        marker: {
            size: 3
        },
        line: {
            width: 1
        }
    }, {
        name: 'Wind Speed',
        showlegend: true,
        legendgroup: 'g3',
        xaxis: "x",
        yaxis: "y3",
        x: wind_dt,
        y: wind_dv,
        type: "scatter",
        mode: "lines+markers",
        marker: {
            size: 3
        },
        line: {
            width: 1
        }
    }, {
        name: 'Wind Direction',
        showlegend: true,
        legendgroup: 'g3',
        xaxis: "x",
        yaxis: "y4",
        x: windDirection_dt,
        y: windDirection_dv,
        type: "scatter",
        mode: "lines+markers",
        marker: {
            size: 3
        },
        line: {
            width: 1
        }
    }, {
        name: 'Snow Accumulation',
        showlegend: true,
        legendgroup: 'g4',
        xaxis: "x",
        yaxis: "y5",
        x: snow_dt,
        y: snow_dv,
        type: "scatter",
        mode: "lines+markers",
        marker: {
            size: 3
        },
        line: {
            width: 1
        }
    }, {
        name: 'Snow Level',
        showlegend: true,
        legendgroup: 'g4',
        xaxis: "x",
        yaxis: "y6",
        x: snowLevel_dt,
        y: snowLevel_dv,
        type: "scatter",
        mode: "lines+markers",
        marker: {
            size: 3
        },
        line: {
            width: 1
        }
    }];

    var layout = {
        hovermode: 'closest',
        // height: 600,
        xaxis: {
            title: 'Datetime',
            linecolor: '#121F1F',
            mirror: false
        },
        yaxis: {
            title: 'Temperature<br>(F)',
            fontSize: 10,
            linecolor: '#121F1F'
            // legend:
        },
        yaxis2: {
            title: 'Relative Humidity<br>(%)',
            fontSize: 10,
            linecolor: '121F1F'
        },
        yaxis3: {
            title: 'Wind Speed<br>(mph)',
            fontSize: 10,
            linecolor: '121F1F'
        },
        yaxis4: {
            title: 'Wind Direction<br>(degrees)',
            fontSize: 10,
            overlaying: 'y3',
            side: 'right',
            linecolor: '121F1F'
        },
        yaxis5: {
            title: 'Accumulation<br>(in)',
            fontSize: 10,
            linecolor: '121F1F',
        },
        yaxis6: {
            title: 'Snow Level<br>(ft)',
            overlaying: 'y5',
            side: 'right',
        },
        grid: {
            rows: 4,
            columns: 1,
            subplots: [['xy'], ['xy2'], ['xy3'], ['xy5']],
            roworder: 'top to bottom'
        },
        margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0,
            pad: 10,
        },
        showlegend: false,        
        dragmode: 'pan',
    };

    Plotly.newPlot('forecast_plot', data, layout)

}

getForecast()
    .catch(function () {
        console.error(error); // catch any errors            
    });
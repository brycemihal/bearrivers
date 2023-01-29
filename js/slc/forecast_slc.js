async function getForecast() {
    var url = 'https://api.weather.gov/gridpoints/SLC/107,165';
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // url = (proxyurl + url);
    const response = await fetch(url, {
        "method": "Get",
        "User-Agent": "https://brycemihal.github.io/bearrivers/ (bryce.mihalevich@gmail.com)"
    });

    const data = await response.json();
    // console.log(data)
    plotForecast(data)

}

function plotForecast(d) {

    var temp_dv = d.properties.temperature.values.map(x => x.value * 9 / 5 + 32).map(x => Math.round(x*100)/100); // C to F
    var temp_dt = d.properties.temperature.values.map(x => x.validTime);
    temp_dt = temp_dt.map(x => x.split("/")).map(x => x[0]).map(x => new Date(x))

    var dewpoint_dv = d.properties.dewpoint.values.map(x => x.value * 9 / 5 + 32).map(x => Math.round(x*100)/100); // C to F
    var dewpoint_dt = d.properties.dewpoint.values.map(x => x.validTime);
    dewpoint_dt = dewpoint_dt.map(x => x.split("/")).map(x => x[0]).map(x => new Date(x))

    var windChill_dv = d.properties.windChill.values.map(x => x.value * 9 / 5 + 32).map(x => Math.round(x*100)/100); // C to F
    var windChill_dt = d.properties.windChill.values.map(x => x.validTime);
    windChill_dt = windChill_dt.map(x => x.split("/")).map(x => x[0]).map(x => new Date(x))

    var rh_dv = d.properties.relativeHumidity.values.map(x => x.value).map(x => Math.round(x*100)/100);
    var rh_dt = d.properties.relativeHumidity.values.map(x => x.validTime);
    rh_dt = rh_dt.map(x => x.split("/")).map(x => x[0]).map(x => new Date(x))

    var wind_dv = d.properties.windSpeed.values.map(x => x.value * 0.621371).map(x => Math.round(x*100)/100); // km/h to mph
    var wind_dt = d.properties.windSpeed.values.map(x => x.validTime);
    wind_dt = wind_dt.map(x => x.split("/")).map(x => x[0]).map(x => new Date(x))

    var windDirection_dv = d.properties.windDirection.values.map(x => x.value).map(x => Math.round(x*100)/100);
    var windDirection_dt = d.properties.windDirection.values.map(x => x.validTime);
    windDirection_dt = windDirection_dt.map(x => x.split("/")).map(x => x[0]).map(x => new Date(x))

    var snow_dv = d.properties.snowfallAmount.values.map(x => x.value * 0.0393701).map(x => Math.round(x*100)/100); // mm to in
    var snow_dt = d.properties.snowfallAmount.values.map(x => x.validTime);
    snow_dt = snow_dt.map(x => x.split("/")).map(x => x[0]).map(x => new Date(x))
    const cumulativeSum = (sum => value => sum += value)(0);
    snow_dv = snow_dv.map(cumulativeSum);

    var skycover_dv = d.properties.skyCover.values.map(x => x.value);
    var skycover_dt = d.properties.skyCover.values.map(x => x.validTime);
    skycover_dt = skycover_dt.map(x => x.split("/")).map(x => x[0]).map(x => new Date(x))

    var rain_dv = d.properties.quantitativePrecipitation.values.map(x => x.value * 0.0393701).map(x => Math.round(x*100)/100); // mm to in
    var rain_dt = d.properties.quantitativePrecipitation.values.map(x => x.validTime);
    rain_dt = rain_dt.map(x => x.split("/")).map(x => x[0]).map(x => new Date(x))

    var snowLevel_dv = d.properties.snowLevel.values.map(x => x.value * 3.28084).map(x => Math.round(x*100)/100); // m to ft
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
        name: 'Rain',
        showlegend: true,
        legendgroup: 'g4',
        xaxis: "x",
        yaxis: "y5",
        x: rain_dt,
        y: rain_dv,
        type: "scatter",
        mode: "lines+markers",
        marker: {
            size: 3,
            color: 'rgb(34,139,34)',
        },
        line: {
            width: 1,
            color: 'rgb(34,139,34)',
        }
    },{
        name: 'Snow',
        showlegend: true,
        legendgroup: 'g4',
        xaxis: "x",
        yaxis: "y5",
        x: snow_dt,
        y: snow_dv,
        type: "scatter",
        mode: "lines+markers",
        marker: {
            size: 3,
            color: 'rgb(148,0,211)',
        },
        line: {
            width: 1,
            color: 'rgb(148,0,211)',
        }
    }, {
        // name: 'Snow Level',
        name: 'Sky Cover',
        showlegend: true,
        legendgroup: 'g4',
        xaxis: "x",
        yaxis: "y6",
        // x: snowLevel_dt,
        // y: snowLevel_dv,
        x: skycover_dt,
        y: skycover_dv,
        type: "scatter",
        mode: "lines+markers",
        marker: {
            size: 3,
            color: 'rgb(169,169,169)',
        },
        line: {
            width: 1,
            color: 'rgb(169,169,169)',
        }
    }];

    var layout = {
        hovermode: 'closest',
        height: 600,
        xaxis: {
            title: 'Datetime',
            linecolor: '#121F1F',
            mirror: false
        },
        yaxis: {
            title: 'Temperature (F)', //'Temperature<br>(F)',
            fontsize: 6,
            linecolor: '#121F1F'
            // legend:
        },
        yaxis2: {
            title: 'Relative Humidity (%)', // 'Relative Humidity<br>(%)',
            fontsize: 6,
            linecolor: '121F1F'
        },
        yaxis3: {
            title: 'Wind Speed (mph)', //'Wind Speed<br>(mph)',
            fontsize: 6,
            linecolor: '121F1F'
        },
        yaxis4: {
            title: 'Wind Direction (degrees)', //'Wind Direction<br>(degrees)',
            fontsize: 6,
            overlaying: 'y3',
            side: 'right',
            linecolor: '121F1F',
            range: [0, 360],
            tickmode: 'linear',
            tick0: 0,
            dtick: 90,
        },
        yaxis5: {
            title: 'Precipitation (in)', //'Precipitation<br>(in)',
            fontsize: 6,
            linecolor: '121F1F',
        },
        yaxis6: {
            // title: 'Snow Level<br>(ft)',
            overlaying: 'y5',
            side: 'right',
            title: 'Sky Cover<br>(%)',
            range: [0, 100],
        },
        grid: {
            rows: 4,
            columns: 1,
            subplots: [['xy'], ['xy2'], ['xy3'], ['xy5']],
            roworder: 'top to bottom'
        },
        margin: {
            l: 50,
            r: 10,
            b: 50,
            t: 10,
            pad: 4,
        },
        showlegend: false,
        dragmode: 'pan',

        // annotations: [
        //     {
        //         x: temp_dt[temp_dt.length - 1],
        //         // y: Math.max(temp_dv),
        //         xref: 'x',
        //         yref: 'y1',
        //         text: 'Air Temperature',
        //         font: {
        //             color: '#2b83ba'
        //         },
        //         showarrow: false,
        //     },
        //     {
        //         x: temp_dt[temp_dt.length - 1],
        //         // y: Math.max(temp_dv),
        //         xref: 'x',
        //         yref: 'y1',
        //         text: 'Dew Point',
        //         font: {
        //             color: '#2b83ba'
        //         },
        //         showarrow: false,
        //     },
        //     {
        //         x: temp_dt[temp_dt.length - 1],
        //         // y: Math.max(temp_dv),
        //         xref: 'x',
        //         yref: 'y1',
        //         text: 'Wind Chill',
        //         font: {
        //             color: '#2b83ba'
        //         },
        //         showarrow: false,
        //     },
        //     {
        //         x: temp_dt[temp_dt.length - 1],
        //         // y: Math.max(rh_dv),
        //         xref: 'x',
        //         yref: 'y2',
        //         text: 'Relative Humidity',
        //         showarrow: false,
        //     }],

    };

    var config = { responsive: true }
    
    Plotly.newPlot('forecast_plot', data, layout, config)

}

getForecast()
    .catch(function () {
        console.error(error); // catch any errors            
    });
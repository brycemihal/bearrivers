// Function to create plot
function createPlot(containerId) {

    // get data 
    // try {  // not all obs have the same keys as mod
    //     var ObsDT = obs[key].map(x => x.Datetime);
    //     var ObsDV = obs[key].map(x => x.Temperature);
    // }
    // catch (ex) {
    // }


    var ObsDT = obs.RM0.map(x => x.Datetime)
    var ModDT = mod.GCD.map(x => x.Datetime)
    var ModDV = mod.GCD.map(x => x.Temperature)
    var ModDV2 = mod.RM226.map(x => x.Temperature)

    var minDV = Math.min.apply(Math, ModDV) * 0.9;
    var maxDV = Math.max.apply(Math, ModDV2) * 1.1;
    console.log(minDV)
    console.log(maxDV)

    // ###############################################################
    var data = [{
        // ############################################################### - GCD
        name: 'Forecast',
        x: [ObsDT[ObsDT.length - 1], ModDT[ModDT.length - 1]],
        y: [maxDV, maxDV],
        xaxis: "x",
        yaxis: "y",
        fill: 'tonexty',
        fillcolor: 'rgba(45,45,45,0.1)',
        type: 'scatter',
        mode: 'none',
        hoverinfo: 'name',
        showlegend: true,
    }, {
        name: 'Observed',
        xaxis: "x",
        yaxis: "y",
        x: obs.GCD.map(x => x.Datetime),
        y: obs.GCD.map(x => x.Temperature),
        type: "scatter",
        mode: "lines+markers",
        showlegend: true,
        marker: {
            size: 3,
            color: '#007fff',
        },
        line: {
            width: 1,
            color: '#007fff',
        }
    }, {
        name: 'Modeled',
        xaxis: "x",
        yaxis: "y",
        x: mod.GCD.map(x => x.Datetime),
        y: mod.GCD.map(x => x.Temperature),
        type: "scatter",
        mode: "lines+markers",
        showlegend: true,
        marker: {
            size: 3,
            color: '#ff8800',
        },
        line: {
            width: 1,
            color: '#ff8800',
            // dash: 'dot',
        }

    },
    // ############################################################### - Lees Ferry 
    {
        name: 'Forecast',
        x: [ObsDT[ObsDT.length - 1], ModDT[ModDT.length - 1]],
        y: [maxDV, maxDV],
        xaxis: "x",
        yaxis: "y2",
        fill: 'tonexty',
        fillcolor: 'rgba(45,45,45,0.1)',
        type: 'scatter',
        mode: 'none',
        hoverinfo: 'name',
        showlegend: false,
    }, {
        name: 'Observed',
        xaxis: "x",
        yaxis: "y2",
        x: obs.RM0.map(x => x.Datetime),
        y: obs.RM0.map(x => x.Temperature),
        type: "scatter",
        mode: "lines+markers",
        showlegend: false,
        marker: {
            size: 3,
            color: '#007fff',
        },
        line: {
            width: 1,
            color: '#007fff',
        }
    }, {
        name: 'Modeled',
        xaxis: "x",
        yaxis: "y2",
        x: mod.RM0.map(x => x.Datetime),
        y: mod.RM0.map(x => x.Temperature),
        type: "scatter",
        mode: "lines+markers",
        showlegend: false,
        marker: {
            size: 3,
            color: '#ff8800'
        },
        line: {
            width: 1,
            color: '#ff8800'
        }
    },
    // ############################################################### - Above RM61
    {
        name: 'Forecast',
        x: [ObsDT[ObsDT.length - 1], ModDT[ModDT.length - 1]],
        y: [maxDV, maxDV],
        xaxis: "x",
        yaxis: "y3",
        fill: 'tonexty',
        fillcolor: 'rgba(45,45,45,0.1)',
        type: 'scatter',
        mode: 'none',
        hoverinfo: 'name',
        showlegend: false,
    }, {
        name: 'Modeled',
        xaxis: "x",
        yaxis: "y3",
        x: mod.RM61.map(x => x.Datetime),
        y: mod.RM61.map(x => x.Temperature),
        type: "scatter",
        mode: "lines+markers",
        showlegend: false,
        marker: {
            size: 3,
            color: '#ff8800'
        },
        line: {
            width: 1,
            color: '#ff8800'
        }
    }, {
        name: 'Threshold',
        xaxis: "x",
        yaxis: "y3",
        x: [ObsDT[0], ModDT[ModDT.length - 1]],
        y: [15.5, 15.5],
        type: "line",
        hoverinfo: 'y',
        showlegend: false,
        line: {
            color: '#00DCDC',
            width: 1,
            dash: 'dashdot'
        }
    }, {
        // ############################################################### - Grand Canyon
        name: 'Forecast',
        x: [ObsDT[ObsDT.length - 1], ModDT[ModDT.length - 1]],
        y: [maxDV, maxDV],
        xaxis: "x",
        yaxis: "y4",
        fill: 'tonexty',
        fillcolor: 'rgba(45,45,45,0.1)',
        type: 'scatter',
        mode: 'none',
        hoverinfo: 'name',
        showlegend: false,
    }, {
        name: 'Modeled',
        xaxis: "x",
        yaxis: "y4",
        x: mod.RM88.map(x => x.Datetime),
        y: mod.RM88.map(x => x.Temperature),
        type: "scatter",
        mode: "lines+markers",
        showlegend: false,
        marker: {
            size: 3,
            color: '#ff8800'
        },
        line: {
            width: 1,
            color: '#ff8800'
        }
    }, {
        name: 'Threshold',
        xaxis: "x",
        yaxis: "y4",
        x: [ObsDT[0], ModDT[ModDT.length - 1]],
        y: [15.5, 15.5],
        type: "line",
        hoverinfo: 'y',
        showlegend: false,
        line: {
            color: '#00DCDC',
            width: 1,
            dash: 'dashdot'
        }
        // ############################################################### - Diamond Creek 
    }, {
        name: 'Forecast',
        x: [ObsDT[ObsDT.length - 1], ModDT[ModDT.length - 1]],
        y: [maxDV, maxDV],
        xaxis: "x",
        yaxis: "y6",
        fill: 'tonexty',
        fillcolor: 'rgba(45,45,45,0.1)',
        type: 'scatter',
        mode: 'none',
        hoverinfo: 'name',
        showlegend: false,
    }, {
        name: 'Modeled',
        legendgroup: 'g3',
        xaxis: "x",
        yaxis: "y6",
        x: mod.RM226.map(x => x.Datetime),
        y: mod.RM226.map(x => x.Temperature),
        type: "scatter",
        mode: "lines+markers",
        showlegend: false,
        marker: {
            size: 3,
            color: '#ff8800'
        },
        line: {
            width: 1,
            color: '#ff8800'
        }
    }, {
        name: 'Threshold',
        xaxis: "x",
        yaxis: "y6",
        x: [ObsDT[0], ModDT[ModDT.length - 1]],
        y: [15.5, 15.5],
        type: "line",
        hoverinfo: 'y',
        showlegend: false,
        line: {
            color: '#00DCDC',
            width: 1,
            dash: 'dashdot'
        }
    }];

    var layout = {
        hovermode: 'closest',
        height: 500,
        xaxis: {
            title: 'Datetime',
            linecolor: '#121F1F',
            mirror: false,
            tickmode: "linear",
            range: [ModDT[0], ModDT[ModDT.length - 1]],
            // tickformat: '%a %b %d\n %Y',
            // dtick: 1, // milliseconds
        },
        yaxis1: {
            title: 'RM-15.7<br>(GCD)<br>Temperature<br>[\u00B0C]',
            fontSize: 10,
            linecolor: '#121F1F',
            range: [minDV, maxDV],
            fixedrange: true,
        },
        yaxis2: {
            title: 'RM0<br>Temperature<br>[\u00B0C]',
            fontSize: 10,
            linecolor: '121F1F',
            range: [minDV, maxDV],
            fixedrange: true,
        },
        yaxis3: {
            title: 'RM61<br>Temperature<br>[\u00B0C]',
            fontSize: 10,
            linecolor: '121F1F',
            range: [minDV, maxDV],
            fixedrange: true,
        },
        yaxis4: {
            title: 'RM87<br>Temperature<br>[\u00B0C]',
            fontSize: 10,
            linecolor: '121F1F',
            range: [minDV, maxDV],
            fixedrange: true,
        },
        yaxis6: {
            title: 'RM226<br>Temperature<br>[\u00B0C]',
            fontSize: 10,
            linecolor: '121F1F',
            range: [minDV, maxDV],
            fixedrange: true,
        },
        grid: {
            rows: 5,
            columns: 1,
            subplots: [['xy'], ['xy2'], ['xy3'], ['xy4'], ['xy6']],
            roworder: 'top to bottom'
        },
        margin: {
            l: 100,
            r: 50,
            b: 0,
            t: 0,
            pad: 4,
        },
        showlegend: true,
        legend: { "orientation": "h" },
        dragmode: 'pan',

        // annotations: [
        //     {
        //         x: temp_dt[temp_dt.length - 1],
        //         // y: Math.max(temp_dv),
        //         xref: 'x',
        //         yref: 'y1',
        //         text: 'Air Temperature',
        //         font: {
        //             color: '#007fff'
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
        //             color: '#007fff'
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
        //             color: '#007fff'
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
    }

    var config = { responsive: true }

    Plotly.newPlot(containerId, data, layout, config);
}

// Get all plot containers
var plotContainers = document.querySelectorAll('[id^="temp"]');
// console.log(plotContainers)

// Loop through each plot container
plotContainers.forEach(function (container) {
    // Get key name from custom attribute
    // var keyName = container.getAttribute('data-key');
    // console.log(keyName)
    createPlot(container.id);
});

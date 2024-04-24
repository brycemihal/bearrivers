// Function to create plot
function createPlot(containerId) {

    // get data 
    // try {  // not all obs have the same keys as mod
    //     var ObsDT = obs[key].map(x => x.Datetime);
    //     var ObsDV = obs[key].map(x => x.Discharge);
    // }
    // catch (ex) {
    // }


    var ObsDT = obs.RM0.map(x => x.Datetime)
    var ObsDV = obs.GCD.map(x => x.Discharge)
    var ModDT = mod.GCD.map(x => x.Datetime)
    var ModDV = mod.GCD.map(x => x.Discharge)


    // var maxDV = Math.max.apply(Math, myArr.map(o => o.x));
    var maxDV = Math.max.apply(Math, ModDV) * 1.1;
    var minDV = Math.min.apply(Math, ModDV) * 0.9;
    console.log(minDV)
    console.log(maxDV)

    // ###############################################################
    var data = [{
        // ############################################################### - GCD
        name: 'Forecast',
        hoverinfo: 'name',
        x: [ObsDT[ObsDT.length - 1], ModDT[ModDT.length - 1]],
        y: [maxDV, maxDV],
        xaxis: "x",
        yaxis: "y",
        fill: 'tonexty',
        fillcolor: 'rgba(45,45,45,0.1)',
        type: 'scatter',
        mode: 'none',
    }, {
        name: 'Observed',
        xaxis: "x",
        yaxis: "y",
        x: obs.GCD.map(x => x.Datetime),
        y: obs.GCD.map(x => x.Discharge),
        type: "scatter",
        mode: "lines+markers",
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
        y: mod.GCD.map(x => x.Discharge),
        type: "scatter",
        mode: "lines+markers",
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
        hoverinfo: 'name',
        x: [ObsDT[ObsDT.length - 1], ModDT[ModDT.length - 1]],
        y: [maxDV, maxDV],
        xaxis: "x",
        yaxis: "y2",
        fill: 'tonexty',
        fillcolor: 'rgba(45,45,45,0.1)',
        type: 'scatter',
        mode: 'none',
        showlegend: false,
    }, {
        name: 'Observed',
        xaxis: "x",
        yaxis: "y2",
        x: obs.RM0.map(x => x.Datetime),
        y: obs.RM0.map(x => x.Discharge),
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
        y: mod.RM0.map(x => x.Discharge),
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
        // ############################################################### - Grand Canyon
        name: 'Forecast',
        hoverinfo: 'name',
        x: [ObsDT[ObsDT.length - 1], ModDT[ModDT.length - 1]],
        y: [maxDV, maxDV],
        xaxis: "x",
        yaxis: "y4",
        fill: 'tonexty',
        fillcolor: 'rgba(45,45,45,0.1)',
        type: 'scatter',
        mode: 'none',
        showlegend: false,
    }, {
        name: 'Observed',
        xaxis: "x",
        yaxis: "y4",
        x: obs.RM88.map(x => x.Datetime),
        y: obs.RM88.map(x => x.Discharge),
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
        yaxis: "y4",
        x: mod.RM88.map(x => x.Datetime),
        y: mod.RM88.map(x => x.Discharge),
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
        // ############################################################### - Diamond Creek 
    }, {
        name: 'Forecast',
        hoverinfo: 'name',
        x: [ObsDT[ObsDT.length - 1], ModDT[ModDT.length - 1]],
        y: [maxDV, maxDV],
        xaxis: "x",
        yaxis: "y6",
        fill: 'tonexty',
        fillcolor: 'rgba(45,45,45,0.1)',
        type: 'scatter',
        mode: 'none',
        showlegend: false,
    }, {
        name: 'Observed',
        xaxis: "x",
        yaxis: "y6",
        x: obs.RM226.map(x => x.Datetime),
        y: obs.RM226.map(x => x.Discharge),
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
        yaxis: "y6",
        x: mod.RM226.map(x => x.Datetime),
        y: mod.RM226.map(x => x.Discharge),
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
            title: 'RM-15.7<br>(GCD)<br>Discharge<br>[m<sup>3</sup>/s]',
            fontSize: 10,
            linecolor: '#121F1F',
            range: [minDV, maxDV],
            fixedrange: true,
        },
        yaxis2: {
            title: 'RM0<br>Discharge<br>[m<sup>3</sup>/s]',
            fontSize: 10,
            linecolor: '121F1F',
            range: [minDV, maxDV],
            fixedrange: true,
        },
        yaxis3: {
            title: 'RM61<br>Discharge<br>[m<sup>3</sup>/s]',
            fontSize: 10,
            linecolor: '121F1F',
            range: [minDV, maxDV],
            fixedrange: true,
        },
        yaxis4: {
            title: 'RM87<br>Discharge<br>[m<sup>3</sup>/s]',
            fontSize: 10,
            linecolor: '121F1F',
            range: [minDV, maxDV],
            fixedrange: true,
        },
        yaxis6: {
            title: 'RM226<br>Discharge<br>[m<sup>3</sup>/s]',
            fontSize: 10,
            linecolor: '121F1F',
            range: [minDV, maxDV],
            fixedrange: true,
        },
        grid: {
            rows: 4,
            columns: 1,
            subplots: [['xy'], ['xy2'], ['xy4'], ['xy6']],
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
        //         text: 'Air Discharge',
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
var plotContainers = document.querySelectorAll('[id^="flow"]');
// console.log(plotContainers)

// Loop through each plot container
plotContainers.forEach(function (container) {
    // Get key name from custom attribute
    // var keyName = container.getAttribute('data-key');
    // console.log(keyName)
    createPlot(container.id);
});

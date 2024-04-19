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

    // var maxDV = Math.max.apply(Math, myArr.map(o => o.x));
    var maxDV = Math.max.apply(Math, ObsDV) * 1.1;
    var minDV = Math.min.apply(Math, ObsDV) * 0.9;
    // console.log(Math.max(maxDV))

    // var obsDv = obs.RM0.map(x => x.Discharge)
    // var ModDv = mod.GCD.map(x => x.Discharge)
    // console.log(ObsDT[ObsDT.length - 1])
    // console.log(ModDT[ModDT.length - 1])

    // ###############################################################
    var data = [{
        // ############################################################### - GCD
        x: [ObsDT[ObsDT.length - 1], ModDT[ModDT.length - 1]],
        y: [maxDV,maxDV],
        xaxis: "x",
        yaxis: "y",
        fill: 'tonexty',
        fillcolor: 'rgba(26,150,65,0.15)',
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
            color: '#2b83ba',
        },
        line: {
            width: 1,
            color: '#2b83ba',
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
            color: '#ba622b',
        },
        line: {
            width: 1,
            color: '#ba622b',
            // dash: 'dot',
        }

    },
    // ############################################################### - Lees Ferry 
    {
        x: [ObsDT[ObsDT.length - 1], ModDT[ModDT.length - 1]],
        y: [maxDV,maxDV],
        xaxis: "x",
        yaxis: "y2",
        fill: 'tonexty',
        fillcolor: 'rgba(26,150,65,0.15)',
        type: 'scatter',
        mode: 'none',
    }, {
        name: 'Observed',
        xaxis: "x",
        yaxis: "y2",
        color: 'rgb(169,169,169)',
        x: obs.RM0.map(x => x.Datetime),
        y: obs.RM0.map(x => x.Discharge),
        type: "scatter",
        mode: "lines+markers",
        marker: {
            size: 3,
            color: '#2b83ba',
        },
        line: {
            width: 1,
            color: '#2b83ba',
        }
    }, {
        name: 'Modeled',
        xaxis: "x",
        yaxis: "y2",
        color: '#2b83ba',
        x: mod.RM0.map(x => x.Datetime),
        y: mod.RM0.map(x => x.Discharge),
        type: "scatter",
        mode: "lines+markers",
        marker: {
            size: 3,
            color: '#ba622b'
        },
        line: {
            width: 1,
            color: '#ba622b'
        }
        // },
        // ############################################################### - Above RM61
        // {
        //     x: [ObsDT[ObsDT.length - 1], ModDT[ModDT.length - 1]],
        //     y: [maxDV,maxDV],
        //     xaxis: "x",
        //     yaxis: "y3",
        //     fill: 'tonexty',
        //     fillcolor: 'rgba(26,150,65,0.15)',
        //     type: 'scatter',
        //     mode: 'none',
        // }, {
        //     name: 'Modeled',
        //     xaxis: "x",
        //     yaxis: "y3",
        //     color: '#2b83ba',
        //     x: mod.RM61.map(x => x.Datetime),
        //     y: mod.RM61.map(x => x.Discharge),
        //     type: "scatter",
        //     mode: "lines+markers",
        //     marker: {
        //         size: 3,
        //         color: '#ba622b'
        //     },
        //     line: {
        //         width: 1,
        //         color: '#ba622b'
        //     }
    }, {
        // ############################################################### - Grand Canyon
        x: [ObsDT[ObsDT.length - 1], ModDT[ModDT.length - 1]],
        y: [maxDV,maxDV],
        xaxis: "x",
        yaxis: "y4",
        fill: 'tonexty',
        fillcolor: 'rgba(26,150,65,0.15)',
        type: 'scatter',
        mode: 'none',
    }, {
        name: 'Observed',
        xaxis: "x",
        yaxis: "y4",
        color: 'rgb(169,169,169)',
        x: obs.RM88.map(x => x.Datetime),
        y: obs.RM88.map(x => x.Discharge),
        type: "scatter",
        mode: "lines+markers",
        marker: {
            size: 3,
            color: '#2b83ba',
        },
        line: {
            width: 1,
            color: '#2b83ba',
        }
    }, {
        name: 'Modeled',
        showlegend: true,
        legendgroup: 'g2',
        xaxis: "x",
        yaxis: "y4",
        linecolor: '#2b83ba',
        x: mod.RM88.map(x => x.Datetime),
        y: mod.RM88.map(x => x.Discharge),
        type: "scatter",
        mode: "lines+markers",
        marker: {
            size: 3,
            color: '#ba622b'
        },
        line: {
            width: 1,
            color: '#ba622b'
        }
        // ############################################################### - Diamond Creek 
    }, {
        x: [ObsDT[ObsDT.length - 1], ModDT[ModDT.length - 1]],
        y: [maxDV,maxDV],
        xaxis: "x",
        yaxis: "y6",
        fill: 'tonexty',
        fillcolor: 'rgba(26,150,65,0.15)',
        type: 'scatter',
        mode: 'none',
    }, {
        name: 'Observed',
        xaxis: "x",
        yaxis: "y6",
        color: 'rgb(169,169,169)',
        x: obs.RM226.map(x => x.Datetime),
        y: obs.RM226.map(x => x.Discharge),
        type: "scatter",
        mode: "lines+markers",
        marker: {
            size: 3,
            color: '#2b83ba',
        },
        line: {
            width: 1,
            color: '#2b83ba',
        }
    }, {
        name: 'Modeled',
        showlegend: true,
        legendgroup: 'g3',
        xaxis: "x",
        yaxis: "y6",
        linecolor: '#2b83ba',
        x: mod.RM226.map(x => x.Datetime),
        y: mod.RM226.map(x => x.Discharge),
        type: "scatter",
        mode: "lines+markers",
        marker: {
            size: 3,
            color: '#ba622b'
        },
        line: {
            width: 1,
            color: '#ba622b'
        }
    }];

    var layout = {
        hovermode: 'closest',
        height: 600,
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
            title: 'RM-15.7<br>(GCD)',
            fontSize: 10,
            linecolor: '#121F1F',
            range: [minDV,maxDV],
            fixedrange: true,
        },
        yaxis2: {
            title: 'RM0<br>(Lees Ferry)',
            fontSize: 10,
            linecolor: '121F1F',
            range: [minDV,maxDV],
            fixedrange: true,
        },
        yaxis3: {
            title: 'RM61<br>(above LCR)',
            fontSize: 10,
            linecolor: '121F1F',
            range: [minDV,maxDV],
            fixedrange: true,
        },
        yaxis4: {
            title: 'RM87<br>(above LCR)',
            fontSize: 10,
            linecolor: '121F1F',
            range: [minDV,maxDV],
            fixedrange: true,
        },
        yaxis6: {
            title: 'RM226<br>(above LCR)',
            fontSize: 10,
            linecolor: '121F1F',
            range: [minDV,maxDV],
            fixedrange: true,
        },
        grid: {
            rows: 5,
            columns: 1,
            subplots: [['xy'], ['xy2'], ['xy4'], ['xy6']],
            roworder: 'top to bottom'
        },
        margin: {
            l: 100,
            r: 100,
            b: 70,
            t: 50,
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
        //         text: 'Air Discharge',
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

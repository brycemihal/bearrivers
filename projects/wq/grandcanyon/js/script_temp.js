// Function to create plot
function createPlot(containerId) {

    // get data 
    // try {  // not all obs have the same keys as mod
    //     var ObsDT = obs[key].map(x => x.Datetime);
    //     var ObsDV = obs[key].map(x => x.Temperature);
    // }
    // catch (ex) {
    // }

    var ModDT = mod.GCD.map(x => x.Datetime)

    var d = new Date();
    // console.log(d)
    console.log(ModDT[ModDT.length - 1])

    var d = new Date(); // today!
    var x = 5; // go back 5 days!
    d.setDate(d.getDate() - x);
    // console.log(Date(ModDT[ModDT.length -1]))


    // var startDate = new Date(d);
    // startDate.setDate(startDate.getDate() - qDays)


    // var ModStart = new Date(ModDT[0]) - 7

    // console.log(ModStart)

    // var endDate = new Date(d);
    // var startDate = new Date(d);
    // endDate.setDate(endDate.getDate() + 1)
    // startDate.setDate(startDate.getDate() - qDays)

    // ###############################################################
    var data = [{
        // ############################################################### - GCD
        x: [d, ModDT[ModDT.length - 1]],
        y: [28, 28],
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
        color: 'rgb(169,169,169)',
        x: obs.GCD.map(x => x.Datetime),
        y: obs.GCD.map(x => x.Temperature),
        type: "scatter",
        mode: "lines+markers",
        marker: {
            size: 3
        },
        line: {
            width: 1
        }
    }, {
        name: 'Modeled',
        xaxis: "x",
        yaxis: "y",
        color: '#2b83ba',
        x: mod.GCD.map(x => x.Datetime),
        y: mod.GCD.map(x => x.Temperature),
        type: "scatter",
        mode: "lines+markers",
        marker: {
            size: 3
        },
        line: {
            width: 1
        }
        // }, {


        // ############################################################### - Lees Ferry 
    }, {
        x: [d, ModDT[ModDT.length - 1]],
        y: [28, 28],
        xaxis: "x",
        yaxis: "y2",
        fill: 'tonexty',
        fillcolor: 'rgba(26,150,65,0.15)',
        type: 'scatter',
        mode: 'none',
    }, {
        name: 'RM0 (Lees Ferry)',
        xaxis: "x",
        yaxis: "y2",
        x: mod.RM0.map(x => x.Datetime),
        y: mod.RM0.map(x => x.Temperature),
        type: "scatter",
        mode: "lines+markers",
        marker: {
            size: 3
        },
        line: {
            width: 1
        }
    }, {
        // ############################################################### - Above RM61
        name: 'RM61 (Above LCR)',
        xaxis: "x",
        yaxis: "y3",
        x: mod.RM61.map(x => x.Datetime),
        y: mod.RM61.map(x => x.Temperature),
        type: "scatter",
        mode: "lines+markers",
        marker: {
            size: 3
        },
        line: {
            width: 1
        }
    }, {
        // ############################################################### - Grand Canyon
        name: 'RM87 (Grand Canyon)',
        showlegend: true,
        legendgroup: 'g2',
        xaxis: "x",
        yaxis: "y4",
        x: mod.RM88.map(x => x.Datetime),
        y: mod.RM88.map(x => x.Temperature),
        type: "scatter",
        mode: "lines+markers",
        marker: {
            size: 3
        },
        line: {
            width: 1
        }
        // ############################################################### - Diamond Creek 
    }, {
        name: 'RM226',
        showlegend: true,
        legendgroup: 'g3',
        xaxis: "x",
        yaxis: "y6",
        x: mod.RM226.map(x => x.Datetime),
        y: mod.RM226.map(x => x.Temperature),
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
        height: 600,
        xaxis: {
            title: 'Datetime',
            linecolor: '#121F1F',
            mirror: false,
            range: [ModDT[0], ModDT[ModDT.length - 1]]
        },
        yaxis1: {
            title: 'RM-15.7<br>(GCD)',
            fontSize: 10,
            linecolor: '#121F1F',
            range: [8, 28],
            fixedrange: true,
        },
        yaxis2: {
            title: 'RM0<br>(Lees Ferry)',
            fontSize: 10,
            linecolor: '121F1F',
            range: [8, 28],
            fixedrange: true,
        },
        yaxis3: {
            title: 'RM61<br>(above LCR)',
            fontSize: 10,
            linecolor: '121F1F',
            range: [8, 28],
            fixedrange: true,
        },
        yaxis4: {
            title: 'RM87<br>(above LCR)',
            fontSize: 10,
            linecolor: '121F1F',
            range: [8, 28],
            fixedrange: true,
        },
        yaxis6: {
            title: 'RM226<br>(above LCR)',
            fontSize: 10,
            linecolor: '121F1F',
            range: [8, 28],
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
    }

    var config = { responsive: true }

    Plotly.newPlot(containerId, data, layout, config);
}


// function to convert to yyyy-mm-dd ////////////////////////////////////////
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        minute = '' + d.getMinutes(),
        hour = '' + d.getHours();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    if (minute.length < 2)
        minute = '0' + minute;
    if (hour.length < 2)
        hour = '0' + hour;

    return [year, month, day, hour, minute].join('');
}

// var qDays = 7; // number of days to plot
// var d = new Date();
// var startDate = new Date(d);
// startDate.setDate(startDate.getDate() - qDays)
// console.log(startDate)
// // convert to yyyy-mm-dd
// var startStr = [];
// startStr = formatDate(startDate)
// console.log(startStr)

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

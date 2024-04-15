var sID = document.getElementById('plotTemperatureRM226').getAttribute('data-siteID');


var ModDT = mod[sID].map(x => x.Datetime);
var ModDV = mod[sID].map(x => x.Temperature);

// console.log(ObsDT)
// console.log(ObsDV)

// var trace1 = {
//     x: ObsDT,
//     y: ObsDV,
//     type: 'scatter'
// };

var trace2 = {
    x: ModDT,
    y: ModDV,
    type: 'scatter'
};

var f = {
    x: [ModDT[0], ModDT[ModDT.length - 1]],
    y: [20, 20],
    fill: 'tonexty', 
    fillcolor:'rgba(26,150,65,0.15)',
    type: 'scatter',
    mode: 'none',
  };

var data2 = [f, trace2];

Plotly.newPlot('plotTemperatureRM226', data2);


// // function plotAirTemp(d, sensor_var, param) {

// // Loop for meso sites
// var plotData = [];
// // var hexColor = ['#003f5c', '#bc5090'];

// for (i in d.STATION) {
//     var t = [];
//     var n = (d.STATION[i].OBSERVATIONS.date_time).length;
//     var ydata = d.STATION[i].OBSERVATIONS[sensor_var[param]].map(function (x) { return (x * 9 / 5) + 32 });
//     // ydata = ydata.map(function (x) { return Math.round(x) });

//     // create array for site name
//     for (var j = 0; j < n; j++) {
//         t.push(d.STATION[i].NAME);
//     }

//     // combine site data into array
//     plotData[i] = {
//         x: d.STATION[i].OBSERVATIONS.date_time,
//         y: ydata, //d.STATION[i].OBSERVATIONS[sensor_var[param]],
//         type: "scatter",
//         mode: "lines+markers",
//         name: "",
//         hovertemplate: '%{text}<br>' +
//             '%{x}<br>' +
//             '%{y}',
//         text: t,//[d.STATION[i].NAME],
//         marker: {
//             // color: hexColor[i],
//             size: 3
//         },
//         line: {
//             // color: hexColor[i],
//             width: 1
//         }
//     }
// }
// var layout = {
//     hovermode: 'closest',
//     xaxis: {
//         // title: 'Datetime',
//         linecolor: '#121F1F',
//         mirror: false,
//         tickmode: "linear",
//         tickformat: '%a %b %d\n %Y',
//         // dtick: 1, // milliseconds
//     },
//     yaxis: {
//         title: 'Air Temp (F)',
//         linecolor: '#121F1F'
//     },
//     margin: {
//         l: 50,
//         r: 10,
//         b: 50,
//         t: 10,
//         pad: 4
//     },
//     showlegend: false,
//     dragmode: 'pan',
// };

// var config = { responsive: true }

// Plotly.newPlot('plotTemperature', plotData, layout, config);
// // }



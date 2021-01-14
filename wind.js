async function getSynopticData(meso_sites, startStr, endStr, k) {
    var junk = 'bb989856db719411';
    var meso_vars = ['wind_speed', 'wind_direction', 'wind_cardinal_direction'];
    const response = await fetch('https://api.synopticdata.com/v2/stations/timeseries?stid=' + meso_sites + '&vars=' + meso_vars + '&start=' + startStr + '&end=' + endStr + '&obtimezone=local&token=' + k + junk);
    const data = await response.json();

    // var sensor_var = Object.keys(data.STATION[0].OBSERVATIONS);
    console.log(data)

    plotWindRose(data);

}

function plotWindRose(d) {


    var data = [];
    var sp = ['polar', 'polar2'];
    var sl = [true, false];
    var xa = ['x', 'x2'];
    for (j in d.STATION) {

        var wd = d.STATION[j].OBSERVATIONS.wind_direction_set_1;
        wd = wd.map(x => x / 15);// round wind direction by 15
        wd = wd.map(x => Math.round(x));
        wd = wd.map(x => x * 15);

        // bracket by wind speed
        var ws = d.STATION[0].OBSERVATIONS.wind_speed_set_1.map(x => x * 2.23694); // mph

        var ind1 = ws.map(x => x <= 5);
        var ind2 = ws.map(x => x > 5 && x <= 10);
        var ind3 = ws.map(x => x > 10 && x <= 15);
        var ind4 = ws.map(x => x > 15 && x <= 20);
        var ind5 = ws.map(x => x > 20 && x <= 25);
        var ind6 = ws.map(x => x > 25 && x <= 30);
        var ind7 = ws.map(x => x > 30 && x <= 35);
        var ind8 = ws.map(x => x > 35);

        var newData = [{
            r: ws.filter((r, i) => ind8[i]),
            theta: wd.filter((r, i) => ind8[i]),
            name: "> 35 mph",
            marker: { color: "d53e4f" },
            type: "barpolar",
            subplot: sp[j],
            showlegend: sl[j],
            xaxis: xa[j],
        }, {
            r: ws.filter((r, i) => ind7[i]),
            theta: wd.filter((r, i) => ind7[i]),
            name: "30-35 mph",
            marker: { color: "f46d43" },
            type: "barpolar",
            subplot: sp[j],
            showlegend: sl[j],
            xaxis: xa[j],
        }, {
            r: ws.filter((r, i) => ind6[i]),
            theta: wd.filter((r, i) => ind6[i]),
            name: "25-30 mph",
            marker: { color: "fdae61" },
            type: "barpolar",
            subplot: sp[j],
            showlegend: sl[j],
            xaxis: xa[j],
        }, {
            r: ws.filter((r, i) => ind5[i]),
            theta: wd.filter((r, i) => ind5[i]),
            name: "20-25 mph",
            marker: { color: "fee08b" },
            type: "barpolar",
            subplot: sp[j],
            showlegend: sl[j],
            xaxis: xa[j],
        }, {
            r: ws.filter((r, i) => ind4[i]),
            theta: wd.filter((r, i) => ind4[i]),
            name: "15-20 mph",
            marker: { color: "#e6f598" },
            type: "barpolar",
            subplot: sp[j],
            showlegend: sl[j],
            xaxis: xa[j],
        }, {
            r: ws.filter((r, i) => ind3[i]),
            theta: wd.filter((r, i) => ind3[i]),
            name: "10-15 mph",
            marker: { color: "#abdda4" },
            type: "barpolar",
            subplot: sp[j],
            showlegend: sl[j],
            xaxis: xa[j],
        }, {
            r: ws.filter((r, i) => ind2[i]),
            theta: wd.filter((r, i) => ind2[i]),
            name: "5-10 mph",
            marker: { color: "#66c2a5" },
            type: "barpolar",
            subplot: sp[j],
            showlegend: sl[j],
            xaxis: xa[j],
        }, {
            r: ws.filter((r, i) => ind1[i]),
            theta: wd.filter((r, i) => ind1[i]),
            name: "<5 mph",
            marker: { color: "#3288bd" },
            type: "barpolar",
            subplot: sp[j],
            showlegend: sl[j],
            xaxis: xa[j],
        }]

        data = [...data, ...newData];
    }
    // console.log(data)

    var layout = {
        width: 600,
        title: "24 Hour Wind Speed",
        font: { size: 12 },
        legend: { font: { size: 12 } },

        polar: {
            domain: { x: [0, 0.42] },
            bgcolor: '#F5F5F5',
            barmode: "overlay",
            bargap: 0,
            radialaxis: { visible: false, ticksuffix: "", angle: 0, dtick: 5 },
            angularaxis: { direction: "clockwise" }
        },
        polar2: {            
            domain: { x: [.50, .92] },
            bgcolor: '#F5F5F5',
            barmode: "overlay",
            bargap: 0,
            radialaxis: { visible: false, ticksuffix: "", angle: 0, dtick: 5 },
            angularaxis: { direction: "clockwise" },
            showlegend: false,
        },
        annotations: [{
            text: "Logan Peak",
              font: {
              size: 13,
            //    color: 'green',
            },
            showarrow: false,
            align: 'center',
            x: 0.1, //position in x domain
            y: -.5, //position in y domain
            xref: 'paper',
            yref: 'paper',
          },
            {
              text: "TW Daniels Experimental Forest",
              font: {
              size: 13,
            },
            showarrow: false,
            align: 'center',
            x: 1, //position in x domain
            y: -.5,  // position in y domain
            xref: 'paper',
            yref: 'paper',
            }
          ]        
    }

    Plotly.newPlot('wind_rose', data, layout)

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

// get date range
var numDays = 1; // number of days to plot
var d = new Date();
var endDate = new Date(d);
var startDate = new Date(d);
endDate.setDate(endDate.getDate() + 1)
startDate.setDate(startDate.getDate() - numDays)

// convert to yyyy-mm-dd
var endStr = [];
var startStr = [];
endStr = formatDate(endDate)
startStr = formatDate(startDate)

// var key = 'demotoken';
var k = 'd365a819ce5d418f';
var meso_sites = ['LGP', 'TWDFC'];

getSynopticData(meso_sites, startStr, endStr, k)
    .catch(function () {
        console.error(error); // catch any errors            
    });

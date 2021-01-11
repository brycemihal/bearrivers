async function getSynopticData(meso_sites, startStr, endStr, k) {
    var junk = 'bb989856db719411';
    var meso_vars = ['wind_speed', 'wind_direction', 'wind_cardinal_direction'];
    const response = await fetch('https://api.synopticdata.com/v2/stations/timeseries?stid=' + meso_sites + '&vars=' + meso_vars + '&start=' + startStr + '&end=' + endStr + '&obtimezone=local&token=' + k+junk);
    const data = await response.json();

    // var sensor_var = Object.keys(data.STATION[0].OBSERVATIONS);
    console.log(data)

    plotWindRose(data);
}

function plotWindRose(d) {

    // round wind direction by 15
    var wd = d.STATION[0].OBSERVATIONS.wind_direction_set_1;
    wd = wd.map(x => x / 15);
    wd = wd.map(x => Math.round(x));
    wd = wd.map(x => x * 15);

    // bracket by wind speed
    var ws = d.STATION[0].OBSERVATIONS.wind_speed_set_1.map(x => x * 2.23694); // mph

    // < 5
    var ind1 = ws.map(x => x <= 5);
    console.log(ind1)
    // 5-10
    var ind2 = ws.map(x => x > 5 && x <= 10);
    // console.log(ind2)
    // 10-15
    var ind3 = ws.map(x => x > 10 && x <= 15);
    // console.log(ind3)
    // 15-20
    var ind4 = ws.map(x => x > 15 && x <= 20);
    // console.log(ind4)
    // > 20
    var ind5 = ws.map(x => x > 20);
    // console.log(ind5)

    var data = [{
        r: ws.filter((r, i) => ind5[i]),
        theta: wd.filter((r, i) => ind5[i]),
        name: "> 20 mph",
        marker: { color: "d7191c" },
        type: "barpolar"
    }, {
        r: ws.filter((r, i) => ind4[i]),
        theta: wd.filter((r, i) => ind4[i]),
        name: "15-20 mph",
        marker: { color: "#fdae61" },
        type: "barpolar"
    }, {
        r: ws.filter((r, i) => ind3[i]),
        theta: wd.filter((r, i) => ind3[i]),
        name: "10-15 mph",
        marker: { color: "#ffffbf" },
        type: "barpolar"
    }, {
        r: ws.filter((r, i) => ind2[i]),
        theta: wd.filter((r, i) => ind2[i]),
        name: "5-10 mph",
        marker: { color: "#abdda4" },
        type: "barpolar"
    }, {
        r: ws.filter((r, i) => ind1[i]),
        theta: wd.filter((r, i) => ind1[i]),
        name: "<5 mph",
        marker: { color: "#2b83ba" },
        type: "barpolar"
    }]

    var layout = {
        title: "Logan Peak Wind Speed (Past 48 Hours)",        
        font: { size: 12 },
        legend: { font: { size: 12 } },
        polar: {
            bgcolor: '#F5F5F5',
            barmode: "overlay",
            bargap: 0,
            radialaxis: { visible: false, ticksuffix: "", angle: 0, dtick: 5 },
            angularaxis: { direction: "clockwise" }
        }
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
var numDays = 2; // number of days to plot
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
var meso_sites = ['LGP'];

getSynopticData(meso_sites, startStr, endStr, k)
    .catch(function () {
        console.error(error); // catch any errors            
    });

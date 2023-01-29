async function getSynopticData(meso_sites, startStr, endStr, k) {
    var junk = 'bb989856db719411';
    var meso_vars = ['air_temp', 'snow_depth', 'snow_water_equiv'];
    const response = await fetch('https://api.synopticdata.com/v2/stations/timeseries?stid=' + meso_sites + '&vars=' + meso_vars + '&start=' + startStr + '&end=' + endStr + '&obtimezone=local&token=' + k + junk);
    const data = await response.json();

    var sensor_var = Object.keys(data.STATION[0].OBSERVATIONS);
    // console.log(data)
    //  Plot Air Temperutre Data
    plotAirTemp(data, sensor_var, 1);
}

function plotAirTemp(d, sensor_var, param) {

    // Loop for meso sites
    var plotData = [];
    // var hexColor = ['#003f5c', '#bc5090'];

    for (i in d.STATION) {
        var t = [];
        var n = (d.STATION[i].OBSERVATIONS.date_time).length;

        // create array for site name
        for (var j = 0; j < n; j++) {
            t.push(d.STATION[i].NAME);
        }

        // combine site data into array
        plotData[i] = {
            x: d.STATION[i].OBSERVATIONS.date_time,
            y: d.STATION[i].OBSERVATIONS[sensor_var[param]],
            type: "scatter",
            mode: "lines+markers",
            name: "",
            hovertemplate: '%{text}<br>' +
                '%{x}<br>' +
                '%{y}',
            text: t,//[d.STATION[i].NAME],
            marker: {
                // color: hexColor[i],
                size: 3
            },
            line: {
                // color: hexColor[i],
                width: 1
            }
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
            title: 'Air Temp (C)',
            linecolor: '#121F1F'
        },
        margin: {
            l: 50,
            r: 10,
            b: 50,
            t: 10,
            pad: 4
        },
        showlegend: false,
        dragmode: 'pan',
    };

    var config = { responsive: true }

    Plotly.newPlot('air_temp_set_1', plotData, layout, config);
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

function getStandardDeviation(array) {
    const n = array.length
    const mean = array.reduce((a, b) => a + b) / n
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
}

// get date range
var numDays = 5; // number of days to plot
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

var k = 'd365a819ce5d418f';
// var meso_sites = ['TGLU1', 'UDDU1', 'FBNI1', 'LGS', 'TPKU1', 'KDNU1'];
// var meso_sites = ['CLN', 'MLDU1', 'PSUU1', 'BRIU1', 'PCT', 'CDYBK', 'LOPU1', 'FARU1', 'BUNUT', 'BLPU1']
var meso_sites = ['PHBW4','M12WY','JHRV','JHB','SPMBT','GTHW4']
getSynopticData(meso_sites, startStr, endStr, k)
    .catch(function () {
        console.error(error); // catch any errors            
    });


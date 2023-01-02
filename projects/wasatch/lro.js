async function getSynopticData(meso_sites, startStr, endStr, key) {
    var meso_vars = 'net_radiation';
    const response = await fetch('https://api.synopticdata.com/v2/stations/timeseries?stid=' + meso_sites + '&vars=' + meso_vars + '&start=' + startStr + '&end=' + endStr + '&obtimezone=local&token=' + key);
    const data = await response.json();

    var sensor_var = Object.keys(data.STATION[0].OBSERVATIONS);
    // console.log(sensor_var)
    plotSynopticData(data);
}

function plotSynopticData(d) {

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
            y: d.STATION[i].OBSERVATIONS.net_radiation_set_1,
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
        // height: 800,
        // width: 400,
        // title: d.STATION[0].NAME,
        xaxis: {
            title: 'Datetime',
            linecolor: '#121F1F',
            mirror: false
        },
        yaxis: {
            title: 'New Radiation (W/m^2)',
            linecolor: '#121F1F'
        },
        margin: {
            l: 60,
            r: 0,
            b: 50,
            t: 0,
            pad: 10,
        },
        showlegend: false,
        dragmode: 'pan',
    };

    Plotly.newPlot('net_radiation_set_1', plotData, layout, { scrollZoom: false });
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

var key = 'd365a819ce5d418fbb989856db719411';
var meso_sites = ['LRGCC', 'TYGRC', 'FRRBC'];

getSynopticData(meso_sites, startStr, endStr, key)
    .catch(function () {
        console.error(error); // catch any errors            
    });
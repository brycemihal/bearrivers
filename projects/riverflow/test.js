async function getSynopticData(meso_sites, startStr, endStr) {
    var meso_vars = ['stream_flow'];
    var url = 'https://api.synopticdata.com/v2/stations/timeseries?stid=' + meso_sites + '&vars=' + meso_vars + '&start=' + startStr + '&end=' + endStr + '&obtimezone=local&token=' + 'demotoken';
    // console.log(url)
    const response = await fetch(url);
    const data = await response.json();

    var sensor_var = Object.keys(data.STATION[0].OBSERVATIONS);
    // console.log(data)
    //  Plot Flow Data
    plotFlow(data, sensor_var, 1);
}

function plotFlow(d, sensor_var, param) {

    // Loop for meso sites
    var plotData = [];
    // var hexColor = ['#003f5c', '#bc5090'];

    for (i in d.STATION) {
        var t = [];
        var n = (d.STATION[i].OBSERVATIONS.date_time).length;
        var ydata = d.STATION[i].OBSERVATIONS[sensor_var[param]];
        // ydata = ydata.map(function (x) { return Math.round(x) });
       
        // create array for site name
        for (var j = 0; j < n; j++) {
            t.push(d.STATION[i].NAME);
        }

        // combine site data into array
        plotData[i] = {
            x: d.STATION[i].OBSERVATIONS.date_time,
            y: ydata,
            type: "scatter",
            mode: "lines+markers",
            name: "",
            hovertemplate: '%{text}<br>' +
                '%{x}<br>' +
                '%{y}',
            text: t,
            marker: {                
                size: 3
            },
            line: {            
                width: 1
            }
        }
    }
    var layout = {
        hovermode: 'closest',
        xaxis: {
            linecolor: '#121F1F',
            mirror: false,
            rangeslider: {},
            // tickmode: "linear",
            // tickformat: '%a %b %d\n %Y',
        },
        yaxis: {
            title: 'Discharge (CFS)',
            linecolor: '#121F1F',            
        },
        margin: {
            l: 60,
            r: 10,
            b: 50,
            t: 10,
            pad: 4
        },
        showlegend: false,
        dragmode: 'pan',
    };

    var config = { responsive: true }

    Plotly.newPlot('graph', plotData, layout, config);
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

function myFunction() {
    var qSites = document.getElementById("qSites").value;
    var qDays = document.getElementById("qDays").value
    // document.getElementById("demo").innerHTML = qSites;

    // get date range
    var numDays = 7; // number of days to plot
    console.log(qDays)
    var d = new Date();
    var endDate = new Date(d);
    var startDate = new Date(d);
    endDate.setDate(endDate.getDate() + 1)
    startDate.setDate(startDate.getDate() - qDays)

    // convert to yyyy-mm-dd
    var endStr = [];
    var startStr = [];
    endStr = formatDate(endDate)
    startStr = formatDate(startDate)

    var k = '';

    getSynopticData(qSites, startStr, endStr)
        .catch(function () {
            console.error(error); // catch any errors            
        });
}

async function getSynopticData(meso_sites, startStr, endStr) {
    var meso_vars = ['stream_flow'];
    // var meso_vars = ['gage_height'];
    var url = 'https://api.synopticdata.com/v2/stations/timeseries?stid=' + meso_sites + '&vars=' + meso_vars + '&start=' + startStr + '&end=' + endStr + '&obtimezone=local&token=' + 'demotoken';
    const response = await fetch(url);
    const data = await response.json();

    var sensor_var = Object.keys(data.STATION[0].OBSERVATIONS);

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
            name: d.STATION[i].NAME, // "",
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
        showlegend: true,
        legend: {
            x: 0,
            // xanchor: 'left',
            y: 1
        },
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

    var stid = [];
    for (i in data) {
        stid.push(data[i].STID);
    }

    var searchName = [];
    for (i in data) {
        searchName.push(data[i].SEARCHNAME);
    }

    // console.log(data)

    // var usgsName = ["SALT CREEK AT NEPHI, UT - 10146000","SEVIER RIVER NEAR KINGSTON, UT - 10183500","UINTA RIVER AT RANDLETT, UT - 9301500","CHALK CREEK AT COALVILLE, UT - 10131000","STRAWBERRY RIVER AT PINNACLES NEAR FRUITLAND, UT - 9285900","RECAPTURE CREEK NEAR BLANDING, UT - 9378630","DUCHESNE RIVER NEAR TABIONA, UT - 9277500","SIXTH WATER CRK AB SYAR TUN NR SPRINGVILLE, UT - 10149000","VIRGIN RIVER NEAR ST. GEORGE, UT - 9413500","JORDAN RIVER @ 1700 SOUTH @ SALT LAKE CITY, UT - 10171000"]
    // var mesoID = ["USGSHY1","USGSHY2","USGSHY3","USGSHY4","USGSHY5","USGSHY6","USGSHY7","USGSHY8","USGSHY9","USGSHY10","USGSHY11","USGSHY12","USGSHY13","USGSHY14","USGSHY15","USGSHY16","USGSHY17","USGSHY18","USGSHY19","USGSHY20","USGSHY21","USGSHY22","USGSHY23","USGSHY24","USGSHY25","USGSHY26","USGSHY27","USGSHY28","USGSHY29","USGSHY30","USGSHY31","USGSHY32","USGSHY33","USGSHY34","USGSHY35","USGSHY36","USGSHY37","USGSHY38","USGSHY39","USGSHY40","USGSHY41","USGSHY42","USGSHY43","USGSHY44","USGSHY45","USGSHY46","USGSHY47","USGSHY48","USGSHY49","USGSHY50","USGSHY51","USGSHY52","USGSHY53","USGSHY54","USGSHY55","USGSHY56","USGSHY57","USGSHY59","USGSHY60","USGSHY61","USGSHY62","USGSHY63","USGSHY64","USGSHY65","USGSHY66","USGSHY67","USGSHY68","USGSHY69","USGSHY70","USGSHY71","USGSHY72","USGSHY73","USGSHY74","USGSHY75","USGSHY76","USGSHY77","USGSHY78","USGSHY79","USGSHY80","USGSHY81","USGSHY82","USGSHY83","USGSHY84","USGSHY85","USGSHY86","USGSHY87","USGSHY88","USGSHY89","USGSHY90","USGSHY91","USGSHY92","USGSHY93","USGSHY94","USGSHY95","USGSHY96","USGSHY97","USGSHY98","USGSHY99"];

    // var qSites = document.getElementById("qSites").value;
    var qDays = document.getElementById("qDays").value; // get the number of days from user input

    ul = document.getElementById("myList"); // get the site names entered by user
    li = ul.getElementsByTagName("li");
    // console.log(li)
    var args = [];
    for (i = 0; i < li.length; i++) {
        args[i] = li[i].innerText;
        // if (txtValue.toUpperCase().indexOf(filter) > -1) {
        //     li[i].style.display = "";
        // } else {
        //     li[i].style.display = "none";
        // }
    }

    // match search string to site names
    // get meso site id based on search string
    var index = [];
    var qSites = [];
    for (i = 0; i < args.length; i++) {
        index[i] = searchName.indexOf(args[i]);
        qSites[i] = stid[index[i]];
    }
    // console.log(index);
    // console.log(qSites);

    // get date range
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

    getSynopticData(qSites, startStr, endStr)
        .catch(function () {
            console.error(error); // catch any errors            
        });
}

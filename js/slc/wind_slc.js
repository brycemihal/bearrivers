async function getSynopticData(meso_sites, startStr, endStr, k) {
    var junk = 'bb989856db719411';
    var demotoken = 'demotoken';
    var meso_vars = ['wind_speed', 'wind_direction', 'wind_cardinal_direction'];
    const response = await fetch('https://api.synopticdata.com/v2/stations/timeseries?stid=' + meso_sites + '&vars=' + meso_vars + '&start=' + startStr + '&end=' + endStr + '&obtimezone=local&token=' + demotoken);
    const data = await response.json();

    // var sensor_var = Object.keys(data.STATION[0].OBSERVATIONS);

    plotWindRose(data);

}

function plotWindRose(d) {


    var data = [];
    var sp = ['polar','polar2','polar3','polar4'];
    var sl = [false,false,false,false];
    var xa = ['x', 'x2','x3','x4'];
    // var sp = ['polar','polar2','polar3','polar4','polar5','polar6'];
    // var sl = [false,false,false,false,false,false];
    // var xa = ['x', 'x2','x3','x4', 'x5','x6'];
    // var sname = ['Logan Peak','TW Daniels','Logan Summit','Franklin Basin','Tony Grove RS','Green Canyon'];

    for (j in d.STATION) {
        var sname = d.STATION[j].NAME

        var wd = d.STATION[j].OBSERVATIONS.wind_direction_set_1;
        wd = wd.map(x => x / 15);// round wind direction by 15
        wd = wd.map(x => Math.round(x));
        wd = wd.map(x => x * 15);

        // bracket by wind speed
        var ws = d.STATION[j].OBSERVATIONS.wind_speed_set_1.map(x => x * 2.23694); // mph

        var ind1 = ws.map(x => x <= 5);
        var ind2 = ws.map(x => x > 5 && x <= 10);
        var ind3 = ws.map(x => x > 10 && x <= 15);
        var ind4 = ws.map(x => x > 15 && x <= 20);
        var ind5 = ws.map(x => x > 20 && x <= 25);
        var ind6 = ws.map(x => x > 25 && x <= 30);
        var ind7 = ws.map(x => x > 30 && x <= 35);
        var ind8 = ws.map(x => x > 35);
        
        var t1 = [];
        var t2 = [];
        var t3 = [];
        var t4 = [];
        var t5 = [];
        var t6 = [];
        var t7 = [];
        var t8 = [];

        for (var i = 0; i < ind1.filter(Boolean).length; i++) {
            t1.push(sname[j]);
        }
        for (var i = 0; i < ind2.filter(Boolean).length; i++) {
            t2.push(sname);
        }
        for (var i = 0; i < ind3.filter(Boolean).length; i++) {
            t3.push(sname);
        }
        for (var i = 0; i < ind4.filter(Boolean).length; i++) {
            t4.push(sname);
        }
        for (var i = 0; i < ind5.filter(Boolean).length; i++) {
            t5.push(sname);
        }
        for (var i = 0; i < ind6.filter(Boolean).length; i++) {
            t6.push(sname);
        }
        for (var i = 0; i < ind7.filter(Boolean).length; i++) {
            t7.push(sname);
        }
        for (var i = 0; i < ind8.filter(Boolean).length; i++) {
            t8.push(sname);
        }   

        var newData = [{
            r: ws.filter((r, i) => ind8[i]),
            theta: wd.filter((r, i) => ind8[i]),
            name: "> 35 mph",
            marker: { color: "d53e4f" },
            type: "barpolar",
            subplot: sp[j],
            showlegend: sl[j],
            xaxis: xa[j],
            hovertemplate: '%{text}<br>' +
                '%{r}<br>' +
                '%{theta}',
            text: t8,
        }, {
            r: ws.filter((r, i) => ind7[i]),
            theta: wd.filter((r, i) => ind7[i]),
            name: "30-35 mph",
            marker: { color: "f46d43" },
            type: "barpolar",
            subplot: sp[j],
            showlegend: sl[j],
            xaxis: xa[j],
            hovertemplate: '%{text}<br>' +
            '%{r}<br>' +
            '%{theta}',
            text: t7,
        }, {
            r: ws.filter((r, i) => ind6[i]),
            theta: wd.filter((r, i) => ind6[i]),
            name: "25-30 mph",
            marker: { color: "fdae61" },
            type: "barpolar",
            subplot: sp[j],
            showlegend: sl[j],
            xaxis: xa[j],
            hovertemplate: '%{text}<br>' +
            '%{r}<br>' +
            '%{theta}',
            text: t6,
        }, {
            r: ws.filter((r, i) => ind5[i]),
            theta: wd.filter((r, i) => ind5[i]),
            name: "20-25 mph",
            marker: { color: "fee08b" },
            type: "barpolar",
            subplot: sp[j],
            showlegend: sl[j],
            xaxis: xa[j],
            hovertemplate: '%{text}<br>' +
            '%{r}<br>' +
            '%{theta}',
            text: t5,
        }, {
            r: ws.filter((r, i) => ind4[i]),
            theta: wd.filter((r, i) => ind4[i]),
            name: "15-20 mph",
            marker: { color: "#e6f598" },
            type: "barpolar",
            subplot: sp[j],
            showlegend: sl[j],
            xaxis: xa[j],
            hovertemplate: '%{text}<br>' +
            '%{r}<br>' +
            '%{theta}',
            text: t4,
        }, {
            r: ws.filter((r, i) => ind3[i]),
            theta: wd.filter((r, i) => ind3[i]),
            name: "10-15 mph",
            marker: { color: "#abdda4" },
            type: "barpolar",
            subplot: sp[j],
            showlegend: sl[j],
            xaxis: xa[j],
            hovertemplate: '%{text}<br>' +
            '%{r}<br>' +
            '%{theta}',
            text: t3,
        }, {
            r: ws.filter((r, i) => ind2[i]),
            theta: wd.filter((r, i) => ind2[i]),
            name: "5-10 mph",
            marker: { color: "#66c2a5" },
            type: "barpolar",
            subplot: sp[j],
            showlegend: sl[j],
            xaxis: xa[j],
            hovertemplate: '%{text}<br>' +
            '%{r}<br>' +
            '%{theta}',
            text: t2,
        }, {
            r: ws.filter((r, i) => ind1[i]),
            theta: wd.filter((r, i) => ind1[i]),
            name: "<5 mph",
            marker: { color: "#3288bd" },
            type: "barpolar",
            subplot: sp[j],
            showlegend: sl[j],
            xaxis: xa[j],
            hovertemplate: '%{text}<br>' +
            '%{r}<br>' +
            '%{theta}',
            text: t1,
        }]

        data = [...data, ...newData];
    }
    // console.log(data)

    var layout = {
        // width: 700,
        // height: 500,
        // title: "24 Hour Wind Speed",
        font: { size: 12 },
        legend: { font: { size: 12 } },
        margin: {
            l: 40,
            r: 40,
            b: 20,
            t: 20,
            pad: 4,
        },
        polar: {
            domain: {
                x: [0, 0.4],
                y: [0.6, 1]
            },
            bgcolor: '#F5F5F5',
            barmode: "overlay",
            bargap: 0,
            radialaxis: { visible: false, ticksuffix: "", angle: 0, dtick: 5 },
            angularaxis: { direction: "clockwise" }
        },
        polar2: {
            domain: {
                x: [0.6, 1],
                y: [0.6, 1]
            },
            bgcolor: '#F5F5F5',
            barmode: "overlay",
            bargap: 0,
            radialaxis: { visible: false, ticksuffix: "", angle: 0, dtick: 5 },
            angularaxis: { direction: "clockwise" },
            showlegend: false,
        },
        polar3: {
            domain: {
                x: [0, 0.4],
                y: [0, 0.4]
            },
            bgcolor: '#F5F5F5',
            barmode: "overlay",
            bargap: 0,
            radialaxis: { visible: false, ticksuffix: "", angle: 0, dtick: 5 },
            angularaxis: { direction: "clockwise" },
            showlegend: false,
        },
        polar4: {
            domain: {
                x: [0.6, 1],
                y: [0, 0.4]
            },
            bgcolor: '#F5F5F5',
            barmode: "overlay",
            bargap: 0,
            radialaxis: { visible: false, ticksuffix: "", angle: 0, dtick: 5 },
            angularaxis: { direction: "clockwise" },
            showlegend: false,
        },
        // polar5: {
        //     domain: {
        //         x: [0.38, .62],
        //         y: [.6, 1]
        //     },
        //     bgcolor: '#F5F5F5',
        //     barmode: "overlay",
        //     bargap: 0,
        //     radialaxis: { visible: false, ticksuffix: "", angle: 0, dtick: 5 },
        //     angularaxis: { direction: "clockwise" },
        //     showlegend: false,
        // },
        // polar6: {
        //     domain: {
        //         x: [.76, 1],
        //         y: [0.6, 1]
        //     },
        //     bgcolor: '#F5F5F5',
        //     barmode: "overlay",
        //     bargap: 0,
        //     radialaxis: { visible: false, ticksuffix: "", angle: 0, dtick: 5 },
        //     angularaxis: { direction: "clockwise" },
        //     showlegend: false,
        // },
    };
    
    var config = { responsive: true }

    Plotly.newPlot('wind_rose', data, layout,config)

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

var k = 'd365a819ce5d418f';
var meso_sites = ['AMB','REY','C99','SOLHP']
getSynopticData(meso_sites, startStr, endStr, k)
    .catch(function () {
        console.error(error); // catch any errors            
    });

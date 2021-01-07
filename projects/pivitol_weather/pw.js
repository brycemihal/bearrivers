// Get all images and return as blob
async function getNetRad(meso_sites, startStr, endStr, key) {
    var meso_vars = 'net_radiation';
    const response = await fetch('https://api.synopticdata.com/v2/stations/timeseries?stid=' + meso_sites + '&vars=' + meso_vars + '&start=' + startStr + '&end=' + endStr + '&obtimezone=local&token=' + key);
    const data = await response.json();

    var sensor_var = Object.keys(data.STATION[0].OBSERVATIONS);

    plotNetRad(data);
}



function loopPW() {
    // update image after delay
    setTimeout(function () {
        // document.getElementById('cName').innerHTML = linkNames[i]
        var dtStr = dt[i].toString()
        if (dtStr.length == 1)
            dtStr = '00' + dtStr;
        else if (dtStr.length == 2)
            dtStr = '0' + dtStr;
        console.log(dtStr)

        var url = 'https://m2.pivotalweather.com/maps/models/gfs_flx/' + strDate + '/' + dtStr + '/snodpc_acc.conus.png';

        document.getElementById('cImage').src = url;
        i++;
        if (i > dt.length - 1) { // reset i
            i = 0;
        }
        loopPW();
    }, 500)
}

// make array of model times
function makeArr(startValue, stopValue, step) {
    var arr = [];
    var n = Math.ceil((stopValue - startValue) / step)
    for (let j = 0; j < n + 1; j++) {
        arr.push(startValue + (step * j));
    }
    return arr;
}

// function to convert to format date 
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

    return [year, month, day, hour].join('');
}

var dt = new Date();
dt.setDate(dt.getDate() + 1)
var dtStr = [];
dtStr = formatDate(dt) // convert to yyyy-mm-dd

var i = 0;

const strDate = 2020121506

const dt = makeArr(3, 240, 3);

loopPW();    
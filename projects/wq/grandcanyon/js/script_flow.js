// Function to create plot
function createPlot(containerId, key) {

    // get data 
    try {
        var ObsDT = obs[key].map(x => x.Datetime);
        var ObsDV = obs[key].map(x => x.Discharge);
    }
    catch (ex) {

    }

    var ModDT = mod[key].map(x => x.Datetime);
    var ModDV = mod[key].map(x => x.Discharge);

    var obsData = {
        x: ObsDT,
        y: ObsDV,
        type: 'scatter'
    };

    var modData = {
        x: ModDT,
        y: ModDV,
        type: 'scatter'
    };

    var f = {
        x: ['2024-04-14 10:00:00', '2024-04-21 00:00:00'],
        y: [20, 20],
        fill: 'tonexty',
        fillcolor: 'rgba(26,150,65,0.15)',
        type: 'scatter',
        mode: 'none',
    };

    var data = [obsData, modData];

    var layout = {
        hovermode: 'closest',
        xaxis: {
            // title: 'Datetime',
            linecolor: '#121F1F',
            mirror: false,
            tickmode: "linear",
            // tickformat: '%a %b %d\n %Y',
            // dtick: 1, // milliseconds
        },
        yaxis: {
            title: 'Discharge [cms]',
            linecolor: '#121F1F'
        },
        margin: {
            l: 50,
            r: 10,
            b: 100,
            t: 10,
            pad: 4
        },
        showlegend: false,
        dragmode: 'pan',
    };

    var config = { responsive: true }

    Plotly.newPlot(containerId, data, layout, config);
}

// Get all plot containers
var plotContainers = document.querySelectorAll('[id^="flow"]');
console.log(plotContainers)

// Loop through each plot container
plotContainers.forEach(function (container) {
    // Get key name from custom attribute
    var keyName = container.getAttribute('data-key');
    console.log(keyName)
    createPlot(container.id, keyName);
});

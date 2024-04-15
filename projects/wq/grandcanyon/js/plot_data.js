
console.log(obs)
var ObsDT = obs.RM0.map(x => x.Datetime);
var ObsDV = obs.RM0.map(x => x.Temperature);

var ModDT = mod.RM0.map(x => x.Datetime);
var ModDV = mod.RM0.map(x => x.Temperature);

var trace1 = {
    x: ObsDT,
    y: ObsDV,
    type: 'scatter'
};

var trace2 = {
    x: ModDT,
    y: ModDV,
    type: 'scatter'
};

var f = {
    x: ['2024-04-14 10:00:00', '2024-04-20 00:00:00'],
    y: [20, 20],
    fill: 'tonexty', 
    fillcolor:'rgba(26,150,65,0.15)',
    type: 'scatter',
    mode: 'none',
  };

var data2 = [f, trace1, trace2];

Plotly.newPlot('myDiv', data2);

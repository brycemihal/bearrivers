
var dt = rm88.map(x => x.Datetime);
var ObsQ = rm88.map(x => x.Observed_Q_RM88);
var ObsT = rm88.map(x => x.Observed_T_RM88);
var ModQ = rm88.map(x => x.Model_Q_RM88);
var ModT = rm88.map(x => x.Model_T_RM88);

var trace1 = {
    x: dt,
    y: ObsQ,
    type: 'scatter'
};

var trace2 = {
    x: dt,
    y: ModQ,
    type: 'scatter'
};


var data2 = [trace1, trace2];

Plotly.newPlot('myDiv', data2);

console.log(ObsQ)
console.log(dt)

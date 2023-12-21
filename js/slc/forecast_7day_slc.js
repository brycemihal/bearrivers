async function getForecast() {
    var url = 'https://api.weather.gov/gridpoints/SLC/107,165/forecast';
    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // url = (proxyurl + url);
    const response = await fetch(url, {
        "method": "Get",
        "User-Agent": "https://brycemihal.github.io/bearrivers/ (bryce.mihalevich@gmail.com)"
    });

    const data = await response.json();
    // console.log(data)
    // console.log(data.properties.periods)
    var d = data.properties.periods

    // console.log(d[0].name)
    document.getElementById('name_0').innerHTML = d[0].name;
    document.getElementById('icon_0').src = d[0].icon;
    document.getElementById('text_0').innerHTML = d[0].detailedForecast;
    
    document.getElementById('name_1').innerHTML = d[1].name;
    document.getElementById('icon_1').src = d[1].icon;
    document.getElementById('text_1').innerHTML = d[1].detailedForecast;
    
    document.getElementById('name_2').innerHTML = d[2].name;
    document.getElementById('icon_2').src = d[2].icon;
    document.getElementById('text_2').innerHTML = d[2].detailedForecast;
    
    document.getElementById('name_3').innerHTML = d[3].name;
    document.getElementById('icon_3').src = d[3].icon;
    document.getElementById('text_3').innerHTML = d[3].detailedForecast;
    
    document.getElementById('name_4').innerHTML = d[4].name;
    document.getElementById('icon_4').src = d[4].icon;
    document.getElementById('text_4').innerHTML = d[4].detailedForecast;

    document.getElementById('name_5').innerHTML = d[5].name;
    document.getElementById('icon_5').src = d[5].icon;
    document.getElementById('text_5').innerHTML = d[5].detailedForecast;
    
    document.getElementById('name_6').innerHTML = d[6].name;
    document.getElementById('icon_6').src = d[6].icon;
    document.getElementById('text_6').innerHTML = d[6].detailedForecast;
    
    document.getElementById('name_7').innerHTML = d[7].name;
    document.getElementById('icon_7').src = d[7].icon;
    document.getElementById('text_7').innerHTML = d[7].detailedForecast;
    
    document.getElementById('name_8').innerHTML = d[8].name;
    document.getElementById('icon_8').src = d[8].icon;
    document.getElementById('text_8').innerHTML = d[8].detailedForecast;
    
    document.getElementById('name_9').innerHTML = d[9].name;
    document.getElementById('icon_9').src = d[9].icon;
    document.getElementById('text_9').innerHTML = d[9].detailedForecast;
    
    document.getElementById('name_10').innerHTML = d[10].name;
    document.getElementById('icon_10').src = d[10].icon;
    document.getElementById('text_10').innerHTML = d[10].detailedForecast;
    
    document.getElementById('name_11').innerHTML = d[11].name;
    document.getElementById('icon_11').src = d[11].icon;
    document.getElementById('text_11').innerHTML = d[11].detailedForecast;
    
    document.getElementById('name_12').innerHTML = d[12].name;
    document.getElementById('icon_12').src = d[12].icon;
    document.getElementById('text_12').innerHTML = d[12].detailedForecast;
    
    document.getElementById('name_13').innerHTML = d[13].name;
    document.getElementById('icon_13').src = d[13].icon;
    document.getElementById('text_13').innerHTML = d[13].detailedForecast;
    
    // document.getElementById('name_14').innerHTML = d[14].name;
    // document.getElementById('icon_14').src = d[14].icon;
    // document.getElementById('text_14').innerHTML = d[14].detailedForecast;
}

getForecast()
    .catch(function () {
        console.error(error); // catch any errors            
    });
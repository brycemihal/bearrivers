async function getUACForecast() {
    var url = 'https://utahavalanchecenter.org/forecast/logan/json';
    // find and replace parameters in null_url with actual values
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    url = (proxyurl + url);
    // console.log(url)
    const response = await fetch(url, {
        method: 'GET',
    });
    const d = await response.json();
    var data = d.advisories[0].advisory;

    document.getElementById('avy_p1').innerHTML = data.avalanche_problem_1;
    document.getElementById('avy_p1_text').innerHTML = data.avalanche_problem_1_description;
    document.getElementById('avy_p2').innerHTML = data.avalanche_problem_2;
    document.getElementById('avy_p2_text').innerHTML = data.avalanche_problem_2_description;
    document.getElementById('date_issued').innerHTML = data.date_issued;
    document.getElementById('bottom_line').innerHTML = data.bottom_line;
    document.getElementById('cc').innerHTML = data.current_conditions;

    var uacURL = 'https://utahavalanchecenter.org';
    var odri_url = (proxyurl + uacURL + data.overall_danger_rose_image)
    getDangerRose(odri_url).catch(function () {
        console.error(error);
    });
}

async function getDangerRose(odri_url) {
    const resp = await fetch(odri_url, {
        method: 'GET',
    });
    
    const d2 = await resp.blob();
    
    var objectURL = URL.createObjectURL(d2)
    document.getElementById('danger_rose').src = objectURL;
}

getUACForecast()
    .catch(function () {
        console.error(error); // catch any errors            
    });


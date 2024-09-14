const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&models=gfs_seamless';
const state = document.getElementById('state').value;


async function getWeather() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.log('There was an error whilie fetching data!', error);
    }
}

function displayWeather(data) {
    console.log(data);

    
    //const weatherIcon = document.getElementById('weather-icon');

    const container = document.getElementById('imageContainer');
    container.innerHTML = ''; //Clears previous image
    //container.appendChild(weatherIcon);

}


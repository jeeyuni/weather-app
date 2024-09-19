//const apiUrl = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&models=gfs_seamless';
//const state = document.getElementById('state').value;

//Fetches weather based on a hard coded default city at first
async function fetchWeather() {
    //need to fix this so API key isnt exposed
    const apiKey = '6e499d4ca4b1ac7ff1e94b630397180d';
    let city = "malibu";

    //gets city name from text input
    const input = document.getElementById('city');
    const inputCity = input.value;

    //sets city to input city
    if (inputCity) {
        city = inputCity
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;


    // console.log(inputCity);
    const response = await fetch(url);
    const data = await response.json();

    const responseForecast = await fetch(forecastUrl);
    const forecastData = await responseForecast.json();

    displayCurrentWeather(data);
    displayTodayWeather(forecastData.list);
    displayTomorrowWeather(forecastData.list);
    displayTwoDaysLaterWeather(forecastData.list);

}

//placeholder function to display data on site for testing
function displayCurrentWeather(data) {
    const newImageElement = document.createElement('img');
    newImageElement.src = ` https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    const weather = document.getElementById("weather");
    const weatherTemp = document.getElementById("weather-temp");
    const weatherHumidity = document.getElementById("weather-humidity");
    const weatherDescription = document.getElementById("weather-description");

    //clearing pervious contents
    weather.innerHTML = '';
    weatherTemp.innerHTML = '';
    weatherHumidity.innerHTML = '';
    weatherDescription.innerHTML = '';

    weather.appendChild(newImageElement);
    weatherTemp.textContent = `${data.main.temp}\u00B0F`;
    weatherHumidity.textContent = `${data.main.humidity}% Humidity`;
    weatherDescription.textContent = `${data.weather[0].description}`;


}

function displayTodayWeather(data) {
    //5 days every 8 hours forecast, cutting the array from 0 to 8.
    const timeInterval = data.slice(0, 8);
    let addTemp = 0;
    console.log(timeInterval);

    //calculating average temperature from timeInterval
    for (let i = 0; i < timeInterval.length; i++) {
        let temp = timeInterval[i].main.temp;
        addTemp = temp + addTemp;
    }
    //rounding up the number to 2 decimal point
    let averageTemp = Math.round((addTemp / 8) * 100) / 100 ;
    
    //setting up variables
    const newImageElement = document.createElement('img');
    newImageElement.src = ` https://openweathermap.org/img/wn/${timeInterval[3].weather[0].icon}.png`;

    const weather = document.getElementById("today-weather");
    const weatherTemp = document.getElementById("today-weather-temp");
    const weatherDescription = document.getElementById("today-weather-description");

    //clearing pervious contents
    weather.innerHTML = '';
    weatherTemp.innerHTML = '';
    weatherDescription.innerHTML = '';

    weather.appendChild(newImageElement);
    weatherTemp.textContent = `${averageTemp}\u00B0F`;
    weatherDescription.textContent = `${data[3].weather[0].description}`;

}

function displayTomorrowWeather(data) {
    //5 days every 8 hours forecast, cutting the array from 8 to 16.
    const timeInterval = data.slice(8, 16);
    let addTemp = 0;
    console.log(timeInterval);

    //calculating average temperature from timeInterval
    for (let i = 0; i < timeInterval.length; i++) {
        let temp = timeInterval[i].main.temp;
        addTemp = temp + addTemp;
    }
    //rounding up the number to 2 decimal point
    let averageTemp = Math.round((addTemp / 8) * 100) / 100 ;
    
    //setting up variables
    const newImageElement = document.createElement('img');
    newImageElement.src = ` https://openweathermap.org/img/wn/${timeInterval[3].weather[0].icon}.png`;

    const weather = document.getElementById("tomorrow-weather");
    const weatherTemp = document.getElementById("tomorrow-weather-temp");
    const weatherDescription = document.getElementById("tomorrow-weather-description");

    //clearing pervious contents
    weather.innerHTML = '';
    weatherTemp.innerHTML = '';
    weatherDescription.innerHTML = '';

    weather.appendChild(newImageElement);
    weatherTemp.textContent = `${averageTemp}\u00B0F`;
     weatherDescription.textContent = `${data[3].weather[0].description}`;
}

function displayTwoDaysLaterWeather(data) {
    //5 days every 8 hours forecast, cutting the array from 16 to 24.
    const timeInterval = data.slice(16, 24);
    let addTemp = 0;
    console.log(timeInterval);

    //calculating average temperature from timeInterval
    for (let i = 0; i < timeInterval.length; i++) {
        let temp = timeInterval[i].main.temp;
        addTemp = temp + addTemp;
    }
    //rounding up the number to 2 decimal point
    let averageTemp = Math.round((addTemp / 8) * 100) / 100 ;
    
    //setting up variables
    const newImageElement = document.createElement('img');
    newImageElement.src = ` https://openweathermap.org/img/wn/${timeInterval[3].weather[0].icon}.png`;

    const weather = document.getElementById("twodayslater-weather");
    const weatherTemp = document.getElementById("twodayslater-weather-temp");
    const weatherDescription = document.getElementById("twodayslater-weather-description");

    //clearing pervious contents
    weather.innerHTML = '';
    weatherTemp.innerHTML = '';
    weatherDescription.innerHTML = '';

    weather.appendChild(newImageElement);
    weatherTemp.textContent = `${averageTemp}\u00B0F`;
     weatherDescription.textContent = `${data[3].weather[0].description}`;
}


fetchWeather();


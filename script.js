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

    // console.log(forecastData);
    // console.log(data);
    
    displayCurrentWeather(data);
    displayTodayWeather(data);
    // displayTomorrowWeather(forecastData.list);
    // displayTwoDaysLaterWeather(forecastData.list);
    // console.log(forecastData.list);

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
    const newImageElement = document.createElement('img');
    newImageElement.src = ` https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

    const weather = document.getElementById("today-weather");
    const weatherTemp = document.getElementById("today-weather-temp");
    const weatherDescription = document.getElementById("today-weather-description");

    //clearing pervious contents
    weather.innerHTML = '';
    weatherTemp.innerHTML = '';
    weatherDescription.innerHTML = '';

    weather.appendChild(newImageElement);
    weatherTemp.textContent = `${data.main.temp}\u00B0F`;
    weatherDescription.textContent = `${data.weather[0].description}`;


}

// function displayTomorrowData(data) {
//     const tomorrow = data.slice(1,9);



//     const newImageElement = document.createElement('img');
//     newImageElement.src = ` https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

//     const weather = document.getElementById("tomorrow-weather");
//     const weatherTemp = document.getElementById("tomorrow-weather-temp");
//     const weatherDescription = document.getElementById("tomorrow-weather-description");

//     //clearing pervious contents
//     weather.innerHTML = '';
//     weatherTemp.innerHTML = '';
//     weatherDescription.innerHTML = '';

//     weather.appendChild(newImageElement);
//     weatherTemp.textContent = `${data.main.temp}\u00B0F`;
//     weatherDescription.textContent = `${data.weather[0].description}`;


// }


fetchWeather();


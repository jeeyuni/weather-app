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


    console.log(inputCity);
    const response = await fetch(url);
    const data = await response.json();

    const responseForecast = await fetch(forecastUrl);
    const forecastData = await responseForecast.json();

    console.log(forecastData);
    console.log(data);
    
    displayCurrentWeather(data);
    displayTodayWeather(data);
    // displayTomorrowWeather(forecastData.list);
    // displayTwoDaysLaterWeather(forecastData.list);
    // console.log(forecastData.list);

}
//placeholder function to display data on site for testing
function displayCurrentWeather(data) {
    const newImageElement = document.createElement('img');
    newImageElement.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    document.getElementById("weather").appendChild(newImageElement);
    document.getElementById("weather-temp").textContent = `${data.main.temp}\u00B0F`;
    document.getElementById("weather-humidity").textContent = `${data.main.humidity}% Humidity`;
    document.getElementById("weather-description").textContent = `${data.weather[0].description}`;

    //newImageElement.innerHTML = '';
}

function displayTodayWeather(data) {
    const newImageElement = document.createElement('img');
    newImageElement.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    document.getElementById("today-weather").appendChild(newImageElement);
    document.getElementById("today-weather-temp").textContent = `${data.main.temp}\u00B0F`;
    document.getElementById("today-weather-humidity").textContent = `${data.main.humidity}% Humidity`;
    document.getElementById("today-weather-description").textContent = `${data.weather[0].description}`;

}

// function displayTomorrowWeather(data) {
//     const newImageElement = document.getElementById('tomorrow-weather');
//     const tomorrow = data.slice(9,16);
//     //newImageElement.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

//     tomorrow.forEach(item =>) {

//     }
//     document.getElementById("tomorrow-weather").appendChild(newImageElement);
//     document.getElementById("tomorrow-temp").textContent = `${data.main.temp}\u00B0F`;
//     document.getElementById("tomorrow-description").textContent = `${data.weather[0].description}`;

// }


fetchWeather();


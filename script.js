const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const tempElement = document.getElementById("temp");
const weatherConditionElement = document.getElementById("weatherCondition");
const humidityElement = document.getElementById("humidity");
const windSpeedElement = document.getElementById("windSpeed");
const previousCitiesList = document.getElementById("previousCities");

const weatherAPIKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your OpenWeather API Key

// Load previously searched cities from local storage
function loadPreviousCities() {
    const previousCities = JSON.parse(localStorage.getItem("previousCities")) || [];
    previousCitiesList.innerHTML = '';
    previousCities.forEach(city => {
        const listItem = document.createElement("li");
        listItem.textContent = city;
        previousCitiesList.appendChild(listItem);
    });
}

// Fetch weather data from OpenWeather API
async function fetchWeather(city) {
    const response = await fetch(`https://weather-backend-2b2c.onrender.com/weather?city=${city}`);
    
    
    console.log(response,"res")
    if (response.ok) {
        const data = await response.json();
        console.log(data)
        displayWeather(data);
        saveCityToStorage(city);
    } else {
        alert("City not found! Please try again.");
    }
}

// Display weather data
function displayWeather(data) {
    tempElement.textContent = data.temperature.temperatureAvg;

    weatherConditionElement.textContent = 'N/A';
    humidityElement.textContent = data.humidity;
    windSpeedElement.textContent = data.windSpeed;
}

// Save city to local storage and update the list
function saveCityToStorage(city) {
    const previousCities = JSON.parse(localStorage.getItem("previousCities")) || [];
    if (!previousCities.includes(city)) {
        previousCities.push(city);
        localStorage.setItem("previousCities", JSON.stringify(previousCities));
        loadPreviousCities(); // Update the list of cities
    }
}

// Handle the search button click
searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
        cityInput.value = ''; // Clear input field
    } else {
        alert("Please enter a city name.");
    }
});

// Load previous cities when the page loads
window.onload = loadPreviousCities;

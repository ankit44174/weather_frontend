# Weather Dashboard

This project is a simple full-stack weather dashboard that allows users to search for weather information by city name. It displays current weather details, including temperature, weather conditions, humidity, and wind speed, and stores previously searched cities in browser-side storage. The application interacts with a backend API that fetches weather data from a third-party weather API, such as OpenWeatherMap.

---

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)

---

## Features

### Frontend
- **City Search**: Allows users to search for weather information by city name.
- **Current Weather Display**: Shows current weather information, including:
  - Temperature
  - Weather conditions (sunny, cloudy, etc.)
  - Humidity
  - Wind speed
- **Previous Searches**: Displays a list of previously searched cities, stored in the browser's local storage.
- **Error Handling**: Displays an error message for invalid city names or failed requests.

### Backend
- **Weather Data Fetching**: Interacts with the OpenWeatherMap API (or other free weather APIs) to fetch current weather data.
- **Error Handling**: Returns meaningful error messages when a city is not found or when there's an issue with the API.

---

## Technologies Used

### Frontend:
- **HTML5** for structure.
- **CSS3** for styling (responsive design).
- **JavaScript** for interactivity.
- **LocalStorage** for storing previously searched cities.

### Backend:
- **Node.js** for server-side logic.
- **Express.js** for building the API.
- **Axios** for making requests to the weather API.

### Weather API:
- **OpenWeatherMap API** (free tier) for fetching weather data.

---

## Installation

To set up this project locally, follow these steps:

### Prerequisites
- Node.js and npm installed on your local machine.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard

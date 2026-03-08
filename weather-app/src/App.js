import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async () => {
    try {
      const apiKey = '33b7890f3da0bc8beca21cec2ff872e5';
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      alert('City not found');
      setWeatherData(null);
    }
  };

  return (
    <div className="app">
      <h1>🌤️ Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Search</button>

      {weatherData && <WeatherCard weather={weatherData} />}
    </div>
  );
}

export default App;

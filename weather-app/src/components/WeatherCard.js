// src/components/WeatherCard.js
import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weather }) => {
  const { name, main, weather: weatherInfo, wind, coord } = weather;
  const iconCode = weatherInfo[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img src={iconUrl} alt="Weather icon" />
      <p><strong>{weatherInfo[0].main}</strong> - {weatherInfo[0].description}</p>
      <p>🌡️ Temperature: {main.temp}°C</p>
      <p>💧 Humidity: {main.humidity}%</p>
      <p>🌬️ Wind Speed: {wind.speed} m/s</p>
      <p>📍 Latitude: {coord.lat}, Longitude: {coord.lon}</p>
    </div>
  );
};

export default WeatherCard;



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchWeatherByCityName from '../services/api';
import './Details.css';

function Details() {
  const { city } = useParams();
  const [weatherData, setWeatherData] = useState(null);

  const loadWeatherData = async (cityName) => {
    try {
      const data = await fetchWeatherByCityName(cityName);
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // Load weather data for the selected city when the component mounts
    loadWeatherData(city);
  }, [city]);

  return (
    <div className="details-container">
      <p className="second-title">
        {city}
        <br />
        live weather report
      </p>
      {weatherData ? (
        <div className="weather-card-content">
          <div className="second-card">
            <img src={weatherData.current.condition.icon} alt="Weather Condition" />
            <p>
              Condition:
              {weatherData.current.condition.text}
            </p>
          </div>
          <div className="second-card">
            <p>
              Temperature:
              {weatherData.current.temp_c}
              °C (
              {weatherData.current.temp_f}
              °F)
            </p>
          </div>
          <div className="second-card">
            <p>
              Humidity:
              {weatherData.current.humidity}
              %
            </p>
          </div>
          <div className="second-card">
            <p>
              Wind Speed:
              {' '}
              {weatherData.current.wind_kph}
              {' '}
              km/h
            </p>
          </div>
          <div className="second-card">
            <p>
              Wind Degree:
              {weatherData.current.wind_degree}
              °
            </p>
          </div>
          <div className="second-card">
            <p>
              Wind Direction:
              {weatherData.current.wind_dir}
            </p>
          </div>
          <div className="second-card">
            <p>
              Cloud Cover:
              {weatherData.current.cloud}
              %
            </p>
          </div>
          <div className="second-card">
            <p>
              Feels Like:
              {' '}
              {weatherData.current.feelslike_c}
              °C (
              {weatherData.current.feelslike_f}
              °F)
            </p>
          </div>
          <div className="second-card">
            <p>
              Visibility:
              {' '}
              {weatherData.current.vis_km}
              {' '}
              km (
              {weatherData.current.vis_miles}
              {' '}
              miles)
            </p>
          </div>
          <div className="second-card">
            <p>
              UV Index:
              {weatherData.current.uv}
            </p>
          </div>
          <div className="second-card">
            <p>
              Wind Gust:
              {' '}
              {weatherData.current.gust_kph}
              {' '}
              km/h (
              {weatherData.current.gust_mph}
              {' '}
              mph)
            </p>
          </div>
        </div>
      ) : (
        <div className="loading-spinner" />
      )}
    </div>

  );
}

export default Details;

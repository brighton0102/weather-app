import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import fetchWeatherByCityName from '../services/api';
import './Home.css';

function Home() {
  const [cities, setCities] = useState(['New York City', 'Tokyo', 'London', 'Paris', 'Beijing', 'Los Angeles', 'Moscow', 'Istanbul',
    'Dubai', 'Singapore', 'Sydney', 'Rio de Janeiro', 'Mumbai', 'Rome', 'Toronto', 'Buenos Aires', 'Cairo', 'Hong Kong', 'Amsterdam', 'Seoul', 'Barcelona', 'San Francisco', 'Chicago', 'Bangkok', 'Berlin', 'Kuala Lumpur', 'Dar es salaam', 'Vancouver', 'Mombasa', 'Athens', 'Cape Town', 'Prague']);
  const [filteredCities, setFilteredCities] = useState(cities);
  const [selectedCity, setSelectedCity] = useState('');
  const [weatherData, setWeatherData] = useState({}); // Initialize as an empty object

  useEffect(() => {
    // Load weather data for all cities in the array
    cities.forEach(async (city) => {
      try {
        const data = await fetchWeatherByCityName(city);
        setWeatherData((prevData) => ({ ...prevData, [city]: data }));
      } catch (error) {
        console.error(error);
      }
    });
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
      if (index % 4 === 0 || index % 4 === 3) {
        card.style.backgroundColor = 'rgba(231, 90, 135, 1)';
      }
    });
  }, [cities]);

  const handleCityChange = async (e) => {
    const { value } = e.target;
    setSelectedCity(value);

    // Check if the input matches any existing city from the API data
    const matchingCity = Object.keys(weatherData).find(
      (city) => city.toLowerCase() === value.toLowerCase(),
    );

    // If the input matches an existing city, set filteredCities to contain only that matching city
    if (matchingCity) {
      setFilteredCities([matchingCity]);
    } else {
      // Filter the cities based on the input value
      const filtered = cities.filter((city) => city.toLowerCase().includes(value.toLowerCase()));

      // Update filteredCities with the filtered list
      setFilteredCities(filtered);
    }
  };

  return (
    <div className="container">
    <p className="title">Get live weather data by City name</p>
    <input
      type="text"
      placeholder="Enter city name"
      value={selectedCity}
      onChange={handleCityChange}
    />
    <ul className="cards">
      {filteredCities.map((city) => (
        <li key={city} className="card">
          <Link to={`/details/${city}`}>
            {weatherData[city] ? (
              <>
                <FontAwesomeIcon icon={faArrowCircleRight} className="angle-arrow" />
                <p>
                  <strong>City:</strong>
                  {' '}
                  {city}
                </p>
                <p>
                  <strong>Country:</strong>
                  {' '}
                  {weatherData[city].location.country}
                </p>
                <p>
                  <strong>Lat/Lon:</strong>
                  {' '}
                  {weatherData[city].location.lat}
                  /
                  {weatherData[city].location.lon}
                </p>
                <p>
                  <strong>tz_id:</strong>
                  {' '}
                  {weatherData[city].location.tz_id}
                </p>
              </>
            ) : (
              <div className="loading-spinner" />
            )}
          </Link>
        </li>
      ))}
    </ul>
  </div>
  );
}

export default Home;

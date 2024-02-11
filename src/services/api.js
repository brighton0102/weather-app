const API_KEY = '04933f83120b4ba293a145243231710';
const BASE_URL = 'https://api.weatherapi.com/v1';

async function fetchWeatherByCityName(cityName) {
  try {
    const response = await fetch(`${BASE_URL}/current.json?key=${API_KEY}&q=${cityName}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching weather data: ${error.message}`);
  }
}

export default fetchWeatherByCityName;

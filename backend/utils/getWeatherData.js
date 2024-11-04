const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const API_KEY = 'aaa69f70f48262c59875e0961b3c0411'; // Replace with your actual API key
const BASE_URL = 'http://api.openweathermap.org/data/2.5/';

const getWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  console.log('Requesting URL:', url.toString()); // Log the full request URL

  try {
    const response = await fetch(url);
    const data = await response.json();

    // Log the entire response for debugging purposes
    console.log('API response:', data);

    // Check if the API response contains an error
    if (data.cod && data.cod !== 200) {
      console.error(`Error fetching weather data: ${data.message}`);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Network error:', error);
    return null;
  }
};

module.exports = getWeatherData;

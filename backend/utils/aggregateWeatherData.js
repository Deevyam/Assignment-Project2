const WeatherSummary = require('../models/WeatherSummary');
const getWeatherData = require('./getWeatherData');

const aggregateWeatherData = async () => {
  try {
    // Fetch weather data
    const weatherData = await getWeatherData('weather', { q: 'city_name', units: 'metric' });

    // Log the fetched data for verification
    console.log('Fetched weather data:', weatherData);

    // Check if weatherData is a valid array and not empty
    if (!Array.isArray(weatherData) || weatherData.length === 0) {
      console.error('No weather data found or data is not in expected format.');
      return;
    }

    const dailyData = {};

    weatherData.forEach((data) => {
      // Check if all necessary fields are present and of the correct type
      if (!data.timestamp || isNaN(new Date(data.timestamp).getTime())) {
        console.warn('Invalid or missing timestamp in data entry:', data);
        return;
      }
      if (data.temperature === undefined || typeof data.temperature !== 'number') {
        console.warn('Invalid or missing temperature in data entry:', data);
        return;
      }
      if (!data.condition || typeof data.condition !== 'string') {
        console.warn('Invalid or missing condition in data entry:', data);
        return;
      }

      // Extract date from timestamp
      const date = new Date(data.timestamp).toISOString().split('T')[0];

      // Initialize daily data if not already present
      if (!dailyData[date]) {
        dailyData[date] = {
          temperatures: [],
          conditions: {},
          maxTemperature: -Infinity,
          minTemperature: Infinity,
        };
      }

      // Populate temperature and condition data
      dailyData[date].temperatures.push(data.temperature);
      dailyData[date].maxTemperature = Math.max(dailyData[date].maxTemperature, data.temperature);
      dailyData[date].minTemperature = Math.min(dailyData[date].minTemperature, data.temperature);

      // Count conditions for determining dominant condition
      dailyData[date].conditions[data.condition] = (dailyData[date].conditions[data.condition] || 0) + 1;
    });

    // Calculate summaries for each date
    const summaries = Object.keys(dailyData).map((date) => {
      const data = dailyData[date];

      // Calculate average temperature
      const avgTemperature = data.temperatures.length > 0
        ? data.temperatures.reduce((a, b) => a + b) / data.temperatures.length
        : null;

      // Find dominant condition
      const dominantCondition = Object.keys(data.conditions).reduce((a, b) =>
        data.conditions[a] > data.conditions[b] ? a : b
      );

      // Prepare the summary object for storage
      return {
        date,
        avgTemperature,
        maxTemperature: data.maxTemperature,
        minTemperature: data.minTemperature,
        dominantCondition
      };
    });

    // Insert summaries into the database
    if (summaries.length > 0) {
      await WeatherSummary.insertMany(summaries);
      console.log('Daily weather summary successfully saved.');
    } else {
      console.log('No valid weather data to save.');
    }
  } catch (error) {
    console.error('Error aggregating weather data:', error);
  }
};

module.exports = aggregateWeatherData;

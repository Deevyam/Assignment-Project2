// Routes/weatherRoutes.js
const express = require('express');
const router = express.Router();
const aggregateWeatherData = require('../utils/aggregateWeatherData');

// Route to trigger weather data aggregation
router.post('/aggregate', async (req, res) => {
  try {
    const city = req.body.city || 'Delhi';
    await aggregateWeatherData(city);
    res.status(200).json({ message: 'Weather data aggregated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error aggregating weather data', error });
  }
});

module.exports = router;

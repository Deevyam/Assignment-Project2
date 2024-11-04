const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const weatherRoutes = require('./Routes/routes');


dotenv.config();

// MongoDB connection URI
const MONGO_URI = "mongodb+srv://deevyamsoin:YNfBG7OPTil6gLAo@mernproject.g44gtwe.mongodb.net/?retryWrites=true&w=majority";

// Define the server port
const PORT = process.env.PORT || 5002;

// Connect to MongoDB
const connectDB = async () => {
      mongoose
      .connect(MONGO_URI)
      .then(() => {
        console.log('Connected to MongoDB!');
      })
      .catch((err) => {
        console.log(err);
      });
  };

// Create Express app
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json());

// Define routes
app.get('/', (req, res) => res.send('Weather App'));
app.use('/api/weather', weatherRoutes);
const cron = require('node-cron');
const aggregateWeatherData = require('./utils/aggregateWeatherData'); // Adjust path as needed

// Schedule the aggregation to run daily at midnight
cron.schedule('0 0 * * *', async () => {
  console.log('Running daily weather aggregation...');
  try {
    await aggregateWeatherData();
    console.log('Weather data aggregated successfully.');
  } catch (error) {
    console.error('Error during scheduled weather aggregation:', error);
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

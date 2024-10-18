const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// MongoDB connection URI
const MONGO_URI = "mongodb+srv://deevyamsoin:YNfBG7OPTil6gLAo@mernproject.g44gtwe.mongodb.net/?retryWrites=true&w=majority";

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
}

// Create Express app
const app = express();

// Connect to database
connectDB();

// Define routes
app.get('/', (req, res) => res.send('Weather App'));

// Start the server
const PORT = 5002;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

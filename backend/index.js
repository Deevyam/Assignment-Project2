// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// const weatherRoutes = require('./Routes/routes');
// dotenv.config();

// // MongoDB connection URI
// const MONGO_URI = "mongodb+srv://deevyamsoin:YNfBG7OPTil6gLAo@mernproject.g44gtwe.mongodb.net/?retryWrites=true&w=majority";

// // Connect to MongoDB
// const connectDB = async () => {
//     mongoose
//     .connect(MONGO_URI)
//     .then(() => {
//       console.log('Connected to MongoDB!');
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// // Create Express app
// const app = express();

// // Connect to database
// connectDB();

// // Define routes
// app.get('/', (req, res) => res.send('Weather App'));
// app.use(express.json());
// app.use('/api/weather', weatherRoutes);

// app.get('/', (req, res) => res.send('Weather App'));

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// // Start the server
// const PORT = 5002;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
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

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

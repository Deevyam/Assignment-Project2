# Real-Time Weather Monitoring and Alert System

## Overview

This project implements a real-time weather monitoring system using HTML, CSS, and JavaScript. It fetches live weather data from the OpenWeatherMap API, processes it to generate daily summaries, and sends alerts when specific weather thresholds are breached. Users can visualize daily weather summaries and trends directly on a simple web interface.

## Features

- **Real-Time Weather Data**: Continuously retrieves weather data from OpenWeatherMap at configurable intervals.
- **Daily Aggregates**: Summarizes daily temperature statistics and weather conditions.
- **Custom Alerts**: Allows setting of thresholds for specific weather conditions and triggers notifications when thresholds are exceeded.
- **Visualization**: Displays daily summaries and alert history on a clean HTML/CSS-based dashboard.

## Data Source

The system retrieves weather data from the OpenWeatherMap API. You will need to sign up for a free API key to access weather information for cities in India, including:

- Delhi
- Mumbai
- Chennai
- Bangalore
- Kolkata
- Hyderabad

### Key Data Points:

- **Temperature** (in Celsius or Fahrenheit based on user preference)
- **Feels-like Temperature**
- **Weather Condition** (Clear, Rain, Snow, etc.)
- **Timestamp** of data update

## Project Breakdown

### 1. Fetching Weather Data

- JavaScript `fetch()` is used to make API calls to OpenWeatherMap.
- The API call is made at configurable intervals (e.g., every 5 minutes).
- The system supports temperature conversion between Kelvin, Celsius, and Fahrenheit.

### 2. Daily Aggregations

- For each city, the system calculates the following daily data:
  - **Average Temperature**
  - **Maximum and Minimum Temperature**
  - **Dominant Weather Condition** (based on frequency of each condition)

### 3. Alerts

- Users can configure custom thresholds (e.g., temperature exceeding 35°C).
- When the threshold is breached, the system triggers an alert notification.
- Alerts can be displayed on the screen or sent via email (using external libraries like nodemailer).

### 4. Data Visualization

- Simple HTML and CSS are used to build a web interface that shows:
  - Daily weather summaries.
  - Alerts triggered by breached thresholds.
  - Historical trends using temperature data.

## Setup Instructions

### Prerequisites

- **HTML, CSS, and JavaScript**
- **OpenWeatherMap API Key**

### Steps

1. **Download or Clone the Repository**:
   ```bash
   git copy 
   cd weather-monitoring-system
   cd backend npm i
   node index.js
   cd frontend npm i
   npm run dev
   

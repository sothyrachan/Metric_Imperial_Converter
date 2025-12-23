# Metric/Imperial Converter

## Overview
A freeCodeCamp project that converts between metric and imperial units. Built with Node.js and Express.

## Project Structure
- `server.js` - Main Express server entry point (port 5000)
- `controllers/convertHandler.js` - Unit conversion logic
- `routes/api.js` - API endpoint routes
- `routes/fcctesting.js` - fCC testing routes
- `views/index.html` - Frontend HTML
- `public/` - Static assets (CSS)
- `tests/` - Unit and functional tests

## Running the Application
```bash
npm start
```
The server runs on port 5000.

## API Endpoint
`GET /api/convert?input=<value><unit>`

Supported units: gal, L, lbs, kg, mi, km

## Recent Changes
- December 23, 2025: Configured for Replit environment (port 5000, 0.0.0.0 binding)

import express from 'express';
import weatherController from '../Controller/weather.controller';
import restCountriesController from '../Controller/restCountries.controller';
import { createWeather, getWeather } from '../Controller/dataBase.controller';


const router = express.Router();

router.get('/aggregateData', async (req, res) => {
  try {
    // Extract the "location" query parameter from the request
    const location = req.query.location as string;
    console.log(location,"location")

    if (!location) {
      return res.status(400).json({ error: 'Location is required' });
    }

    // Fetch data from the weather API using the provided location
    const weatherData = await weatherController.getWeatherData(location);

    // Fetch country data for the provided location
    const countriesData = await restCountriesController.getCountryData(location);
    console.log(weatherData,"weatherData")
    console.log(countriesData,"countriesData")

    // Perform aggregation logic - example: combining data from both APIs
    const aggregatedData = {
      location,
      weather: weatherData,
      countries: countriesData,
    };

    // Send the aggregated data as a response
    res.json({ aggregatedData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/api/weather', createWeather);
router.get('/api/weather', getWeather);

export default router;

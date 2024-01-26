import axios from 'axios';

const weatherController = {
  async getWeatherData(location: string) {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: location },
      headers: {
        'X-RapidAPI-Key': 'e979f69bd8msh91cc177881e8b48p1e899djsn77558153eeba',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to fetch weather data');
    }
  },
};

export default weatherController;

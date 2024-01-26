import axios from 'axios';

const restCountriesController = {
  async getCountryData(countryCode: any) {
    const options = {
      method: 'GET',
      url: `https://rest-countries10.p.rapidapi.com/country/${countryCode}`,
      headers: {
        'X-RapidAPI-Key': 'e979f69bd8msh91cc177881e8b48p1e899djsn77558153eeba',
        'X-RapidAPI-Host': 'rest-countries10.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error(`Failed to fetch data for country code ${countryCode}`);
    }
  },
};

export default restCountriesController;

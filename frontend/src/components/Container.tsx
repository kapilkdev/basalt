import axios from "axios";

const Container = ({ outputImage, weatherData }: any) => {
  const { aggregatedData } = weatherData;
  const { countries, weather, location } = aggregatedData;
  console.log(weatherData, aggregatedData, "countriesData");
  console.log(countries, weather, "countriesData");

  const saveToDb = () => {
    axios.post("http://localhost:5000/api/weather", {
      location: location,
      flag: flag?.officialflag?.svg,
      whetherImage: outputImage,
      temperature: weather?.current?.temp_c,
      windPerHour: weather?.current?.wind_kph,
      windDir: weather?.current?.wind_dir,
      lastUpdated: weather?.current?.last_updated,
      humidity: weather?.current?.humidity,
      cloud: weather?.current?.cloud,
    });
  };

  const { flag } =
    countries?.find(
      (country: any) =>
        country.name.shortname.toLowerCase() === location.toLowerCase()
    ) || {};
  return (
    <div className="container">
      <div className="custom-card">
        <div className="left-side">
          <div className="flag ">
            <img
              src={flag?.officialflag?.svg}
              alt="Country Flag"
              width={50}
              height={30}
            />
          </div>
          <div className="related-data">
            <h4>{location.toUpperCase()}</h4>
            <p>Temperature: {weather?.current?.temp_c}°C</p>
            <p>Wind Direction: {weather?.current?.wind_dir}</p>
            <p>Wind Per Hour: {weather?.current?.wind_kph}</p>

            <p>Last Updated: {weather?.current?.last_updated}</p>
            <p>Humidity: {weather?.current?.humidity}%</p>
            <p>Cloudy: {weather?.current?.cloud}%</p>
          </div>
        </div>
        {outputImage && (
          <div className="right-side">
            <h4>Generated Image:</h4>
            <img
              src={outputImage}
              alt="Generated Image"
              className="rounded-circle"
              width={500}
              height={500}
            />
          </div>
        )}
        <button className="search-button save-button" onClick={saveToDb}>
          Save Report
        </button>
      </div>
    </div>
  );
};

export default Container;

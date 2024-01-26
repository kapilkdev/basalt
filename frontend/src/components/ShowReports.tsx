import axios from "axios";
import React, { useEffect, useState } from "react";

export const ShowReports = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/weather");
        setData(response.data);
      } catch (error) {
        setError("Error fetching weather data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>ShowReports</h1>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {data && data.map((item: any, index: number) => (
        <div className="container" key={index}>
          <div className="custom-card">
            <div className="flag">
              <img
                src={item?.flag}
                alt="Country Flag"
                width={50}
                height={30}
              />
            </div>
            <div className="related-data">
              <h4>{item.location.toUpperCase()}</h4>
              <p>Temperature: {item.temperature}°C</p>
              <p>Wind Direction: {item.windDir}</p>
              <p>Wind Per Hour: {item.windPerHour}</p>

              <p>Last Updated: {item.lastUpdated}</p>
              <p>Humidity: {item.humidity}%</p>
              <p>Cloudy: {item.cloud}%</p>
            </div>
            {item.whetherImage && (
              <div>
                <h4>Generated Image:</h4>
                <img
                  src={item.whetherImage}
                  alt="Generated Image"
                  className="rounded-circle"
                  width={500}
                  height={250}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

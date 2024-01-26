import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import  Container  from "./Container";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  const [outputImage, setOutputImage] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false)


  const handleGenerate = async (search:string) => {
    setIsLoading(true)
    const apiKey = "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";
    const apiUrlImage = "https://api.openai.com/v1/images/generations";

    // Request for generating image
    try {
      const responseImage = await fetch(apiUrlImage, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt: `Generate a weather image for the following conditions: cloudy:${weatherData?.current?.cloud}
          humidity:${weatherData?.current?.humidity}
          temperature:${weatherData?.current?.temp_c}
          wind_kph:${weatherData?.current?.wind_kph}
          `,
          // Add other parameters as needed based on the OpenAI API documentation
        }),
      });

      const dataImage = await responseImage.json();
      setOutputImage(dataImage.data[0]?.url);
      setIsLoading(false)
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  const fetchData = async (location: string) => {
    try {
      const response = await axios.get(`http://localhost:5000/aggregateData?location=${location}`);
      setWeatherData(response?.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = async (query: string) => {
    fetchData(query);
    handleGenerate(query)
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      {weatherData && outputImage ?
      <Container outputImage={outputImage} weatherData={weatherData}/>
        : <div>{!isLoading ? 'Search weather by your location name' : 'Loading...'}</div>
      }
    </>
  );
};

export default Main;

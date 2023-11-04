import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const WeatherDataContext = createContext();

export const useWeatherData = () => {
  return useContext(WeatherDataContext);
};

export const WeatherDataProvider = ({ children }) => {
  const API_KEY = "fe586bfd0c39e7cce1749fe151398673";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";

  const [weatherData, setWeatherData] = useState(null);

  const getWeatherDataByCity = async (city) => {
    try {
      const response = await axios.get(
        `${BASE_URL}q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
    }
  };

  return (
    <WeatherDataContext.Provider value={{ weatherData, getWeatherDataByCity }}>
      {children}
    </WeatherDataContext.Provider>
  );
};

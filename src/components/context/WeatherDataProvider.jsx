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
  const [nextWeather, setNextWeather] = useState(null);

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

  const weatherForNextDays = async (city) => {
    try {
      const response = await axios.get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=metric&key=23VPXAF7FCGPMNCAXB9QQK7SY`
      );
      setNextWeather(response.data.days);
      console.log(response);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setNextWeather(null);
    }
  };

  const getWeatherForCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      try {
        const response = await axios.get(
          `${BASE_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        console.log(response);
        setWeatherData(response.data);
        const cityName = response.data.name;
        weatherForNextDays(cityName);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setWeatherData(null);
      }
    });
  };
  
  

  return (
    <WeatherDataContext.Provider
      value={{
        weatherData,
        getWeatherDataByCity,
        nextWeather,
        weatherForNextDays,
        getWeatherForCurrentLocation
      }}
    >
      {children}
    </WeatherDataContext.Provider>
  );
};

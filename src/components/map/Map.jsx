import React from "react";
import "./map.css";
import { useWeatherData } from "../context/WeatherDataProvider";

const Map = () => {
  const { weatherData } = useWeatherData();
  const cityName = weatherData?.name;
  return (
    <div className="map zoom">
      <iframe
        title="map"
        height="300"
        width="100%"
        loading="lazy"
        allowfullscreen=""
        referrerpolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAq15HbfCRMW7RqNb5LUNyOLyfzpYI0wl4&q=${cityName}`}
      ></iframe>
    </div>
  );
};

export default Map;

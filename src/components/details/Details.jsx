import React from "react";
import { useWeatherData } from "../context/WeatherDataProvider";
import "./detail.css";

const Details = () => {
  const { weatherData } = useWeatherData();

  const FT = weatherData?.main.feels_like;
  const Humid = weatherData?.main.humidity;
  const Visibility = (weatherData?.visibility * 0.001).toFixed(2);
  const Wind = weatherData?.wind.speed;
  const MaxTemp = weatherData?.main.temp_max;
  const MinTemp = weatherData?.main.temp_min;

  return (
    <div class="details zoom">
      <div class="names">
        <p>Felt Temp.</p>
        <p>Humidity</p>
        <p>Wind</p>
        <p>Visibility</p>
        <p>Max Temp.</p>
        <p>Min Temp.</p>
      </div>
      <div class="values">
        <p class="feltTemp">
          {FT}
          <sup>o</sup> C
        </p>
        <p class="humidity">{Humid}%</p>
        <p class="wind">{Wind} Km/h</p>
        <p class="visibility">{Visibility} Km</p>
        <p class="maxTemp">
          {MaxTemp}
          <sup>o</sup> C
        </p>
        <p class="minTemp">
          {MinTemp}
          <sup>o</sup> C
        </p>
      </div>
    </div>
  );
};

export default Details;

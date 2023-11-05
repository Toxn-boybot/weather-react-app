import React from "react";
import "./temp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import { useWeatherData } from "./../context/WeatherDataProvider";

const Temp = () => {
  const { weatherData, getWeatherDataByCity } = useWeatherData();

  const cityName = weatherData?.name;
  const temp = Math.trunc(weatherData?.main?.temp);
  const state = weatherData?.weather[0].main;
  

  const updateWeather = () => {
    const spinner = document.getElementById("spinner");
    spinner.classList.add("spinner");

    //Show notification when clicking the refresh button using toastr js
    // toastr.success('Weather updated');

    
    //remove the spin class again
    const spinTime = setTimeout(RemoveSpin, 1000);
    function RemoveSpin() {
      spinner.classList.remove("spinner");
      //refresh data for current city
      getWeatherDataByCity(cityName);
    }
  };

  return (
    <div className="temp">
      <div className="icon">
        <button id="refreshButton" onClick={updateWeather}>
          <FontAwesomeIcon
            icon={faRotate}
            id="spinner"
            type="button"
            className="fa-solid fa-rotate"
          />
        </button>
      </div>
      <h2 id="currCity" className="cityName">
        {cityName}
      </h2>
      <h2 className="cityTemp">
        {temp} <sup>o</sup>C
      </h2>
      <h2 className="State">{state}</h2>
    </div>
  );
};

export default Temp;

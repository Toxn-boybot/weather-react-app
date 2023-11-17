import React from "react";
import "./next.css";
import { useWeatherData } from "./../context/WeatherDataProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { Icon } from "@iconify/react";

const Next = () => {
  const { nextWeather: forecasts } = useWeatherData();

  console.log(forecasts);

  const nextContent = forecasts?.map((forecast) => {
    const { datetime, tempmax, tempmin, conditions, preciptype } = forecast;

    let today;
    switch (new Date(datetime).getDay()) {
      case 0:
        today = "Sunday";
        break;
      case 1:
        today = "Monday";
        break;
      case 2:
        today = "Tuesday";
        break;
      case 3:
        today = "Wednesday";
        break;
      case 4:
        today = "Thursday";
        break;
      case 5:
        today = "Friday";
        break;
      case 6:
        today = "Saturday";
        break;
      default:
        today = "";
    }
    return (
      <div className="zoom">
        <div className="dayDetails">
          <p className="date">{datetime}</p>
          <p className="name">{today}</p>
        </div>
        <div className="temps">
          <p className="morning">
            <Icon icon="gg:sun" />
            {Math.trunc(tempmax)} <sup>o</sup>C
          </p>
          <p className="night">
            <FontAwesomeIcon icon={faMoon} />
            {Math.trunc(tempmin)} <sup>o</sup>C
          </p>
          <p className="state">
            {(preciptype?.at(0) ?? conditions)
              .replace("Partially cloudy", "Cloudy")
              .charAt(0)
              .toUpperCase() +
              (preciptype?.at(0) ?? conditions)
                .replace("Partially cloudy", "Cloudy")
                .slice(1)}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="next">
      <div className="container">{nextContent}</div>
    </div>
  );
};

export default Next;

import React from "react";
import "./main.css";
import Temp from "../temp/Temp";
import Details from "../details/Details";
import Map from "../map/Map";
import Next from "../next/Next";
import Loader from "../loader/Loader";
import { useWeatherData } from "../context/WeatherDataProvider";
const Main = () => {

  const {weatherData} = useWeatherData();
  return (
    <main>
      <div className="container">
        {weatherData === null ? (
          <Loader />
        ) : (
          <>
            <section className="today">
              <Temp />
              <Details />
              <Map />
            </section>
            <Next />
          </>
        )}
      </div>
    </main>
  );
};

export default Main;

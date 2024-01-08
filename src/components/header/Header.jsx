import "./header.css";
import { useWeatherData } from "../context/WeatherDataProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Header() {
  const {
    getWeatherDataByCity,
    weatherForNextDays,
    getWeatherForCurrentLocation,
  } = useWeatherData();

  const handleSubmit = (e) => {
    e.preventDefault();
    spinAnim();
    const inputValue = document.getElementById("cityNameInput").value;
    getWeatherDataByCity(inputValue);
    const submit = document.getElementById("submitButton");
    submit.blur();
  };

  const spinAnim = () => {
    const spinner = document.getElementById("spinner");
    spinner?.classList.add("spinner");

    //remove the spin class again
    setTimeout(RemoveSpin, 1000);
    function RemoveSpin() {
      spinner?.classList.remove("spinner");
    }
  };

  const handleYourLocationWeatherClick = () => {
    spinAnim();
    getWeatherForCurrentLocation();
    toast.success("Weather Updated");
  };

  useEffect(() => {
    getWeatherForCurrentLocation();
  }, []);

  return (
    <header>
      <div className="container">
        <form
          method="POST"
          id="searchCity"
          class="searchCity"
          onSubmit={handleSubmit}
        >
          <input
            id="cityNameInput"
            className="city"
            type="search"
            name="city"
            placeholder="City"
            required
          />
          <button id="submitButton" type="submit">
            Search
          </button>
        </form>
        <div className="location">
          <button
            id="yourLocationWeather"
            onClick={handleYourLocationWeatherClick}
          >
            <i className="fa-solid fa-location-dot">
              <FontAwesomeIcon icon={faLocationDot} />
            </i>
            Your location Weather
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

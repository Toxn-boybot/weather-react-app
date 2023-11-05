import "./header.css";
import { useWeatherData } from "../context/WeatherDataProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const { weatherData, getWeatherDataByCity } = useWeatherData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = document.getElementById("cityNameInput").value;
    getWeatherDataByCity(inputValue);
    const submit = document.getElementById("submitButton");
    submit.blur();
  };

  console.log(weatherData);
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
          <button id="yourLocationWeather">
            <i className="fa-solid fa-location-dot">
              <FontAwesomeIcon icon={faLocationDot} />
            </i>{" "}
            Your location Weather
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

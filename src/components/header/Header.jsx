
import "./header.css";
import { useWeatherData } from "../context/WeatherDataProvider";

function Header() {
  const { weatherData, getWeatherDataByCity } = useWeatherData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = document.getElementById("cityNameInput").value;
    getWeatherDataByCity(inputValue);
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
          <button type="submit">Search</button>
        </form>
        <div className="location">
          <button id="yourLocationWeather">
            <i className="fa-solid fa-location-dot"></i> Your location Weather
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React, { Suspense, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchWeatherStart,
  fetchWeatherSuccess,
  fetchWeatherFailure,
} from "../store/WeatherSlice";
import "./Weather.css";
import { useCallback } from "react";
import { debounce } from "lodash";
import { useTheme } from "../Context/ThemeContext";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import search_icon from "../assets/search.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

function Weather() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const handleSearch = useCallback(
    debounce((value) => search(value), 300),
    []
  );
  const WeatherData = React.lazy(() => import("./WeatherData"));
  const inputRef = useRef();
  const dispatch = useDispatch();
  const {
    data: weatherData,
    loading,
    error,
  } = useSelector((state) => state.weather);

  const allIcons = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "03d": cloud_icon,
    "03n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const search = async (city) => {
    if (city === "") {
      alert("Please Enter City Name!");
      return;
    }

    dispatch(fetchWeatherStart());

    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_APP_ID
      }`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      const icon = allIcons[data.weather[0].icon] || clear_icon;
      dispatch(
        fetchWeatherSuccess({
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          temperature: Math.floor(data.main.temp),
          location: data.name,
          icon,
        })
      );
    } catch (error) {
      dispatch(fetchWeatherFailure(error.message));
    }
  };

  const handleSearchClick = useCallback((event) => {
    event.preventDefault();
    search(inputRef.current.value);
  }, []);

  const handleKeyPress = useCallback((event) => {
    if (event.key === "Enter") {
      search(inputRef.current.value);
    }
  }, []);

  useEffect(() => {
    search("Lahore");
  }, []);

  return (
    <div className={`weather ${isDarkMode ? "dark" : ""}`}>

      <button className="toggle-dark-mode" onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <div className="search-bar">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search"
          onKeyPress={handleKeyPress}
        />
        <img src={search_icon} alt="Search" onClick={handleSearchClick} />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      <Suspense fallback={<div>Loading...</div>}>
        {weatherData && <WeatherData data={weatherData} />}
      </Suspense>
    </div>
  );
}

export default Weather;





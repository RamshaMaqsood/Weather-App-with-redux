import React from "react";
import "./Weather.css";
import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import humidity_icon from "../assets/humidity.png";
import rain_icon from "../assets/rain.png";
import search_icon from "../assets/search.png";
import snow_icon from "../assets/snow.png";
import wind_icon from "../assets/wind.png";

const WeatherData = React.memo(({ data }) => (
  <div>
    <img src={data.icon} alt="" className="weather-icon" />
    <p className="temperature">{data.temperature}&deg;c</p>
    <p className="location">{data.location}</p>
    <div className="weather-data">
      <div className="col">
        <img src={humidity_icon} alt="" />
        <div>
          <p>{data.humidity}%</p>
          <span>Humidity</span>
        </div>
      </div>
      <div className="col">
        <img src={wind_icon} alt="" />
        <div>
          <p>{data.windSpeed} Km/h</p>
          <span>Wind Speed</span>
        </div>
      </div>
    </div>
  </div>
));

export default WeatherData;

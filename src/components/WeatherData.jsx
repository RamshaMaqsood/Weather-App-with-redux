// import React from "react";
// import "./Weather.css";
// import clear_icon from "../assets/clear.png";
// import cloud_icon from "../assets/cloud.png";
// import drizzle_icon from "../assets/drizzle.png";
// import humidity_icon from "../assets/humidity.png";
// import rain_icon from "../assets/rain.png";
// import search_icon from "../assets/search.png";
// import snow_icon from "../assets/snow.png";
// import wind_icon from "../assets/wind.png";

// const WeatherData = React.memo(({ data }) => (
//   <div>
//     <img src={data.icon} alt="" className="weather-icon" />
//     <p className="temperature">{data.temperature}&deg;c</p>
//     <p className="location">{data.location}</p>
//     <div className="weather-data">
//       <div className="col">
//         <img src={humidity_icon} alt="" />
//         <div>
//           <p>{data.humidity}%</p>
//           <span>Humidity</span>
//         </div>
//       </div>
//       <div className="col">
//         <img src={wind_icon} alt="" />
//         <div>
//           <p>{data.windSpeed} Km/h</p>
//           <span>Wind Speed</span>
//         </div>
//       </div>
//     </div>
//   </div>
// ));

// export default WeatherData;



import React from "react";
import PropTypes from "prop-types"; // For prop validation
import "./Weather.css";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";

// Using React.memo to optimize re-renders
const WeatherData = React.memo(({ data }) => {
  return (
    <div className="weather-info">
      {/* Displaying Weather Icon, Temperature, and Location */}
      <div className="weather-main">
        <img src={data.icon} alt="Weather Icon" className="weather-icon" />
        <p className="temperature">{data.temperature}&deg;C</p>
        <p className="location">{data.location}</p>
      </div>

      {/* Weather Details - Humidity and Wind Speed */}
      <div className="weather-data">
        <div className="col">
          <img src={humidity_icon} alt="Humidity Icon" className="weather-icon-small" />
          <div>
            <p>{data.humidity}%</p>
            <span>Humidity</span>
          </div>
        </div>

        <div className="col">
          <img src={wind_icon} alt="Wind Icon" className="weather-icon-small" />
          <div>
            <p>{data.windSpeed} Km/h</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
});

// PropTypes for better prop validation and error catching
WeatherData.propTypes = {
  data: PropTypes.shape({
    temperature: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
  }).isRequired,
};

export default WeatherData;

import React, { useEffect, useState } from "react";
import getIcon from "../components/getIcon.js";

const Location = ({ data, location, setLocation }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
      );
      const geoData = await geoResponse.json();

      const { latitude, longitude } = geoData.results[0];

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherResponse.json();

      setWeather(weatherData.current_weather);
    };

    fetchWeather();
  }, [location]);

  const currentCity = data.find((city) => city.city === location);

  if (!currentCity) {
    return <h3>Location not found</h3>;
  }

  if (!weather) {
    return <h3>Loading weather data...</h3>;
  }

  const icon = getIcon(weather.weathercode);

  return (
    <div className="card">
      <div className="img-container">
        <img className="card-img-top" src={icon} alt="Weather icon" id="icon" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{currentCity.city}</h3>
        <h5 className="card-text">{weather.temperature}°C</h5>
        <h5 className="card-text">{weather.weathercode}</h5>
      </div>
    </div>
  );
};

export default Location;

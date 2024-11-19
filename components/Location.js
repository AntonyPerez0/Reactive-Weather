import React from "react";
import getIcon from "../components/getIcon";

const Location = ({ data, location, setLocation }) => {
  const currentCity = data.find((city) => city.city === location);

  const icon = getIcon(currentCity.forecast);

  return (
    <div className="card">
      <div className="img-container">
        <img className="card-img-top" src={icon} alt="Weather icon" id="icon" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{currentCity.city}</h3>
        <h5 className="card-text">{currentCity.temperature}</h5>
        <h5 className="card-text">{currentCity.forecast}</h5>
      </div>
    </div>
  );
};

export default Location;

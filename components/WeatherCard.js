import React from "react";
import getIcon from "../components/getIcon";

function WeatherCard(props) {
  const icon = getIcon(props.data.forecast);

  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={icon}
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div className="card-body">
        <h3 className="card-title">{props.data.city}</h3>
        <h5 className="card-text">{props.data.temperature}</h5>
        <h5 className="card-text">{props.data.forecast}</h5>
      </div>
    </div>
  );
}

// Export the WeatherCard
module.exports = WeatherCard;

import React from "react";
import { useState } from "react";
import cities from "./data";
import WeatherCard from "./components/WeatherCard";
import Location from "./components/Location";
import Form from "./components/Form"; 

function App() {
  const [location, setLocation] = useState("Paris");

  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <Form location={location} setLocation={setLocation} /> {/* Render Form */}
      <Location data={cities} location={location} setLocation={setLocation} />
      <div className="app">
        {cities.map((city) => (
          <WeatherCard data={city} key={city.city} />
        ))}
      </div>
    </>
  );
}

export default App;
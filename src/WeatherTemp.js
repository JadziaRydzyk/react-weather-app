import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemp(props) {
  return (
    <div>
      <span className="Temperature WeatherDetails">
        {Math.round(props.celsius)}
      </span>
      <span className="Unit">°C</span>
    </div>
  );
}

import React from "react";
import { ReactSkycon } from "react-skycons-extended";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "CLOUDY",
    "03n": "CLOUDY",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "SHOWERS_DAY",
    "09n": "SHOWERS_NIGHT",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "THUNDER_SHOWERS_DAY",
    "11n": "THUNDER_SHOWERS_NIGHT",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  };
  return (
    <div>
      <ReactSkycon
        icon={codeMapping[props.code]}
        color="#678983"
        size={props.size}
        animate={true}
      />
    </div>
  );
}

import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="Overview">
        <h2 className="CityName"> {props.data.city} </h2>
        <div>
          <FormattedDate date={props.data.date} />{" "}
        </div>
        <div className="WeatherDescription text-capitalize">
          {props.data.decription}
        </div>
      </div>
      <div className="row TodayWeather">
        <img
          src={props.data.iconUrl}
          className="col-4"
          alt={props.data.description}
        />

        <div className="col-4 TempBox">
          <strong className="Temperature WeatherDetails">
            {Math.round(props.data.temperature)}
          </strong>
          °C
        </div>

        <div className="col-4 WeatherDetails">
          <div>
            Humidity: <span>{props.data.humidity}</span>%
          </div>
          <div>
            Wind: <span>{Math.round(props.data.wind)}</span> km/h
          </div>
        </div>
      </div>
    </div>
  );
}

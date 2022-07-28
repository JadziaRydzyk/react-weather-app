import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

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
        <div className="col-4 Icon WeatherDetails">
          <WeatherIcon code={props.data.icon} size={56} />
        </div>

        <div className="col-4 TempBox">
          <WeatherTemp celsius={props.data.temperature} />
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

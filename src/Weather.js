import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      decription: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconUrl: "http://openweathermap.org/img/wn/01d@2x.png",
      date: "Monday 10.35",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="WheatherBox">
        <h1 className="Title">sunny or rainy</h1>
        <div className="CityForms">
          <form>
            <input
              type="text"
              placeholder="enter a city"
              className="EnterCity"
            />
            <input type="submit" value="search" className="Search" />
            <input type="submit" value="current" className="Search" />
          </form>
        </div>
        <div className="Overview">
          <h2 className="CityName"> {weatherData.city} </h2>
          <div>
            {weatherData.date} <span>Monday</span>
          </div>
          <div className="WeatherDescription text-capitalize">
            {" "}
            {weatherData.decription}{" "}
          </div>
        </div>
        <div className="row TodayWeather">
          <img
            src={weatherData.iconUrl}
            className="col-4"
            alt={weatherData.description}
          />

          <div className="col-4 TempBox">
            <strong className="Temperature WeatherDetails">
              {Math.round(weatherData.temperature)}
            </strong>
            °C
          </div>

          <div className="col-4 WeatherDetails">
            <div>
              Humidity: <span>{weatherData.humidity}</span>%
            </div>
            <div>
              Wind: <span>{Math.round(weatherData.wind)}</span> km/h
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "6a9394d6d39a65a984e888e3891d896e";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}

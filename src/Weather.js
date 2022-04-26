import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="WheatherBox">
      <h1 className="Title">sunny or rainy</h1>
      <div className="CityForms">
        <form>
          <input type="text" placeholder="enter a city" className="EnterCity" />
          <input type="submit" value="search" className="Search" />
          <input type="submit" value="current" className="Search" />
        </form>
      </div>
      <div className="Overview">
        <h2 className="CityName"> Katowice </h2>
        <div>
          Last updated: 18.45 <span>Monday</span>
        </div>
        <div className="WeatherDescription"> Overcast clouds </div>
      </div>

      <div className="row TodayWeather">
        <img
          src="http://openweathermap.org/img/wn/01d@2x.png"
          className="col-4"
          alt="clear"
        />

        <div className="col-4 TempBox">
          <strong className="Temperature WeatherDetails">18</strong>
          °C
        </div>

        <div className="col-4 WeatherDetails">
          <div>
            Humidity: <span>65</span>%
          </div>
          <div>
            Wind: <span>6</span> km/h
          </div>
        </div>
      </div>

      <footer>
        <a
          className="GitHubLink"
          href="https://github.com/JadziaRydzyk/react-weather-app"
          target="_blank "
        >
          Look at my GitHub repository
        </a>
      </footer>
    </div>
  );
}

import moment from "moment-timezone";
import Image from "next/image";
import React from "react";

export default function HourlyWeather({ hourlyWeather, timezone }) {
  // console.log(timezone);
  // console.log(hourlyWeather);
  return (
    <div className="hourly">
      <div className="hourly__inner">
        {hourlyWeather.length > 0 &&
          hourlyWeather.map((weather, i) => (
            <div key={weather.dt} className="hourly__box-wrapper">
              <div className="hourly__box">
                <span
                  className={`hourly__time ${
                    i == 0 ? "hourly__time--now" : ""
                  }`}
                >
                  {i == 0
                    ? "Currently"
                    : moment.unix(weather.dt).tz(timezone).format("LT")}
                </span>

                <Image
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                  height="100"
                  width="100"
                />
                <span>{weather.temp.toFixed(0)}&deg;F</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

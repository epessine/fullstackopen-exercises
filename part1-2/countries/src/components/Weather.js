import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ capital }) => {
  const [ weather, setWeather ] = useState({});

  useEffect(() => {
    axios
      .get('http://api.weatherstack.com/current', {params: { 
        access_key: process.env.REACT_APP_API_KEY,
        query: capital
      }})
      .then(res => {
        setWeather(res.data);
        console.log(res.data);
      })
  }, [capital]);

  if (weather.current && capital) {
    return (
      <div>
        <h2>Weather in {capital}</h2>
        <p><strong>temperature:</strong> {weather.current.temperature}°C</p>
        <img src={weather.current.weather_icons[0]} width="5%" alt="flag"/>
        <p><strong>wind:</strong> {weather.current.wind_speed}km/h direction {weather.current.wind_dir}</p>
      </div>
    )
  }

  return (
    <div></div>
  )
}

export default Weather;
import React, { useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import './WeatherApp.css';
import './Bg.css';


const API_KEY = 'bd5e378503939ddaee76f12ad7a97608'; // Replace with your OpenWeather API key

function WeatherApp ()  {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  const renderChart = () => {
    if (weatherData && weatherData.hourly) {
      const labels = weatherData.hourly.map((data) =>
        new Date(data.dt * 1000).toLocaleTimeString('en-US', { hour: 'numeric' })
      );
      const temperatures = weatherData.hourly.map((data) => data.temp);

      const chartData = {
        labels,
        datasets: [
          {
            label: 'Temperature (°C)',
            data: temperatures,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      };

      return <Line data={chartData} />;
    }
  };

  return (
    <div className="weather-app">
      <h1>WEATHER FORECAST</h1>
      <form classname="Form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button classname="Button" type="submit">Get</button>
      </form>
      {weatherData && (
        <div class="weather-data">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <div class="chart-container">{renderChart()}</div>
        </div>
      )}
    </div>
  );
};
export default WeatherApp;

/*import React, { useState } from 'react';
import axios from 'axios';   //for http requests
import './App.css';
import './Bg.css';
const API_KEY = 'bd5e378503939ddaee76f12ad7a97608'
function WeatherApp() {
  const [city, setCity] = useState('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(``);
      setWeatherData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="WeatherApp">
      <h1>WEATHER FORECAST</h1>

      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
        <button type="submit">Get</button>
      </form>

      {loading ? (
        <div>Loading...</div>
      ) : (
        weatherData && (
          <div>
            <h2>Weather Information for {city}</h2>
            <p>Temperature: {weatherData.temperature}</p>
            <p>Conditions: {weatherData.conditions}</p>
            {// Add more weather information as needed 
          }
          </div>
        )
      )}
    </div>
  );
}

export default WeatherApp;*/




/*import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
function CityInput() {
  const [city, setCity] = useState('');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the city value, such as passing it to an API or performing any desired action
    console.log(city);
    // Reset the input field
    setCity('');
  };

  return (
    <div>
      <div className="App">
      <Navbar />
      <h1>welcome</h1>
      {

      }
      
    </div>
      <CityInput>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          placeholder="Enter a city name"
        />
        <button type="submit">Submit</button>
      </form>
      </CityInput>
    </div>
  );
}

export default CityInput;*/

/*import React from 'react';
// import NavbarElements from './NavbarElements.js';
import './App.css';
import Navbar from './Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>welcome</h1>
      {

      }
      
    </div>
  );
}
export default App;*/

/*import React, { useState } from 'react';
import axios from 'axios';   //for http requests
import './App.css';
import './Bg.css';
function WeatherApp() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.example.com/weather?city=${city}`);
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



/*import React from 'react';
//import './App.css';
import './Bg.css';
function MyComponent() {
  const handleButtonClick = (buttonName) => {
    console.log(`Button ${buttonName} clicked!`);
  };

  return (
    <div>
      <h1>My Component</h1>

      <button onClick={() => handleButtonClick('Home')}>Home</button>
      <button onClick={() => handleButtonClick('sign up')}>sign up</button>
      <button onClick={() => handleButtonClick('weather api')}>weather api</button>
      <button onClick={() => handleButtonClick('about')}>about</button>
    </div>
  );
}

export default MyComponent;*/

/*import React, { useState } from 'react';
import './Bg.css';
function App() {
  const [activeOption, setActiveOption] = useState('home');

  return (
    <div>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex'}}>
          <li style={{ marginRight: '100px' }}>
            <button onClick={() => setActiveOption('home')}
            style={{ backgroundColor: activeOption === 'home' ? 'beige' : 'beige' }}
            >Home</button>
          </li>
          <li style={{ marginRight: '100px' }}>
            <button onClick={() => setActiveOption('about')}
            style={{ backgroundColor: activeOption === 'home' ? 'beige' : 'beige' }}
            >About</button>
          </li>
          <li style={{ marginRight: '100px' }}>
            <button onClick={() => setActiveOption('contact')}
            style={{ backgroundColor: activeOption === 'home' ? 'beige' : 'beige' }}
            >Contact</button>
          </li>
        </ul>
      </nav>

      {activeOption === 'home' && <h1>Home Content</h1>}
      {activeOption === 'about' && <h1>About Content</h1>}
      {activeOption === 'contact' && <h1>Contact Content</h1>}
      {!(activeOption === 'home' || activeOption === 'about' || activeOption === 'contact') && (
        <h1>Invalid Option</h1>
      )}
    </div>
  );
}
export default App;*/



import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Navbar.js';
import  ImageUpload  from './Upload.js';
//import  About from './About.js';
import  Home from './Home.js';
import './WeatherApp.js'
import './Bg.css';
import './App.css';
import WeatherApp from './WeatherApp.js';
import './MyComponent.js';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Home.js" element={<Home />} />
        <Route path="/Upload.js" element={<ImageUpload />} />
        <Route path="/WeatherApp.js" element={<WeatherApp />} />
      </Routes>
    </div>
  );
}

export default App;

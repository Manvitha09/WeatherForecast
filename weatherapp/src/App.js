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

import React from 'react';

export const Navbar = () => {
  

  return(
<nav class="navbar navbar-expand-lg navbar-light bg-custom-navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="./Navbar">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse"  id="navbarNav">
          <ul class="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="./WeatherApp.js">Weather API</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="http://127.0.0.1:5000/">Image Processing</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  );
};
export default Navbar;

/*<form classname="d-flex" role="search">
        <input classname="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button classname="btn btn-outline-success" type="submit">Search</button> 
      </form>*/



import React from 'react';
import { IoIosArrowBack, IoMdMic, IoMdSettings } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/">
          <IoIosArrowBack size={30} color="#007bff" />
        </Link>
        <p className="navhead">CityWeather</p>
        <div className="nav-icons">
          <IoMdMic size={24} color="green" />
          <IoMdSettings size={24} color="red" />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

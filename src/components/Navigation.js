import React from 'react';
import { IoIosArrowBack, IoMdMic, IoMdSettings } from 'react-icons/io';
import { Link } from 'react-router-dom';
import './Navigation.css'

function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/">
          <IoIosArrowBack size={30} color="white" />
        </Link>
        <p className="navhead">CityWeather</p>
        <div className="nav-icons">
          <IoMdMic size={24} color="white" />
          <IoMdSettings size={24} color="white" />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

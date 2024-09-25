// Sidebar.tsx
import React from "react";
import "../styles/sidebar.css";
import RampChart from "./Rampchart";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar-container">
      <div className="weather-section">
        <div className="weather-header">
          <h3>Melbourne</h3> <p>Tue 16th 3:46 PM</p>
        </div>
        <div className="temperature">
          <h1>32°</h1>
          <div className="weather-icon">
            <i className="bi bi-cloud-sun"></i>
          </div>
        </div>
        <div className="weather-details">
          <p>Humidity: 78%</p> <p>Chance of Rain: 34%</p> <p>Wind: 21 km/h</p>
          <p>Tomorrow: 30° ☀️</p>
        </div>
      </div>
      <div className="routes-section">
        <h4>Delayed Routes</h4>
        <div className="route-item">
          <span className="dot red"></span> Monash Fwy Out (13 km)
          <span className="time">45 min</span>
        </div>
        <div className="route-item">
          <span className="dot red"></span> Monash Fwy Out (15 km)
          <span className="time">28 min</span>
        </div>
        <div className="route-item">
          <span className="dot yellow"></span> Western Ring Rd (5 km)
          <span className="time">5 min</span>
        </div>
        <div className="route-item">
          <span className="dot yellow"></span> Eastern Fwy (15 km)
          <span className="time">25 min</span>
        </div>
      </div>
      <RampChart/>
    </div>
  );
};
export default Sidebar;

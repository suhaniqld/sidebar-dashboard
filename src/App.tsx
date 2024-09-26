import React from "react";
import RampChart from "./components/Rampchart";
import DelayedRoutes from "./components/DelayedRoutes";
import WeatherWidget from "./components/WeatherWidget";
import "./app.css";

const App: React.FC = () => {
  return (
    <div className="sidebar-container">
      <WeatherWidget />
      <DelayedRoutes />
      <RampChart />
    </div>
  );
};
export default App;

import React, { useState, useEffect } from "react";
import "./App.css";
const App = () => {
  const [cTime, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
  });
  return (
    <div className="App">
      <div className="clock-container">
        <h3 className="digitalClock">digital clock</h3>
        <div className="time-container">{cTime}</div>
      </div>
    </div>
  );
};

export default App;

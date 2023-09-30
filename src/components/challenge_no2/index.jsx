import React, { useState } from "react";
import "./style.css";
export default function Timer() {
  const [timer, setTimer] = useState(0);

  const startTimer = () => {
    window.myTimer = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const stopTimer = () => {
    window.myTimer = clearInterval(window.myTimer);
  };

  const resetTimer = () => {
    window.myTimer = clearInterval(window.myTimer);
    setTimer(0);
    window.myTimer = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  return (
    <>
      <div className="container">
        <h1>Timer</h1>
        <span>{Math.trunc(timer / 60)} mins </span>
        <span>{timer % 60} secs</span>
        <div>
          <button onClick={startTimer}>Start</button>
          <button onClick={stopTimer}>Stop</button>
          <button onClick={resetTimer}>Reset</button>
        </div>
      </div>
    </>
  );
}

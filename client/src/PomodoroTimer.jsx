// src/components/PomodoroTimer.jsx
import React, { useState, useEffect } from 'react';
import TimerSettingsContext from './TimeSettingsContext';

const PomodoroTimer = () => {
  const [isActive, setIsActive] = useState(false);
  const [seconds, setSeconds] = useState(25 * 60);
  const { workMinutes, breakMinutes } = React.useContext(TimerSettingsContext);

  useEffect(() => {
    setSeconds(workMinutes * 60); 
  }, [workMinutes]);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isActive, seconds]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="pomodoro-timer">
      <h2>Pomodoro Timer</h2>
      <div className="timer-display">
        {formatTime(seconds)}
      </div>
      <button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={() => setSeconds(workMinutes * 60)}>
        Reset
      </button>
    </div>
  );
};

export default PomodoroTimer;

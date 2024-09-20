// src/pages/Home.jsx
import React, { useState } from 'react';
import TodoList from './TodoList';
import PomodoroTimer from './PomodoroTimer';
import TimerSettings from './TimerSettings';
import TimerSettingsContext from './TimeSettingsContext';
import '../styles/Home.css';

const Home = () => {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);

  const settingsInfo = {
    workMinutes,
    setWorkMinutes,
    breakMinutes,
    setBreakMinutes
  };

  return (
    <TimerSettingsContext.Provider value={settingsInfo}>
      <div className='container'>
        <div className="gif-container">
          <img src="../img/imagecover.jpg" alt="Cover" />
        </div>
        <div className='plannerholder'>
          <div className='planner'>Schedule Planner</div>
        </div>
        <div className="clock-container">
          <div className="clock">
            <div className="screen">
              <h1 className='time'>12:00:00</h1>
              <div className="clock-date">Monday, August 12, 2024</div>
            </div>
          </div>
          <div className="insp">
            <div className='textt'>
              <h4>Inspiration</h4>
              <h3>Focus...</h3>
            </div>
            <div className='inspiration'>
              <h6>"Never forget why you started this."</h6>
              <div className="giff">
                <img src="../img/giphy.webp" alt="Inspiration" />
              </div>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="image-container">
            <img src="../img/image4.gif" alt="Main" />
          </div>
          <div className="todo-list-container">
            <TodoList />
          </div>
        </div>
        <div className='Pomodoro'>
        <PomodoroTimer />
        <TimerSettings />
        </div>
      </div>
    </TimerSettingsContext.Provider>
  );
};

export default Home;

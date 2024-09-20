// src/components/TimerSettings.jsx
import React, { useContext } from 'react';
import TimerSettingsContext from './TimeSettingsContext';
const TimerSettings = () => {
  const { workMinutes, setWorkMinutes, breakMinutes, setBreakMinutes } = useContext(TimerSettingsContext);

  return (
    <div className="timer-settings">
      <h2>Timer Settings</h2>
      <div>
        <label>
          Work Minutes:
          <input
            type="number"
            value={workMinutes}
            onChange={(e) => setWorkMinutes(parseInt(e.target.value, 10))}
            min="1"
          />
        </label>
      </div>
      <div>
        <label>
          Break Minutes:
          <input
            type="number"
            value={breakMinutes}
            onChange={(e) => setBreakMinutes(parseInt(e.target.value, 10))}
            min="1"
          />
        </label>
      </div>
    </div>
  );
};

export default TimerSettings;
 
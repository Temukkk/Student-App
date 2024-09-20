// src/components/TimerSettingsContext.jsx
import React from 'react';

const TimerSettingsContext = React.createContext({
  workMinutes: 25,
  setWorkMinutes: () => {},
  breakMinutes: 5,
  setBreakMinutes: () => {}
});

export default TimerSettingsContext;

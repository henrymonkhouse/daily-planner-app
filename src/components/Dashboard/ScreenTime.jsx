import React from 'react';
import '../../assets/ScreenTime.css';

const ScreenTime = ({ screenTimeState, onScreenTimeChange }) => {
  const handleInputChange = (key, value) => {
    onScreenTimeChange({
      ...screenTimeState,
      [key]: value === '' ? '' : Number(value), // Handle empty input
    });
  };

  return (
    <div className="card screen-time">
      <h3>Screen Time</h3>
      <div className="screen-time-inputs">
        <div className="input-group">
          <input
            type="number"
            min="0"
            max="24"
            value={screenTimeState.hours || ''} // No "0" for empty input
            onChange={(e) => handleInputChange('hours', e.target.value)}
          />
          <span className="unit">Hrs</span>
        </div>
        <div className="input-group">
          <input
            type="number"
            min="0"
            max="59"
            value={screenTimeState.minutes || ''} // No "0" for empty input
            onChange={(e) => handleInputChange('minutes', e.target.value)}
          />
          <span className="unit">Mins</span>
        </div>
      </div>
    </div>
  );
};

export default ScreenTime;

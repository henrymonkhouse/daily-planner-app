import React from 'react';
import '../../assets/Sleep.css';

const Sleep = ({ sleepState, onSleepChange }) => {
    const handleInputChange = (key, value) => {
        onSleepChange({
            ...sleepState,
            [key]: value === '' ? '' : Number(value), // Handle empty input
        });
    };

    return (
        <div className="card sleep-tracker">
            <h3>Sleep</h3>
            <div className="sleep-inputs">
                <div className="input-group">
                    <input
                        type="number"
                        min="0"
                        max="24"
                        value={sleepState.hours || ''} // No "0" for empty input
                        onChange={(e) => handleInputChange('hours', e.target.value)}
                        placeholder=" " // Optional: empty visual cue
                    />
                    <span className="unit">Hrs</span>
                </div>
                <div className="input-group">
                    <input
                        type="number"
                        min="0"
                        max="59"
                        value={sleepState.minutes || ''} // No "0" for empty input
                        onChange={(e) => handleInputChange('minutes', e.target.value)}
                        placeholder=" " // Optional: empty visual cue
                    />
                    <span className="unit">Mins</span>
                </div>
            </div>
        </div>
    );
};

export default Sleep;

import React from 'react';
import '../../assets/Steps.css';

const Steps = ({ stepsState, onStepsChange }) => {
    const handleInputChange = (value) => {
        onStepsChange(value === '' ? '' : Number(value)); // Handle empty input
    };

    return (
        <div className="card steps">
            <h3>Steps</h3>
            <div className="steps-input">
                <input
                    type="number"
                    value={stepsState || ''} // Ensure no "0" shows for empty input
                    onChange={(e) => handleInputChange(e.target.value)}
                    placeholder=" " // Optional: add an empty placeholder for better UX
                />
                <span>Steps</span>
            </div>
        </div>
    );
};

export default Steps;

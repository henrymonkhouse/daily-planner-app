import React from 'react';
import '../../assets/Stretching.css';

const Stretching = ({ stretchingState, onStretchingChange }) => {
    return (
        <div className="card stretching">
            <h3 className="stretching-title">Stretching</h3>
            <div className="stretching-circle-container">
                <div
                    className={`stretching-circle ${stretchingState ? 'filled' : ''}`}
                    onClick={() => {
                        console.log("Stretching toggled:", !stretchingState); // Debug log
                        onStretchingChange(!stretchingState);
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Stretching;

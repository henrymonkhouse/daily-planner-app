import React from 'react';
import '../../assets/ColdShower.css';

const ColdShower = ({ coldShowerState, onColdShowerChange }) => {
    return (
        <div className="card cold-shower">
            <h3 className="cold-shower-title">Cold Shower</h3>
            <div className="cold-shower-circle-container">
                <div
                    className={`cold-shower-circle ${coldShowerState ? 'filled' : ''}`}
                    onClick={() => onColdShowerChange(!coldShowerState)}
                ></div>
            </div>
        </div>
    );
};

export default ColdShower;

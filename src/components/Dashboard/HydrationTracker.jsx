import React from 'react';
import '../../assets/HydrationTracker.css';

const HydrationTracker = ({ hydrationState, onHydrationChange }) => {
    const toggleFirstCircle = () => {
        onHydrationChange({
            ...hydrationState,
            firstCircleFilled: !hydrationState.firstCircleFilled,
        });
    };

    const toggleSecondCircle = () => {
        onHydrationChange({
            ...hydrationState,
            secondCircleFilled: !hydrationState.secondCircleFilled,
        });
    };

    return (
        <div className="card hydration-tracker">
            <h3>Hydration</h3>
            <div className="hydration-circle-container">
                <div
                    className={`hydration-circle ${hydrationState.firstCircleFilled ? 'filled' : ''}`}
                    onClick={toggleFirstCircle}
                ></div>
                <div
                    className={`hydration-circle ${hydrationState.secondCircleFilled ? 'filled' : ''}`}
                    onClick={toggleSecondCircle}
                ></div>
            </div>
        </div>
    );
};

export default HydrationTracker;

import React from 'react';
import '../../assets/PlannerHeader.css';

const PlannerHeader = () => {
    const currentDate = new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    });

    return (
        <div className="planner-header">
            <p>{currentDate}</p>
            <div className="planner-buttons">
                <button className="planner-button">New</button>
                <button className="planner-button">Today</button>
            </div>
        </div>
    );
};

export default PlannerHeader;

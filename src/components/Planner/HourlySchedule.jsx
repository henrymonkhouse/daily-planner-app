import React from 'react';
import '../../assets/HourlySchedule.css';

const HourlySchedule = ({ schedule, onScheduleChange }) => {
    const morningHours = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM'];
    const afternoonHours = ['12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM'];

    return (
        <div className="hourly-schedule">
            <h2>Hourly Schedule</h2>
            <div className="hourly-schedule-columns">
                <div className="hourly-schedule-column">
                    <h3>Morning</h3>
                    {morningHours.map((hour) => (
                        <div key={hour} className="hour-row">
                            <span className="hour-label">{hour}</span>
                            <input
                                type="text"
                                value={schedule[hour] || ''}
                                onChange={(e) => onScheduleChange(hour, e.target.value)}
                                className="hour-input"
                            />
                        </div>
                    ))}
                </div>
                <div className="hourly-schedule-column">
                    <h3>Afternoon</h3>
                    {afternoonHours.map((hour) => (
                        <div key={hour} className="hour-row">
                            <span className="hour-label">{hour}</span>
                            <input
                                type="text"
                                value={schedule[hour] || ''}
                                onChange={(e) => onScheduleChange(hour, e.target.value)}
                                className="hour-input"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HourlySchedule;

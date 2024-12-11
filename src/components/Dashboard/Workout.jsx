import React from 'react';
import '../../assets/Workout.css';

const Workout = ({ workoutState, onWorkoutChange }) => {
    const handleRangeChange = (e) => {
        const newRating = parseFloat(e.target.value);
        onWorkoutChange({
            ...workoutState,
            rating: newRating,
        });
    };

    const toggleWorkout = () => {
        onWorkoutChange({
            ...workoutState,
            completed: !workoutState.completed,
        });
    };

    return (
        <div className="card workout">
            <h3>Workout</h3>

            {/* Slider */}
            <div className="slider-container">
                <input
                    type="range"
                    value={workoutState.rating}
                    onChange={handleRangeChange}
                    min="0"
                    max="10"
                    step="0.1"
                />
                <div className="slider-rating">
                    Rating: {workoutState.rating.toFixed(1)}
                </div>
            </div>

            {/* Circle toggle for workout completion */}
            <div
                className={`workout-circle ${workoutState.completed ? 'filled' : ''}`}
                onClick={toggleWorkout}
            ></div>
        </div>
    );
};

export default Workout;

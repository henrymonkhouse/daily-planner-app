import React from 'react';
import '../../assets/Mood.css';

const Mood = ({ moodState, onMoodChange }) => {
    const moods = [
        { emoji: '😢', label: 'Sad' },
        { emoji: '😐', label: 'Neutral' },
        { emoji: '😊', label: 'Happy' },
        { emoji: '😁', label: 'Elated' },
    ];

    return (
        <div className="card mood-card">
            <h3>Mood</h3>
            <div className="mood-options">
                {moods.map((mood, index) => (
                    <span
                        key={index}
                        className={`mood-option ${moodState === index ? 'selected' : ''}`}
                        onClick={() => onMoodChange(index)}
                        role="button"
                        aria-label={mood.label}
                    >
                        {mood.emoji}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Mood;

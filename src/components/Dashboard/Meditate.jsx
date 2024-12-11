import React from 'react';
import '../../assets/Meditate.css';

const Meditate = ({ meditationState, onMeditationChange }) => {
    return (
        <div className="card meditate">
            <h3>Meditate</h3>
            <div className="meditate-input">
                <input
                    type="number"
                    value={meditationState || ''} // No "0" for empty input
                    onChange={(e) =>
                        onMeditationChange(e.target.value === '' ? '' : Number(e.target.value))
                    }
                    placeholder=" " // Optional: empty visual cue
                />
                <span>Mins</span>
            </div>
        </div>
    );
};

export default Meditate;

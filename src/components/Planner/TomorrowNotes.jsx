import React from 'react';
import '../../assets/TomorrowNotes.css';

const TomorrowNotes = ({ tomorrowNotes, setTomorrowNotes, onSave }) => {
    const handleInputChange = (event) => {
        setTomorrowNotes(event.target.value); // Update state when typing
    };

    return (
        <div className="tomorrow-notes">
            <h2>What Can I Improve Tomorrow?</h2>
            <textarea
                placeholder="Write here..."
                value={tomorrowNotes}
                onChange={handleInputChange} // Handle input changes
            ></textarea>
            <button className="save-button" onClick={onSave}>
                Submit
            </button>
        </div>
    );
};

export default TomorrowNotes;

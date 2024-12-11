import React, { useState } from 'react';
import '../../assets/MorningNotes.css';

const MorningNotes = ({ notes, setNotes, onSave }) => {
    const [inputError, setInputError] = useState(false);

    const handleSave = () => {
        if (notes.trim() === '') {
            setInputError(true); // Show an error if the input is empty
        } else {
            onSave(notes); // Pass the note to the parent to add it as a task
            setNotes(''); // Clear the input field
            setInputError(false); // Reset the error
        }
    };

    return (
        <div className="morning-notes">
            <h2>Daily Tasks</h2>
            <textarea
                placeholder="What's on your mind?"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className={inputError ? 'error' : ''}
            ></textarea>
            {inputError && <p className="error-message">Please enter a note before saving.</p>}
            <button className="save-button" onClick={handleSave}>
                Save
            </button>
        </div>
    );
};

export default MorningNotes;

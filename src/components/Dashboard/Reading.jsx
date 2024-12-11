import React from 'react';
import '../../assets/Reading.css';

const Reading = ({ readingState, onReadingChange }) => {
    return (
        <div className="card reading">
            <h3>Read</h3>
            <div className="read-input">
                <input
                    type="number"
                    value={readingState || ''} // No "0" for empty input
                    onChange={(e) =>
                        onReadingChange(e.target.value === '' ? '' : Number(e.target.value))
                    }
                    placeholder=" " // Optional: empty visual cue
                />
                <span>Pages</span>
            </div>
        </div>
    );
};

export default Reading;

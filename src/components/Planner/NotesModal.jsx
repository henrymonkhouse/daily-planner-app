import React from 'react';
import '../../assets/NotesModal.css';

const NotesModal = ({ onClose, savedNotes }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    ×
                </button>
                <h2>Yesterday's Notes</h2>
                {savedNotes && savedNotes.length > 0 ? (
                    <ul>
                        {savedNotes.map((note, index) => (
                            <li key={index}>{note}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No notes available for yesterday.</p>
                )}
            </div>
        </div>
    );
};

export default NotesModal;

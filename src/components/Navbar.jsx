import React, { useState } from 'react';
import NotesModal from './Planner/NotesModal'; // Import the modal component
import '../assets/NotesModal.css';
import HLogo from '../assets/HLogo.png';
import '../assets/Navbar.css'

const Navbar = ({ onSubmit, savedNotes }) => {
    const currentDate = new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const [showModal, setShowModal] = useState(false);

    const handleShowNotes = () => {
        setShowModal(true);
    };

    return (
        <div className="navbar">
            <div className="navbar-left">
                <img src={HLogo} alt="Logo" className="navbar-logo" />
                <div className="navbar-text">
                    <h1 className="navbar-title">Dashboard</h1>
                    <p className="navbar-date">{currentDate}</p>
                </div>
            </div>
            <div className="navbar-right">
            <button className="yesterday-notes-button" onClick={handleShowNotes}>
                    <span className="text">Yesterday's Notes</span>
                    <span>Lock In</span>
                </button>
                <button className="submit-button" onClick={onSubmit}>
                    Submit
                </button>
            </div>
            {showModal && (
                <NotesModal
                    onClose={() => setShowModal(false)}
                    savedNotes={savedNotes}
                />
            )}
        </div>
    );
};

export default Navbar;

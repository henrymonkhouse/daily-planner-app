import React from 'react';
import '../assets/Modal.css';

const Modal = ({ score, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Your Daily Score</h2>
                <p>{score}%</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;

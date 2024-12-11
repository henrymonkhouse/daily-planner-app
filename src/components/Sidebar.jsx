import React from 'react';
import '../assets/Sidebar.css';

const Sidebar = ({ onNavigate }) => {
    return (
        <aside className="sidebar">
            <ul className="sidebar-menu">
                <li onClick={() => onNavigate('dashboard')}>Dashboard</li>
                <li onClick={() => onNavigate('planner')}>Planner</li>
                <li>Habits</li>
                <li>Analytics</li>
            </ul>
        </aside>
    );
};

export default Sidebar;

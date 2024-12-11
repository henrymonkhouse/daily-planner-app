import React from 'react';
import '../../assets/Skill.css';

const Skill = ({ skillState, onSkillChange }) => {
    return (
        <div className="card skill-tracker">
            <h3>Skill Worked On</h3>
            <div className="skill-circle-container">
                <div
                    className={`skill-circle ${skillState ? 'filled' : ''}`}
                    onClick={() => onSkillChange(!skillState)}
                ></div>
            </div>
        </div>
    );
};

export default Skill;

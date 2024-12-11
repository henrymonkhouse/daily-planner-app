import React from 'react';
import '../../assets/Nutrition.css';

const Nutrition = ({ nutritionState, onNutritionChange }) => {
    const toggleOption = (option) => {
        onNutritionChange({
            ...nutritionState,
            [option]: !nutritionState[option],
        });
    };

    return (
        <div className="card nutrition">
            <h3>Nutrition</h3>
            <div className="nutrition-container">
                {["macros", "micros", "noJunkFood", "lowSugar"].map((item) => (
                    <div className="nutrition-item" key={item}>
                        <div
                            className={`nutrition-circle ${nutritionState[item] ? 'filled' : ''}`}
                            onClick={() => toggleOption(item)}
                        ></div>
                        <span className="nutrition-label">
                            {item.charAt(0).toUpperCase() + item.slice(1).replace(/([A-Z])/g, " $1")}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Nutrition;

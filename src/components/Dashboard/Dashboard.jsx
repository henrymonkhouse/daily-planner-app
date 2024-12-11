import React from 'react';
import HydrationTracker from './HydrationTracker';
import Workout from './Workout';
import Sleep from './Sleep';
import Reading from './Reading';
import Meditate from './Meditate';
import Nutrition from './Nutrition';
import Steps from './Steps';
import ScreenTime from './ScreenTime';
import Skill from './Skill';
import Mood from './Mood';
import Stretching from './Stretching';
import ColdShower from './ColdShower';
import '../../assets/Dashboard.css';

const Dashboard = ({
    hydrationState,
    onHydrationChange,
    workoutState,
    onWorkoutChange,
    coldShowerState,
    onColdShowerChange,
    stretchingState,
    onStretchingChange,
    nutritionState,
    onNutritionChange,
    skillState,
    onSkillChange,
    sleepState,
    onSleepChange,
    stepsState,
    onStepsChange,
    screenTimeState,
    onScreenTimeChange,
    moodState,
    onMoodChange,
    readingState,
    onReadingChange,
    meditationState,
    onMeditationChange,
}) => {
    return (
        <div className="dashboard">
            <div className="dashboard-grid">
                <Sleep sleepState={sleepState} onSleepChange={onSleepChange} />
                <HydrationTracker
                    hydrationState={hydrationState}
                    onHydrationChange={onHydrationChange}
                />
                <Workout
                    workoutState={workoutState}
                    onWorkoutChange={onWorkoutChange}
                />
                <Reading readingState={readingState} onReadingChange={onReadingChange} />
                <Meditate
                    meditationState={meditationState}
                    onMeditationChange={onMeditationChange}
                />
                <Nutrition
                    nutritionState={nutritionState}
                    onNutritionChange={onNutritionChange}
                />
                <Steps stepsState={stepsState} onStepsChange={onStepsChange} />
                <ScreenTime
                    screenTimeState={screenTimeState}
                    onScreenTimeChange={onScreenTimeChange}
                />
                <Skill skillState={skillState} onSkillChange={onSkillChange} />
                <Mood moodState={moodState} onMoodChange={onMoodChange} />
                <Stretching
                    stretchingState={stretchingState}
                    onStretchingChange={onStretchingChange}
                />
                <ColdShower
                    coldShowerState={coldShowerState}
                    onColdShowerChange={onColdShowerChange}
                />
            </div>
        </div>
    );
};

export default Dashboard;

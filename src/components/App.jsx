import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard/Dashboard';
import Planner from './Planner/Planner';
import calculateScore from '../utils/ScoringLogic';
import Modal from './Modal';
import '../assets/App.css';

const App = () => {
    const [activePage, setActivePage] = useState('dashboard');
    const [showModal, setShowModal] = useState(false);
    const [score, setScore] = useState(0);

    // State for Dashboard components
    const [hydrationState, setHydrationState] = useState({
        firstCircleFilled: false,
        secondCircleFilled: false,
    });
    const [workoutState, setWorkoutState] = useState({
        completed: false,
        rating: 0.0,
    });
    const [coldShowerState, setColdShowerState] = useState(false);
    const [skillState, setSkillState] = useState(false);
    const [stretchingState, setStretchingState] = useState(false);
    const [nutritionState, setNutritionState] = useState({
        macros: false,
        micros: false,
        noJunkFood: false,
        lowSugar: false,
    });
    const [sleepState, setSleepState] = useState({ hours: 0, minutes: 0 });
    const [stepsState, setStepsState] = useState(0);
    const [screenTimeState, setScreenTimeState] = useState({ hours: 0, minutes: 0 });
    const [moodState, setMoodState] = useState(null);
    const [readingState, setReadingState] = useState(0);
    const [meditationState, setMeditationState] = useState(0);

    const handleSubmit = async () => {
        const dashboardData = {
            userId: 'henrymonkhouse', // Replace with dynamic user ID if applicable
            hydration: hydrationState,
            workout: workoutState,
            sleep: sleepState,
            nutrition: nutritionState,
            steps: stepsState,
            screenTime: screenTimeState,
            mood: moodState,
            reading: readingState,
            meditation: meditationState,
            skill: skillState,
        };

        try {
            const response = await fetch('http://localhost:5001/api/dashboard/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dashboardData),
            });

            if (response.ok) {
                console.log('Dashboard data saved successfully!');
            } else {
                console.error('Failed to save dashboard data');
            }
        } catch (error) {
            console.error('Error:', error.message);
        }

        const calculatedScore = calculateScore({
            hydrationState,
            workoutState,
            coldShowerState,
            skillState,
            stretchingState,
            nutritionState,
            sleepState,
            stepsState,
            screenTimeState,
            moodState,
            readingState,
            meditationState,
        });

        console.log('Calculated Score:', calculatedScore);
        setScore(calculatedScore);
        setShowModal(true);
    };

    return (
        <div className="app">
            <Navbar onSubmit={handleSubmit} />
            <Sidebar onNavigate={setActivePage} />
            <main className={`content ${activePage === 'planner' ? 'planner-layout' : ''}`}>
                {activePage === 'dashboard' && (
                    <Dashboard
                        hydrationState={hydrationState}
                        onHydrationChange={setHydrationState}
                        workoutState={workoutState}
                        onWorkoutChange={setWorkoutState}
                        coldShowerState={coldShowerState}
                        onColdShowerChange={setColdShowerState}
                        stretchingState={stretchingState}
                        onStretchingChange={setStretchingState}
                        nutritionState={nutritionState}
                        onNutritionChange={setNutritionState}
                        sleepState={sleepState}
                        onSleepChange={setSleepState}
                        stepsState={stepsState}
                        onStepsChange={setStepsState}
                        screenTimeState={screenTimeState}
                        onScreenTimeChange={setScreenTimeState}
                        moodState={moodState}
                        onMoodChange={setMoodState}
                        skillState={skillState}
                        onSkillChange={setSkillState}
                        readingState={readingState}
                        onReadingChange={setReadingState}
                        meditationState={meditationState}
                        onMeditationChange={setMeditationState}
                    />
                )}
                {activePage === 'planner' && <Planner />}
            </main>
            {showModal && (
                <Modal score={score} onClose={() => setShowModal(false)} />
            )}
        </div>
    );
};

export default App;

import React from "react";
import HydrationTracker from "./HydrationTracker.jsx";
import Workout from "./Workout.jsx";
import Sleep from "./Sleep.jsx";
import Reading from "./Reading.jsx";
import Meditate from "./Meditate.jsx";
import Nutrition from "./Nutrition.jsx";
import Steps from "./Steps.jsx";
import ScreenTime from "./ScreenTime.jsx";
import Skill from "./Skill.jsx";
import Mood from "./Mood.jsx";
import Stretching from "./Stretching.jsx";
import ColdShower from "./ColdShower.jsx";
import "../../assets/Dashboard.css";

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
        <Reading
          readingState={readingState}
          onReadingChange={onReadingChange}
        />
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

export const calculateScore = ({
  sleepState,
  workoutState,
  hydrationState,
  nutritionState,
  moodState,
  stretchingState,
  coldShowerState,
  stepsState,
  screenTimeState,
  readingState,
  meditationState,
  skillState,
}) => {
  let totalScore = 0;

  // Define weights
  const weights = {
    sleep: 20,
    workout: 15,
    hydration: 10,
    nutrition: 10,
    mood: 5,
    stretching: 5,
    coldShower: 5,
    steps: 10,
    screenTime: 10,
    reading: 5,
    meditation: 5,
    skill: 5,
  };

  // Sleep (20%)
  const sleepHours = sleepState.hours + sleepState.minutes / 60;
  const sleepScore = Math.min((sleepHours / 8) * weights.sleep, weights.sleep);
  totalScore += sleepScore;

  // Workout (15%)
  let workoutScore = 0;
  if (workoutState.completed) {
    if (workoutState.rating >= 8.5) {
      workoutScore = weights.workout;
    } else if (workoutState.rating >= 3) {
      workoutScore = (workoutState.rating / 8.5) * weights.workout;
    }
  }
  totalScore += workoutScore;

  // Hydration (10%)
  const hydrationScore =
    (hydrationState.firstCircleFilled ? 5 : 0) +
    (hydrationState.secondCircleFilled ? 5 : 0);
  totalScore += hydrationScore;

  // Nutrition (10%)
  let nutritionScore = 0;
  if (nutritionState.macros) nutritionScore += 2.5;
  if (nutritionState.micros) nutritionScore += 2.5;
  if (nutritionState.noJunkFood) nutritionScore += 2.5;
  if (nutritionState.lowSugar) nutritionScore += 2.5;
  nutritionScore = Math.min(nutritionScore, weights.nutrition);
  totalScore += nutritionScore;

  // Mood (5%)
  const moodScore = moodState ? weights.mood : 0;
  totalScore += moodScore;

  // Stretching (5%)
  const stretchingScore = stretchingState ? weights.stretching : 0;
  totalScore += stretchingScore;

  // Cold Shower (5%)
  const coldShowerScore = coldShowerState ? weights.coldShower : 0;
  totalScore += coldShowerScore;

  // Steps (10%)
  const stepGoal = 10000;
  const stepsScore = Math.min((stepsState / stepGoal) * weights.steps, weights.steps);
  totalScore += stepsScore;

  // Screen Time (10%)
  const screenTimeHours = screenTimeState.hours + screenTimeState.minutes / 60;
  let screenTimeScore = 0;
  if (screenTimeHours <= 3) {
    screenTimeScore = weights.screenTime;
  } else if (screenTimeHours <= 7) {
    screenTimeScore = ((7 - screenTimeHours) / 4) * weights.screenTime;
  }
  totalScore += Math.max(screenTimeScore, 0); // Ensure no negative scores

  // Reading (5%)
  const readingScore = Math.min((readingState / 10) * weights.reading, weights.reading);
  totalScore += readingScore;

  // Meditation (5%)
  const meditationScore = Math.min(
    (meditationState / 20) * weights.meditation,
    weights.meditation
  );
  totalScore += meditationScore;

  // Skill Worked On (5%)
  const skillScore = skillState ? weights.skill : 0;
  totalScore += skillScore;

  console.log('--- Debugging Scoring ---');
  console.log('Sleep Score:', sleepScore);
  console.log('Workout Score:', workoutScore);
  console.log('Hydration Score:', hydrationScore);
  console.log('Nutrition Score:', nutritionScore);
  console.log('Mood Score:', moodScore);
  console.log('Stretching Score:', stretchingScore);
  console.log('Cold Shower Score:', coldShowerScore);
  console.log('Steps Score:', stepsScore);
  console.log('Screen Time Score:', screenTimeScore);
  console.log('Reading Score:', readingScore);
  console.log('Meditation Score:', meditationScore);
  console.log('Skill Score:', skillScore);
  console.log('Total Score:', totalScore);

  return Math.round(totalScore); // Return as a whole number
};

export default calculateScore;

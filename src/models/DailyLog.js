const mongoose = require('mongoose');

const dailyLogSchema = new mongoose.Schema({
    date: { type: Date, required: true, unique: true }, // Ensure one entry per day
    sleep: { hours: Number, minutes: Number },
    hydration: { completed: Boolean },
    workout: { completed: Boolean },
    reading: { pages: Number },
    meditate: { minutes: Number },
    nutrition: {
        macros: Boolean,
        micros: Boolean,
        noJunkFood: Boolean,
    },
    steps: { type: Number },
    screenTime: { hours: Number, minutes: Number },
    skillWorkedOn: { completed: Boolean },
    mood: { type: String, enum: ['sad', 'ok', 'happy', 'elated'] },
    supplements: { completed: Boolean },
    coldShower: { completed: Boolean },
    notes: { type: String }, // For "Notes from Yesterday"
});

module.exports = mongoose.model('DailyLog', dailyLogSchema);

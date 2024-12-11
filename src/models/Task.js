const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    taskName: { type: String, required: true },
    isComplete: { type: Boolean, default: false },
});

module.exports = mongoose.model('Task', taskSchema);

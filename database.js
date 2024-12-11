const mongoose = require('mongoose');

// MongoDB connection string (local database)
const mongoURI = 'mongodb://127.0.0.1:27017/daily-planner-db';

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log('MongoDB connected successfully!');
});

db.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
});

module.exports = db;

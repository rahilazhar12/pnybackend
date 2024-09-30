const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/PNYDATABASE');
        console.log('Connected to MongoDB'.bgGreen);
    } catch (error) {
        console.error('Error connecting to MongoDB'.bgRed, error);
    }
};

module.exports = connectDB;

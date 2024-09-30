const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB'.bgGreen);
    } catch (error) {
        console.error('Error connecting to MongoDB'.bgRed, error);
    }
};

module.exports = connectDB;

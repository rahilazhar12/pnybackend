const express = require('express');
const cors = require('cors');
const colors = require('colors');
const dotenv = require('dotenv')
const Connection = require('./Db/Connection');
const categoryRoutes = require('./Routes/categoryRouter');
const instructorRoutes = require('./Routes/instructorRouter');
const courseRoutes = require('./Routes/courseRouter');


const app = express();
dotenv.config()

// Middleware to parse JSON
app.use(express.json());

// Configure CORS
app.use(cors());

// Use the  routes
app.use('/api/categories', categoryRoutes);
app.use('/api/instructors', instructorRoutes);
app.use('/api/courses', courseRoutes);


const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    Connection();
    console.log(`Server is Running at port ${PORT}`.bgYellow);
});

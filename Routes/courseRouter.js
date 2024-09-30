const express = require('express');
const { createCourse, getAllCourses } = require('../Controller/courseController');


const router = express.Router();

router.post('/create', createCourse);
router.get('/', getAllCourses);

module.exports = router;

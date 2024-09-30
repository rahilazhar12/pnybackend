const express = require('express');
const { createInstructor, getAllInstructors } = require('../Controller/instructorController');


const router = express.Router();

router.post('/create', createInstructor);
router.get('/', getAllInstructors);

module.exports = router;

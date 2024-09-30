const Instructor = require('../models/instructorModel');

// Create an Instructor
const createInstructor = async (req, res) => {
  try {
    const newInstructor = new Instructor(req.body);
    await newInstructor.save();
    res.status(201).json(newInstructor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get All Instructors
const getAllInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.status(200).json(instructors);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createInstructor,
  getAllInstructors
};

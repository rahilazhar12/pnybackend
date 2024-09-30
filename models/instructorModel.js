const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
  Instructor_id: { type: Number, required: true },
  name: { type: String, required: true },
  photo: { type: String },
  other_info: { type: String }
}, { timestamps: true });

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;

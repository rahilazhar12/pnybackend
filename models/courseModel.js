const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  course_Id: { type: Number, required: true },
  course_Name: { type: String, required: true },
  url_Slug: { type: String, required: true },
  featured_Option: { type: Boolean, default: false },
  course_Image: { type: String },
  video_Id: { type: Number },
  course_Category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }, // One-to-One Relationship
  Skill_Level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
  Short_Description: { type: String },
  Course_Description: { type: String },
  Instructor: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' }], // One-to-Many Relationship
  Monthly_Fee: { type: Number },
  Admission_Fee: { type: String },
  Duration_Months: { type: Number },
  Duration_Day: { type: Number },
  Meta_Title: { type: String },
  Meta_Description: { type: String },
  Brochure: { type: String },
  Status: { type: Boolean, default: true },
  View_On_Web: { type: Boolean, default: true },
  In_Sitemap: { type: Boolean, default: false },
  Page_Index: { type: Boolean, default: false },
  Custom_Canonical_Url: { type: String }
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;

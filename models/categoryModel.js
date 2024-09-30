const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  Category_Name: { type: String, required: true },
  url_Slug: { type: String, required: true },
  short_Description: { type: String },
  meta_Title: { type: String },
  meta_Description: { type: String },
  in_Sitemap: { type: Boolean, default: false },
  Index_Page_Option: { type: Boolean, default: false },
  Custom_Canonical_Url: { type: String },
  Category_Icons: { type: String }
}, { timestamps: true });

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

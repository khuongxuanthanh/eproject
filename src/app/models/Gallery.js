const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema;

const Gallery = new Schema({
  titel: { type: String, required: true },
  image: { type: String },
  slug: { type: String, slug: "titel", unique: true },
}, {
  timestamps: true,
});

mongoose.plugin(slug);
Gallery.plugin(mongooseDelete, { 
  deletedAt : true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('Gallery', Gallery);
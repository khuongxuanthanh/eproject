const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Schema = mongoose.Schema;

const Contact = new Schema({
  fullname: { type: String, required: true },
  email: { type: String },
  subject: { type: String },
  message: { type: String},
  slug: { type: String, slug: "fullname", unique: true },
}, {
  timestamps: true,
});

mongoose.plugin(slug);
Contact.plugin(mongooseDelete, { 
  deletedAt : true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('Contact', Contact);
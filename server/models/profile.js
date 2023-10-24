// models/Profile.js
const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User', 
  // },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  bio: {
    type: String,
    required: true,
    unique: true,
  },
  website: {
    type: String,
    required: true,
    unique: true,
  }
  
});

module.exports = mongoose.model('Profile', profileSchema);

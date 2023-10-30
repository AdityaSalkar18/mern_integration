// models/Notifi.js
const mongoose = require('mongoose');

const notifiSchema = new mongoose.Schema({

  
  sname: {
    type: String,
    required: true,
    
  },
  rname: {
    type: String,
    required: true,
    
  },
  msg: {
    type: String,
    
    
  },
  
  
});

module.exports = mongoose.model('Notification', notifiSchema);

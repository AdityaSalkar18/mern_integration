// models/Starup.js
const mongoose = require('mongoose');

const startupSchema = new mongoose.Schema({
  // suserName:{
  //   type: String,
  //   required: true,
  // }
  compname: {
    type: String,
    required: true,
  },
  eyear: { 
    type: Number, 
 },
 cno: { 
    type: String, 
 },
 add: {
    type: String,
    
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  
  
  web: {
    type: String,
    required: true,
    unique: true,
  },

  bio: {
    type: String,
    
  },
  pone: {
    type: String,
    
  },
  pnone: {
    type: String,
    
  },
  ptwo: {
    type: String,
    
  },
  pntwo: {
    type: String,
    
  },
  pthree: {
    type: String,
    
  },
  pnthree: {
    type: String,
    
  },
  btitle: {
    type: String,
    
  },
  bdesc: {
    type: String,
    
  },
  ps: {
    type: String,
    
  },
  tm: {
    type: String,
    
  },
  cp: {
    type: String,
    
  },
  sms: {
    type: String,
    
  },
  bm: {
    type: String,
    
  },
  mjc: {
    type: String,
    
  },
  cad: {
    type: String,
    
  },
  
  //Finance
  tp: { 
    type: String,
 },
 fdesc: {
    type: String,
    
  },
  rev: { 
    type: Number, 
 },
 expen: { 
    type: Number, 
 },
 net: { 
    type: Number, 
 },
  
});

module.exports = mongoose.model('Startup', startupSchema);

const mongoose = require('mongoose');

const todoschema = mongoose.Schema({
  id:Number,
  title:String,
  completed: Boolean
});


const todolist = module.exports = mongoose.model('todolist',todoschema);

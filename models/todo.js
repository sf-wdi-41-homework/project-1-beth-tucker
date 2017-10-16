// require mongoose
// set up shorthand Schema variable to stand in for mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// todo schema
var TodoSchema = new Schema({
  description: String,
  duedate: String,
  recurring: Boolean,
  username: String,
  isCompleted: Boolean,
  isDeleted: Boolean
});

// todo model
var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;

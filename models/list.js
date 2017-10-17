// require mongoose
// set up shorthand Schema variable to stand in for mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Todo = require('./todo');

// list schema
var ListSchema = new Schema({
  listName: String,
  userAccess:[ String ],
  username: String,
  email: String,
  password: String,
  userImage: String,
  // todos: [TodoSchema]
});

// user model
var List = mongoose.model('List', ListSchema);

module.exports = List;

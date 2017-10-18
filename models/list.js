// require mongoose
// set up shorthand Schema variable to stand in for mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Todo = require('./todo');

// list schema
var ListSchema = new Schema({
  listName: String,
  userAccess:[ String ],
});

// list model
var List = mongoose.model('List', ListSchema);

module.exports = List;

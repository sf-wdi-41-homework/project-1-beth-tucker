var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Todo = require('./todo');

var ListSchema = new Schema({
  listName: String,
  userAccess:[ String ],
});

var List = mongoose.model('List', ListSchema);

module.exports = List;

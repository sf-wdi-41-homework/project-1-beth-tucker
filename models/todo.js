var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var List = require('./list');

var TodoSchema = new Schema({
  description: String,
  duedate: String,
  recurring: Boolean,
  username: String,
  isCompleted: Boolean,
  isDeleted: Boolean,
  _list: {type: Schema.Types.ObjectId, ref: 'List'}
});

var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;

// require mongoose
// set up shorthand Schema variable to stand in for mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var List = require('./list');

// todo schema
var TodoSchema = new Schema({
  description: String,
  duedate: String,
  recurring: Boolean,
  username: String,
  isCompleted: Boolean,
  isDeleted: Boolean,
  _list: {type: Schema.Types.ObjectId, ref: 'List'}
});

// todo model
var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;

/*

to find all todos via list id:
db.Todo.find({_list: listID}, function(err, succ){
  res.json(succ)
})

*/

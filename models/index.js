// require mongoose and connect to database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jibe');

var User = require('./user');
var Todo = require('./todo');
var List = require('./list');

module.exports = {
  User: User,
  Todo: Todo,
  List: List
};

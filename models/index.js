// require mongoose and connect to database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/jibe_test');

var User = require('./user');
var Todo = require('./todo');


module.exports = {
  User: User,
  Todo: Todo,

};

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/jibe', {useMongoClient: true});

var User = require('./user');
var Todo = require('./todo');
var List = require('./list');

module.exports = {
  User: User,
  Todo: Todo,
  List: List
};

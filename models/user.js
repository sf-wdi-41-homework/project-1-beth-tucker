// require mongoose
// set up shorthand Schema variable to stand in for mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// album schema
var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  password: String,
  userImage: String
});

// user model
var User = mongoose.model('User', UserSchema);

module.exports = User;

var db = require('./models');

var newTodos = [{
  description: "ignore JDK Java tool thingy",
  duedate: "WHEN YOU GET around to it",
  recurring: true,
  username: "tuckerb",
  isCompleted: false,
  isDeleted: false
}]

db.Todo.remove({}, function(err, succ){
  if(err){return console.log("ERR", err)}
  console.log("Removed everything");
  db.Todo.create(newTodos, function(err, succ){
    if(err){return console.log("ERR", err)}
    console.log(succ);
    process.exit(0);
  });
});

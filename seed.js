var db = require('./models');

var newLists = [{
  listName: "List 1",
},
{
  listName: "List 2"
},
];

var newTodos = [{
  description: "ignore JDK Java tool thingy",
  duedate: "WHEN YOU GET around to it",
  recurring: true,
  username: "tuckerb",
  isCompleted: false,
  isDeleted: false,
  // _list: {}
}, {
  description: "Put out fires in Santa Rosa",
  duedate: "As soon as possible",
  recurring: false,
  username: "tuckerb",
  isCompleted: false,
  isDeleted: false,
  // _list: {}
}];

db.Todo.remove({}, function(err, succ){
  if(err){return console.log("ERR", err)}
  console.log("Removed everything");
  db.Todo.create(newTodos, function(err, succ){
    if(err){return console.log("ERR", err)}
    console.log(succ);
    process.exit(0);
  });
});

var db = require('./models');

var newLists = [{
  listName: "Jibe Intro",
},
{
  listName: "Personal"
},
{
  listName: "Professional"
}
];

var newTodos = [{
  description: "Learn about Jibe",
  duedate: "",
  recurring: false,
  username: "",
  isCompleted: false,
  isDeleted: false,
}, {
  description: "Make a new list",
  duedate: "",
  recurring: false,
  username: "",
  isCompleted: false,
  isDeleted: false,
},
{
  description: "Delete Jibe list",
  duedate: "",
  recurring: false,
  username: "",
  isCompleted: false,
  isDeleted: false,
}
];

  db.List.remove({}, function(err, succ){
    if(err){return console.log("ERR", err)}
    console.log("REMOVED ALL LISTS.");
    db.List.create(newLists, function(err, createdLists){
      if(err){return console.log("ERR", err)}
      // we have lists.

      createdLists.forEach(function(list, index){
        newTodos[index]._list = list._id
        db.Todo.create(newTodos[index], function(err, succ){
          console.log("created new to dos");
          if(err){return console.log("ERR", err)}
          console.log(succ);
          process.exit(0);
        });
      })
      db.Todo.remove({}, function(err, succ){
        if(err){return console.log("ERR", err)}
        console.log("Removed all todos");
        db.Todo.create(newTodos, function(err, succ){
          if(err){return console.log("ERR", err)}
          console.log(succ);
          process.exit(0);
        });
      });

    });
  });

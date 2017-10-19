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
}, {
  description: "Put out fires in Santa Rosa",
  duedate: "As soon as possible",
  recurring: false,
  username: "tuckerb",
  isCompleted: false,
  isDeleted: false,
}];

  db.List.remove({}, function(err, succ){
    if(err){return console.log("ERR", err)}
    console.log("REMOVED ALL LISTS.");
    db.List.create(newLists, function(err, createdLists){
      if(err){return console.log("ERR", err)}
      // we have lists.

      createdLists.forEach(function(list, index){
        newTodos[index]._list = list._id
        db.Todo.create(newTodos[index], function(err, succ){
          if(err){return console.log("ERR", err)}
          console.log(succ);
          process.exit(0);
        });
      });


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

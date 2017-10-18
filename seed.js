var db = require('./models');

var newLists = [{
  listName: "List 1",
},
{
  listName: "List 2"
},
];

var newTodos = [{
  description: "Walk the dog to Bernal Heights",
  duedate: "WHEN YOU GET around to it",
  recurring: true,
  username: "bwitten",
  isCompleted: false,
  isDeleted: false,
  // _list: {}
}, {
  description: "Look for rocks at Land's End",
  duedate: "As soon as possible",
  recurring: false,
  username: "bwitten",
  isCompleted: false,
  isDeleted: false,
  // _list: {}
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
          // process.exit(0);
        });
      })
      // db.Todo.remove({}, function(err, succ){
      //   if(err){return console.log("ERR", err)}
      //   console.log("Removed everything");
      //   db.Todo.create(newTodos, function(err, succ){
      //     if(err){return console.log("ERR", err)}
      //     console.log(succ);
      //     process.exit(0);
      //   });
      // });

    })
  })

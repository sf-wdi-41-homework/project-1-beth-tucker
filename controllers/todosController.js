  var db = require('../models');

  // GET /api/todos
  function index(req, res) {
    // access database and pull out all todos
    db.Todo.find({}, function(err, allTodos) {
      res.json(allTodos);
    });
  }

  // POST /api/todos
  function create(req, res) {
    // create an list based on request body and send it back as JSON
    var inputTodo = req.body;
    //test input being submitted to db
    console.log(inputTodo);

    db.Todo.create(inputTodo, function(err, todo){
      if (err) {console.log('error', err);}
      console.log(todo);
      res.json(todo);
    });
  }

  // GET /api/todos/:todoId
  function show(req, res) {
    // find one todo by id and send it back as JSON
  }

  // DELETE /api/todos/:todoId
  function destroy(req, res) {
    // find one todo by id, delete it, and send it back as JSON
  }

  // PUT or PATCH /api/todos/:todoId
  function update(req, res) {
    // find one todo by id, update it based on request body,
    // and send it back as JSON
  }

  module.exports = {
    index: index,
    create: create,
    show: show,
    destroy: destroy,
    update: update
  };

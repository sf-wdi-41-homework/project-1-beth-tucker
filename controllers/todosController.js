var db = require('../models');

// GET /api/todos
function index(req, res) {
  // access database and pull out all albums
  db.Album.find({}, function(err, allAlbums) {
    res.json(allTodos);
  });
}

// POST /api/todos
function create(req, res) {
  // create an list based on request body and send it back as JSON
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

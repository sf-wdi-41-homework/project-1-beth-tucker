var db = require('../models');

// GET /api/lists
function index(req, res) {
  // access database and pull out all lists
  db.Album.find({}, function(err, allAlbums) {
    res.json(allLists);
  });
}

// POST /api/lists
function create(req, res) {
  // create an list based on request body and send it back as JSON
}

// GET /api/lists/:listId
function show(req, res) {
  // find one list by id and send it back as JSON
}

// DELETE /api/lists/:listId
function destroy(req, res) {
  // find one list by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/lists/:listId
function update(req, res) {
  // find one list by id, update it based on request body,
  // and send it back as JSON
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};

var db = require('../models');

// GET /api/users
function index(req, res) {
  // access database and pull out all users
  db.Album.find({}, function(err, allAlbums) {
    res.json(allUsers);
  });
}

// POST /api/users
function create(req, res) {
  // create an user based on request body and send it back as JSON
}

// GET /api/users/:userId
function show(req, res) {
  // find one user by id and send it back as JSON
}

// DELETE /api/users/:userId
function destroy(req, res) {
  // find one user by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/users/:userId
function update(req, res) {
  // find one user by id, update it based on request body,
  // and send it back as JSON
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};

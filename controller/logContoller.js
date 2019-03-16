const db = require("../models");

module.exports= {
// Find one note
find: function(req, res) {
    db.Log.find({ _userId: req.params.id }).then(function(dbLog) {
      res.json(dbLog);
    });
  },
  // Create a new note
  create: function(req, res) {
    db.Log.create(req.body).then(function(dbLog) {
      res.json(dbLog);
    });
  },
  // Delete a note with a given id
  delete: function(req, res) {
    db.Log.remove({ _id: req.params.id }).then(function(dbLog) {
      res.json(dbLog);
    });
  }



}
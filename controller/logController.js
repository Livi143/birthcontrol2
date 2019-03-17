const db = require("../models");


module.exports= {
// Find one note
find: function(req, res) {
  console.log(req.user)
    db.Log.find({ _userId: req.params.id }).then(function(dbLog) {
      res.json(dbLog);
    });
  },
  // Create a new log
  create: function(req, res) {
    // db.Log.create(req.body).then(function(dbLog) {
    //   res.json(dbLog);
    // });
    console.log(req.body);
    res.json(req.body)
  },
  // Delete a note with a given id
  delete: function(req, res) {
    db.Log.remove({ _id: req.params.id }).then(function(dbLog) {
      res.json(dbLog);
    });
  }



}
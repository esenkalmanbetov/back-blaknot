const Subject = require("../models/subject.model.js");

// Create and Save a new Subject
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Subject
  const subject = new Subject({
    Title: req.body.Title,
    Description: req.body.Description,
    CreatedDate: new Date()
  });

  // Save Subject in the database
  Subject.create(subject, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Subject."
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Subject.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving subjects."
      });
    else res.send(data);
  });
};

exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  const subject = new Subject({
    Title: req.body.Title,
    Description: req.body.Description,
    UpdatedDate: new Date()
  });

  Subject.updateById(
    req.params.subjectId,
    subject,
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Subject with id ${req.params.subjectId}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Subject with id " + req.params.subjectId
          });
        }
      } else res.send(data);
    }
  );
};

exports.delete = (req, res) => {
  Subject.remove(req.params.subjectId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Subject with id ${req.params.subjectId}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Subject with id " + req.params.subjectId
        });
      }
    } else res.send(data);
  });
};

exports.search = (req, res) => {
  Subject.search(req.params.searchText, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving subjects."
      });
    else res.send(data);
  });
};
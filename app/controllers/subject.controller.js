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
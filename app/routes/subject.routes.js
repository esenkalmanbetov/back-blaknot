module.exports = app => {
  const subjects = require("../controllers/subject.controller.js");

  // Create a new Subject
  app.post("/subjects", subjects.create);

  // Retrieve all Subjects
  app.get("/subjects", subjects.findAll);

  // Update a Subject with subjectId
  app.put("/subjects/:subjectId", subjects.update);

  // Delete a Subject with subjectId
  app.delete("/subjects/:subjectId", subjects.delete);

}
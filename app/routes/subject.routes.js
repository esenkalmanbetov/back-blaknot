module.exports = app => {
  const subjects = require("../controllers/subject.controller.js");

  // Create a new Subject
  app.post("/subjects", subjects.create);

  // Retrieve all Subjects
  app.get("/subjects", subjects.findAll);
  
}
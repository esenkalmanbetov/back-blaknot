module.exports = app => {
  const subjects = require("../controllers/subject.controller.js");

  // Create a new Customer
  app.post("/subjects", subjects.create);
  
}
const sql = require("./db.js");

// constructor
const Subject = function(subject) {
  this.Title = subject.Title
  this.Description = subject.Description
  this.CreatedDate = subject.CreatedDate
  this.UpdatedDate = subject.UpdatedDate
};

Subject.create = (newSubject, result) => {
  sql.query("INSERT INTO subjects SET ?", newSubject, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created subject: ", { id: res.insertId, ...newSubject });

    sql.query("SELECT * FROM subjects", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null)
        return
      }
      result(null, res)
    })
    
  });
};

module.exports = Subject;
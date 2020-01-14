const sql = require("./db.js");

// constructor
const Subject = function (subject) {
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

Subject.getAll = result => {
  sql.query("SELECT * FROM subjects", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("subjects: ", res);
    result(null, res);
  });
};

Subject.updateById = (id, subject, result) => {
  sql.query(
    "UPDATE subjects SET Title = ?, Description = ?, UpdatedDate = ? WHERE id = ?",
    [subject.Title, subject.Description, subject.UpdatedDate, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Subject with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated subject: ", { id: id, ...subject });

      sql.query("SELECT * FROM subjects", (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null)
          return
        }
        result(null, res)
      })
    }
  );
};

Subject.remove = (id, result) => {
  sql.query("DELETE FROM subjects WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Subject with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted subject with id: ", id);
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
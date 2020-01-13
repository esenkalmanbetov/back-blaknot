const mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'admin',
  password: 'admin',
  database: 'blaknotdb'
});

// connect to the MySQL server
connection.connect(function (err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  let createSubjects = `CREATE TABLE IF NOT EXISTS subjects (
    id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    Title varchar(255) NOT NULL,
    Description varchar(255) NOT NULL,
    CreatedDate datetime,
    UpdatedDate datetime
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8`;
 
  connection.query(createSubjects, function(err, results, fields) {
    if (err) {
      console.log(err.message);
    }
  });
 
  connection.end(function(err) {
    if (err) {
      return console.log(err.message);
    }
  });
});
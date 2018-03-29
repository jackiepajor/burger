// Dependencies
var mysql = require("mysql");

// Create MySQL connection
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db",
    port: 8889
  });


// Initiate connection
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: ".red + err.stack);
      return;
    }
    console.log("connected as id: ".green + connection.threadId);
  });

  // Export connection to be used by ORM
  module.exports = connection;
// Dependencies
var connection = require("../config/connection.js");

// Helper functions for SQL syntax
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}

// Define ORM
var orm = {
  // selectAll()
  // return all items from burgers table
  selectAll: function(burgerTableInput, cb) {
    var queryString = "SELECT * FROM " + burgerTableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  // insertOne()
  // add a new burger to the list
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " ( ";
    queryString += cols.toString();
    queryString += " ( ";
    queryString += "VALUES ( ";
    queryString += printQuestionMarks(vals.length);
    queryString += " ) ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  // updateOne()
  // update the status of an existing burger
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += "SET ";
    queryString += objToSql(objColVals);
    queryString += "WHERE ";
    queryString += condition;

    console.log(queryString);

    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

// Export ORM
module.exports = orm;

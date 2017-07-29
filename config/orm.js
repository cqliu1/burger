// Dependencies
// =============================================================
var connection = require("./connection.js");

// ORM
// =============================================================

var tableName = "burgers";

var orm = {

  selectAll: function(callback) {
    var s = "SELECT * FROM " + tableName;

    connection.query(s, function(err, result) {

      callback(result);

    });
  },

  insertOne: function(burger, callback) {
    var s = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";
    todo.complete = todo.complete || 0;
    connection.query(s, [
      burger.burger_name, burger.devoured
    ], function(err, result) {

      callback(result);

    });
  },

  updateOne: function(burger, callback) {
    var s = "UPDATE " + tableName + " SET devoured=? WHERE id=?";

    connection.query(s, [
      burger.devoured, burger.id
    ], function(err, result) {

      callback(result);

    });
  }

};

module.exports = orm;
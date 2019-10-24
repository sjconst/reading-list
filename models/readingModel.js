// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var readingModel = {
  all: cb => {
    orm.all("reading", function(res) {
      cb(res);
    });
  }, 
  selectAllWhere: (col, val, cb) => {
    orm.selectAllWhere("reading", col, val, function(res) {
      cb(res);
    });
  },
  insertOne: (col, val) => {
    orm.update("reading", col, val);
  },
  updateOne: function(col, val, condition) {
    orm.delete("reading", col, val, condition);
  }
};

// Export the database functions for the controller
module.exports = readingModel;
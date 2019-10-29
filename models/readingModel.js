// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var readingModel = {
  all: cb => {
    orm.all("reading", res => cb(res));
  }, 
  insert: (col, val, cb) => {
    orm.insert("reading", col, val, res => cb(res));
  },
  update: (col, val, col2, col2Val, cb) => {
    orm.update("reading", col, val, col2, col2Val, res => cb(res));
  },
  delete: (col, val, cb) => {
    orm.delete("reading", col, val, res => cb(res))
  }
};

// Export the database functions for the controller
module.exports = readingModel;
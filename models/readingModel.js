// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var readingModel = {
  all: cb => {
    orm.all("reading", res => cb(res));
  }, 
  insertOne: (col, val, cb) => {
    orm.insertOne("reading", col, val, res => cb(res));
  },
  updateOne: (col, val, condition, cb) => {
    orm.updateOne("reading", col, val, condition, res => cb(res));
  },
  delete: (col, val, cb) => {
    orm.delete("reading", col, val, res => cb(res))
  }
};

// Export the database functions for the controller
module.exports = readingModel;
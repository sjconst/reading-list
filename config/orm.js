// Import MySQL connection.
const connection = require("../config/connection.js");
let SQL = require('sql-template-strings');
//SQL queries
let orm = {
    selectAllWhere: (table, col, val, cb) => {
      let queryString = `SELECT * FROM ${table} WHERE ${col}=${val}`;  
      connection.query(queryString, (err, result) => {
        if (err) throw err;
        return cb(result);
      });
    },
    all: (table, cb) => {
        var queryString = `SELECT * FROM ${table}`;        
        connection.query(queryString, (err, result) => {
            if(err) throw err;
            return cb(result);
        })
    },
    insertOne: (table, col, val) => {
        let queryString = `INSERT INTO ${table} (${col} ) VALUES (${val})`;      
        connection.query(queryString, (err) => {
            if(err) throw err;
            console.log("Successfully added to table.");
        })
    },
    updateOne: (table, col, val, condition) => {
        let queryString = `UPDATE ${table} SET ${col}=${val} WHERE ${condition}`; 
        connection.query(queryString, err => {
            if(err) throw err;
            console.log("Record updated.")
        })
    },
    delete: (table, col, val) => {
        let queryString = `DELETE FROM ${table} WHERE ${col}=${val}`;
        connection.query(queryString, err => {
            if(err) throw err;
            console.log("Record deleted.")
        })
    }
  };
// Export the orm object for the model.
module.exports = orm;
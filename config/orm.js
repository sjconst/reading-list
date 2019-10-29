// Import MySQL connection.
const connection = require("../config/connection.js");
let SQL = require('sql-template-strings');
//SQL queries
let orm = {
    all: (table, cb) => {
        var queryString = `SELECT * FROM ${table}`;        
        connection.query(queryString, (err, result) => {
            if(err) throw err;
            return cb(result);
        })
    },
    insertOne: (table, col, val, cb) => {
        let queryString = `INSERT INTO ${table} (${col} ) VALUES (${val})`;      
        connection.query(queryString, (err, result) => {
            if(err) throw err;
            console.log("Successfully added to table.");
            return cb(result);
        })
    },
    updateOne: (table, col, val, condition, cb) => {
        let queryString = `UPDATE ${table} SET ${col}=${val} WHERE ${condition}`; 
        connection.query(queryString, (err, result) => {
            if(err) throw err;
            console.log("Record updated.");
            return cb(result);
        })
    },
    delete: (table, col, val, cb) => {
        let queryString = `DELETE FROM ${table} WHERE ${col}=${val}`;
        connection.query(queryString, (err, result) => {
            if(err) throw err;
            console.log("Record deleted.");
            return cb(result);
        })
    }
  };
// Export the orm object for the model.
module.exports = orm;
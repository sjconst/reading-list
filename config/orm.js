// Import MySQL connection.
const connection = require("../config/connection.js");
//Helper function
let questionMarks = val => {
    let string = ""
    for(var i = 0; i < val.length; i++){
        string += "?";
        if( i < val.length - 1){
            string += ","
        }
    }
    return string;
}
//SQL queries
let orm = {
    all: (table, cb) => {
        var queryString = "SELECT * FROM ??";        
        connection.query(queryString, table, (err, result) => {
            if(err) throw err;
            return cb(result);
        })
    },
    insert: (table, col, val, cb) => {    
        let queryString = `INSERT INTO ${table} (${col}) VALUES (${questionMarks(val)})`;          
        connection.query(queryString, val, (err, result) => {
            if(err) throw err;
            console.log("Successfully added to table.");
            return cb(result);
        })
    },
    update: (table, col, val, col2, col2Val, cb) => {
        let queryString = `UPDATE ${table} SET ${col} = ? WHERE ${col2} = ?`; 
        let params = [val, col2Val];      
        connection.query(queryString, params, (err, result) => {
            if(err) throw err;
            console.log("Record updated.");
            return cb(result);
        })
    },
    delete: (table, col, val, cb) => {
        let queryString = "DELETE FROM ?? WHERE ?? = ?";
        let params = [table, col, val];
        connection.query(queryString, params, (err, result) => {
            if(err) throw err;
            console.log("Record deleted.");
            return cb(result);
        })
    }
  };
// Export the orm object for the model.
module.exports = orm;
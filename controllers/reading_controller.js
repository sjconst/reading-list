const express = require("express");
const router = express.Router();
const readingModel = require("../models/readingModel");
//Create routes
router.get("/", (req, res) => {
    readingModel.all(data => {
        let books = data;
        res.render("index", {books})
    })   
});
router.put("/api/books/:id", (req, res) => {   
    let col = `is_read`;
    let valStr = req.body.read;
    let val = (/true/i).test(valStr);
    let col2 = "bookID";
    let col2Val = req.params.id;   
    readingModel.update(col, val, col2, col2Val, result => {
        if(result.changedRows === 0){
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
router.post("/api/books", (req, res) => {
    readingModel.insert([
        "title", "authorFirstName", "authorLastName"
    ], [
        `${req.body.title}`, `${req.body.firstName}`, `${req.body.lastName}`
    ], result => {
        res.json({
            id: result.bookID
        });    
    })
});
router.delete("/api/books/:id", (req, res) => {
    let col = `bookID`;
    let val = req.params.id;      
    readingModel.delete(col, val, result => {
        if(result.affectRows === 0){
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();    
        } else {
            res.status(200).end();
        }
    });
});
//Export
module.exports = router;
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
    let condition = `bookID = ${req.params.id}`;    
    let col = `is_read`;
    let val = req.body.read;
    readingModel.updateOne(col, val, condition);
});
router.post("/api/books", (req, res) => {
    readingModel.insertOne([
        "title", "authorFirstName", "authorLastName"
    ], [
        `"${req.body.title}"`, `"${req.body.firstName}"`, `"${req.body.lastName}"`
    ], result => {
        res.json({id: result.bookID});    
    })
});
router.delete("/api/books/:id", (req, res) => {
    let col = `bookID`;
    let val = req.params.id;  
    readingModel.delete(col, val);
});
//Export
module.exports = router;
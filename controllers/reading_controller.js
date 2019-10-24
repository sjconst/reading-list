const express = require("express");
const router = express.Router();
const readingModel = require("../models/readingModel");
//Create routes
router.get("/", (req, res) => {
    readingModel.all(data => {
        let books = data;
        console.log(books);
        res.render("index", {books})
    })   
});
router.put("api/books/:id", req => {
    let condition = `id = ${req.params.id}`;
    let col = `is_read`;
    let val = req.body;
    readingModel.updateOne(col, val, condition);
})

//Export
module.exports = router;
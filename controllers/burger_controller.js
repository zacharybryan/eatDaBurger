const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res) {
    burger.findAll().then(function(data){
        console.log(data);
        res.render("index", {burgers:data});
    });
});

router.post("/api/burgers", function(req, res){
    burger.create(req.body).then(function(data){
        res.json(data);
    });
});


module.exports = router;
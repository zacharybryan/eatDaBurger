const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function(req, res) {
    burger.findAll(function(burgerData) {
        res.render("index", { burger_data: burgerData});
    });
});

router.post("/burgers/create", function(req, res){
    burger.create(req.body.name).then(function(data){
        res.json(data);
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    burger.destroy(req.params.id).then(function(data){
        res.send(200).end();
    });
});

router.put("/api/burgers/:id", function(req, res) {
    let devoured = req.body.devoured;
    burger.update(req.params.id, req.body.devoured).then(function(data){
        res.status(200).end();
    })
});

module.exports = router;
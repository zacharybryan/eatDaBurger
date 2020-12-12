const express = require("express");
const burger = require("../models/burger.js");

const router = express.Router();

router.get("/", function (req, res) {
    burger.findAll().then(function (burgerData) {
        console.log("Hit Controller")
        res.render("index", { burger_data: burgerData });
    });

    // test for slash route 

});

// router.post("/burgers/create", function (req, res) {
//     burger.create(req.body.name).then(function (data) {
//         console.log("Hit Create")
//         res.json(data);
//     });
// });

router.post("/burgers/create", function (req, res) {
    // takes the request object using it as input for burger.addBurger
    burger.create(req.body.name).then (function (result) {
        // wrapper for orm.js that using MySQL insert callback will return a log to console,
        // render back to index with handle
        console.log(result);
        res.redirect("/");
    }).catch(function (err){
    console.log(err)});
});

router.delete("/api/burgers/:id", function (req, res) {
    burger.destroy(req.params.id).then(function (data) {
        res.send(200).end();
    });
});

router.put("/api/burgers/:id", function (req, res) {
    let devoured = req.body.devoured;
    burger.update(req.params.id, req.body.devoured).then(function (data) {
        res.status(200).end();
    })
});

module.exports = router;
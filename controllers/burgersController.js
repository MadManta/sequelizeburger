var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.get("/api/all", function(req, res) {
    burger.all(function(data) {
        res.json(data);
    });
});

router.post("/api/burgers", function(req, res) {
    console.log(req.body);
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        console.log(req.body);
        res.json({ id: result.insertId });
        res.end();
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({devoured: 1}, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/", function(req, res) {
    burger.delete(function(data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
  

module.exports = router;
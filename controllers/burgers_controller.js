// Dependencies & Imports
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// Import model
var burger = require("../models/burger.js");

// Express GET Route
router.get('/', function(req, res) {
    burger.selectAll(function(data) {
        // Handlebars Object
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        // Render index.handlebars file (homepage)
        res.render('index', hbsObject);
    });
});

// Express POST Route
router.post('/burgers/:id', function(req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], 
    [req.body.burger_name, req.body.devoured],
    function() {
        // Redirect user back to homepage
        res.redirect("/");
    });
});

// Express PUT Route
router.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    },
    condition, function() {
        // Redirect user back to homepage
        res.redirect("/");
    });
});

// Express DELETE Route
router.delete("/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function() {
        // Redirect user back to homepage
        res.redirect("/");
    });
});


// Export router
module.exports = router;

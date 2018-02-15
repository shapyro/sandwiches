var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burgers = require("../models/burgers.js");

//route the burgers
router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

module.exports = router;
var express = require("express");
var router = express.Router();
var Class = require("../models/class");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/viewClasses", function (req, res, next) {
  Class.find().exec(function (error, results) {
    if (error) {
      return next(error);
    }
  });
});

router.get("/viewMaterial", function (req, res, next) {
  material.find().exec(function (error, results) {
    if (error) {
      return next(error);
    }
  });
});

module.exports = router;

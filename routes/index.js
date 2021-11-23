var express = require("express");
var app = require("../app");
var router = express.Router();
var Student = require("../models/student");

/* GET home page. */
router.get("/", function (req, res, next) {});

router.post("/StudentDashboard", function (req, res, next) {
  Student.find({ rollno: req.body.rollNo }).exec(function (error, results) {
    if (error) {
      return next(error);
    }
    console.log(results);
    module.exports.userId = results[0];
    res.redirect("/students");
  });
});

router.get("/teachers", function (req, res, next) {
  res.redirect("/students");
});

module.exports = router;

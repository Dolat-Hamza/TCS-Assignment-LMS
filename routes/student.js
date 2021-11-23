var express = require("express");
const app = require("../app");
var router = express.Router();
var index = require("../routes/index");
var Quiz = require("../models/quiz");
const assignments = require("../models/assignments");
const material = require("../models/material");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Welcome to Student Dashboard");
});

//Quizzes

router.get("/viewQuizzes", function (req, res, next) {
  Quiz.find().exec(function (error, results) {
    if (error) {
      return next(error);
    }
  });
});

//Attempt Quiz
router.get("/attemptQuiz:id/Student:sid", function (req, res, next) {
  console.log(req.params.id);
  Quiz.findByIdAndUpdate(req.params.id, {
    $push: {
      submissions: {
        sid: index.userId._id,
        marks: -1,
      },
    },
  }).exec(function (error, results) {
    if (error) {
      return next(error);
    }
    res.send("Response Submitted Successfully");
  });
});

//Assignments

router.get("/viewAssignments", function (req, res, next) {
  assignments.find().exec(function (error, results) {
    if (error) {
      return next(error);
    }
  });
});

router.get("/submitAssignment:id", function (req, res, next) {
  console.log(req.params.id);
  assignments.findByIdAndUpdate(req.params.id, {
    $push: {
      submissions: {
        sid: index.userId._id,
        marks: -1,
      },
    },
  }).exec(function (error, results) {
    if (error) {
      return next(error);
    }
    res.send("Assignment Submitted Successfully");
  });
});

//Material

router.get("/viewMaterial", function (req, res, next) {
  material.find().exec(function (error, results) {
    if (error) {
      return next(error);
    }
  });
});

router.get("/downloadMaterial:id", function (req, res, next) {
  material.findById(req.params.id).exec(function (error, result) {
    if (error) {
      return next(error);
    }
  });
});

module.exports = router;

var express = require("express");
var router = express.Router();

const Quiz = require("../models/quiz");
const assignments = require("../models/assignments");
const material = require("../models/material");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Teachers Dashboard");
});

//View Quiz
router.get("/viewQuizzes", function (req, res, next) {
  Quiz.find().exec(function (error, results) {
    if (error) {
      return next(error);
    }
  });
});

//Create Quiz
router.post("/createQuiz", function (req, res, next) {
  Quiz.create(req.body)
    .then(
      (teacher) => {
        console.log("Quiz has been Added ", teacher);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(teacher);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

//Create Assignment
router.post("/createAssignment", function (req, res, next) {
  assignments
    .create(req.body)
    .then(
      (teacher) => {
        console.log("Assignment has been Added ", teacher);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(teacher);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

//Delete Quiz
router.delete("/delQuiz/:id", function (req, res, next) {
  Quiz.deleteOne({ _id: req.params.id }, function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});
// Delete Assignment
router.delete("/delAssign/:id", function (req, res, next) {
  assignment.deleteOne({ _id: req.params.id }, function (error, results) {
    if (error) {
      return next(error);
    }
    // Respond with valid data
    res.json(results);
  });
});
// Add Material
router.post("/AddMaterial", function (req, res, next) {
  material
    .create(req.body)
    .then(
      (teacher) => {
        console.log("Material has been Added ", teacher);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(teacher);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
});

//view Material

router.get("/viewMaterial", function (req, res, next) {
  material.find().exec(function (error, results) {
    if (error) {
      return next(error);
    }
  });
});

// Delete Material
router.delete("/delMaterial/:id", function (req, res, next) {
  material.deleteOne({ _id: req.params.id }, function (error, results) {
    if (error) {
      return next(error);
    }
    res.json(results);
  });
});

//Download Material

router.get("/downloadMaterial:id", function (req, res, next) {
  material.findById(req.params.id).exec(function (error, result) {
    if (error) {
      return next(error);
    }
  });
});

module.exports = router;

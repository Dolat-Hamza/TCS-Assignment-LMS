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
  Quiz.find().exec(function (err, results) {
    if (err) {
      console.log('found');

      return next(err);
    }
    res.send('Found');
    console.log('found');
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
  Quiz.deleteOne({ _id: req.params.id }, function (err, results) {
    if (err) {
      return next(err);
    }
    // Respond with valid data
    res.json(results);
  });
});
// Delete Assignment
router.delete("/delAssign/:id", function (req, res, next) {
  assignment.deleteOne({ _id: req.params.id }, function (err, results) {
    if (err) {
      return next(err);
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
  material.find().exec(function (err, results) {
    if (err) {
      return next(err);
    }
  });
});

// Delete Material
router.delete("/delMaterial/:id", function (req, res, next) {
  material.deleteOne({ _id: req.params.id }, function (err, results) {
    if (err) {
      return next(err);
    }
    res.json(results);
  });
});

//Download Material

router.get("/downloadMaterial:id", function (req, res, next) {
  material.findById(req.params.id).exec(function (err, result) {
    if (err) {
      return next(err);
    }
  });
});

//Add Quiz Marks:
router.put('/markQuiz:id/student:sid/marks: mid', function(req, res, next) {
  Quiz.findById(req.params.id).exec(function(err, results){
    if (err) {
      return next(err);
    }
    let result = results[0];
    if(result.submissions)
    res.send(results[0]);
  });
});

//Add Assignment Marks:
router.put('/markAssign:id/student:sid/marks: mid', function(req, res, next) {
  assignments.findById(req.params.id).exec(function(err, results){
    if (err) {
      return next(err);
    }
    let result = results[0];
    if(result.submissions)
    res.send(results[0]);
  });
});
module.exports = router;

module.exports.getClasses = function(req, res, next) {
    Class.find({}).populate('teacher').populate('students.sid').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}


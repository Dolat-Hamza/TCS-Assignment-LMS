var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var assignmentSchema = new Schema({
    TMarks: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    teacher: {
        type: mongoose.Types.ObjectId,
        ref: "Teacher",
    },
    submissions: {
        type: [{
            sid: {
                type: mongoose.Types.ObjectId,
                ref: "Student"
            },
            marks: {
                type: Number,
            },
        }]
    }
});

module.exports = mongoose.model('Assignment', assignmentSchema);
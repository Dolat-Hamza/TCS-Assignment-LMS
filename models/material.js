var mongo = require("mongoose");
var Schema = mongo.Schema;

var materialSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    data: {
        type: String,
        required: true,
    }
});

module.exports = mongo.model("Material", materialSchema);
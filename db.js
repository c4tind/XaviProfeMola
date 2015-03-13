var mongoose = require("mongoose");
mongoose.connect("mongodb://xavi:holamon@ds031631.mongolab.com:31631/xavi-examen", function() {
    console.log("Connectat a mongodb");
});

module.exports = mongoose;


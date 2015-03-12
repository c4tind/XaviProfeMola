var mongoose = require("mongoose");
mongoose.connect("mongodb://xavi:holamon@ds041851.mongolab.com:41851/xavi-biblio", function() {
    console.log("Connectat a mongodb");
});

module.exports = mongoose;


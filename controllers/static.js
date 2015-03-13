var express= require("express");
var router = express.Router();
var options = {
    root: __dirname + "../../layouts"
};

router.use(express.static(__dirname+"/../assets"));
router.get("/", function(req, res, next) {
    res.sendFile("productes.html", options);
});
router.get("/seccio", function(req, res, next) {
    res.sendFile("seccions.html", options);
});
router.get("/preu", function(req, res, next) {
    res.sendFile("preu.html", options);
});

module.exports = router;
var Llibre = require("../../models/llibre");
var router = require("express").Router();

router.get("/", function(req, res, next) {
    Llibre.find(function(err, llibres) {
        if (err) {
            return next(err);
        }
        res.json(llibres);
    });
});

router.get("/isbn/:id", function(req, res, next) {
    console.log(req.params.id);
    Llibre.find({"isbn": req.params.id}).find(function(err, llibre) {
        if (err) {
            return next(err);
        }
        res.json(llibre);
    });
});

router.delete("/:id", function(req, res, next) {
    console.log(req.params);
    console.log(req.body);
    Llibre.remove({"isbn": req.params.id}, function(err) {
        if (err) {
            return next(err);
        }
        res.json({"missatge": "Llibre amb isbn " + req.params.id + " esborrat"});
    });
});

router.put("/", function(req, res,next) {
    console.log(req.body._id);
    
    Llibre.findByIdAndUpdate(req.body._id,req.body,function(err, llibre) {
        if(err) {
            return next(err);
        }
        res.status(201).json(llibre);
    });
});

router.post("/", function (req,res,next) {
    console.log(req.body);
    var llibre = new Llibre({
        isbn : req.body.isbn,
        titol: req.body.titol,
        autors: req.body.autors
    });
    llibre.save(function(err, llibre) {
        if (err) { return next(err) }
        res.status(201).json(llibre);
    });
});

module.exports = router;
var Producte = require("../../models/producte");
var router = require("express").Router();

router.get("/", function(req, res, next) {
    Producte.find(function(err, productes) {
        if (err) {
            return next(err);
        }
        res.json(productes);
    });
});

router.get("/seccio/:seccio", function(req, res, next) {
    Producte.find({"seccio": req.params.seccio}).find(function(err, productes) {
        if (err) {
            return next(err);
        }
        res.json(productes);
    });
});

router.get("/preu", function(req, res, next) {
    Producte.find({"preu": req.params.preu > 10}).find(function(err, productes) {
        if (err) {
            return next(err);
        }
        res.json(productes);
    });
})

router.get("/codi/:id", function(req, res, next) {
    console.log(req.params.id);
    Producte.find({"codi": req.params.id}).find(function(err, producte) {
        if (err) {
            return next(err);
        }
        res.json(producte);
    });
});

router.delete("/:id", function(req, res, next) {
    console.log(req.params);
    console.log(req.body);
    Producte.remove({"codi": req.params.id}, function(err) {
        if (err) {
            return next(err);
        }
        res.json({"missatge": "El producte amb el codi " + req.params.id + " s'ha esborrat"});
    });
});

router.put("/", function(req, res,next) {
    console.log(req.body._id);
    
    Producte.findByIdAndUpdate(req.body._id,req.body,function(err, producte) {
        if(err) {
            return next(err);
        }
        res.status(201).json(producte);
    });
});

router.post("/", function (req,res,next) {
    console.log(req.body);
    var producte = new Producte({
        codi : req.body.codi,
        nom: req.body.nom,
        seccio: req.body.seccio,
        preu: req.body.preu
    });
    producte.save(function(err, producte) {
        if (err) { return next(err) }
        res.status(201).json(producte);
    });
});

module.exports = router;
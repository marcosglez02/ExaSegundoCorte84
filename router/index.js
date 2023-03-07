const express = require("express");
const router = express.Router();
const bodyParse = require("body-parser");

router.get('/',(req,res)=>{
    const valores = {
        numRecibo: req.query.numRecibo,
        nombre: req.query.nombre,
        domicilio: req.query.domicilio,
        tipo: req.query.tipo,
        kilowats: req.query.kilowats
    }
    res.render('examen.html',valores)
 });

 router.post('/',(req,res)=>{
    const valores = {
        numRecibo: req.body.numRecibo,
        nombre: req.body.nombre,
        domicilio: req.body.domicilio,
        tipo: req.body.tipo,
        kilowats: req.body.kilowats
    }
    res.render('resultados.html',valores)
 });

module.exports=router;
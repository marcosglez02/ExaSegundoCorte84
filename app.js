const http = require("http");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const misRutas = require("./router/index");
const path = require("path");

app.set("view engine","ejs");
app.engine('html',require('ejs').renderFile);
app.use(express.static(__dirname+'/public'))
app.use(bodyparser.urlencoded({extended:true}));
app.use(misRutas)

// Página de error
app.use((req,res,next)=>{res.status(404).sendFile(__dirname+'/public/error.html')})

// Escuchar al servidor por el puerto 2000
const puerto = 2000;
app.listen(puerto,()=>{console.log("Iniciando puerto 2000")});
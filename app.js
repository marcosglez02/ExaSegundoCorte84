const http = require("http");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");

app.use(express.static(__dirname+'/public'))

app.get('/',(req,res)=>{
    // res.send("<h1>Iniciamos con express</h1>")
    res.render('examen.ejs')
 });


// Página de error
app.use((req,res,next)=>{res.status(404).sendFile(__dirname+'/public/error.html')})

// Escuchar al servidor por el puerto 2000
const puerto = 2000;
app.listen(puerto,()=>{console.log("Iniciando puerto 2000")});
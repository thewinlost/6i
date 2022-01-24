/*jshint esversion: 6 */
const express= require('express');
const app= express();
const bodyparser= require("body.parser");


//importação das rotas
app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//configração dos arquivos de visão
app.set("view engine", "ejs");
app.set('views', path.join(_dirname,"src/views"));

//pasta de arquivos estáticos
app.use(express.static(path.join(_dirname, "src/public")));

//criação de rotas
app.listen("3000", function(){
    console.log("Projeto rodando!");
});
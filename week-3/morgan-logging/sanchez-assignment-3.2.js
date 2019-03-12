/*
Title: sanchez-assignment-3.2.js
Date: 3/7/2019
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: Server
*/

var express = require ("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the views's directory

app.set("view engine", "ejs"); //Tell Expresss to use the EJS view engine

app.use(logger("short"));

app.get("/", function(request, response){
    response.render("index", {
        message: "Wellcome to the Morgan Logger Example!"
    });
});

http.createServer(app).listen(8080, function(){
    console.log("Application started on port 8080");
});
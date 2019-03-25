/*
Title: sanchez-assignment-5.2.js
Date: 3/24/2019
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: if-else-render
*/
//requires
var express = require("express");

var http = require("http");

var path = require("path");



//app functions
var app = express();
app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

// local car inventory
var car = [
    "Camaro",
    "Nissan Z",
    "Nissan GTR",
    "Mustan Shelby"
];
//routes
app.get("/", function(request, response){
    response.render ("index", {
        models: car
    });
});
// start up the server on port 5003
http.createServer(app).listen(5003, function(){
    console.log("Application started on port 5003");
});
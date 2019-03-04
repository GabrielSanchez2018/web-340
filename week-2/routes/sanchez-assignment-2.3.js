/*
Title: sanchez-assignment-2.3.js
Date: 3/2/2019
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: Routes
*/
var express = require("express");
var http = require("http");

var app = express();

// routes
app.get('/', function(req, res){
    res.end("Welcome to the homepage. \n");

});
app.get('/about',function(req, res){
    res.end("Welcome to the about. \n")
})
app.get('/contact', function(req, res){
    res.end("Welcome to the contact page. \n");
});

app.use(function(req, res){
    res.stateCode = 404;
    res.end('404!\n');
});

http.createServer(app).listen(3000, function(){
    console.log("Application Started on port $s" , 3000);
});
/*
Title: sanchez-assignment-2.2.js
Date: 3/2/2019
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: Hello World with Express
*/
var express = require('express');
var http = require('http');

var app = express();

app.use(function (req, res){
    console.log("In comes a request to: %s", req.url);

    res.end("Hello World\n");
})

http.createServer(app).listen(8080, function(){
    console.log("Application started on port %s", 8080);
});
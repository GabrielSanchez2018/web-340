/*
Title: sanchez-assignment-3.3.js
Date: 3/7/2019
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: Server
*/
var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

 var app = express();

 app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "ejs");

 app.use(logger("short"));

 app.get("/:productId", function(request, response) {

    var productId = parseInt(request.params.productId, 10);

     response.render("index", {

        productId: productId

    })

});

 http.createServer(app).listen(8081, function() {

   console.log("Application started on port 8081");

});
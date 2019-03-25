
var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");

var app =express("path");

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "pug");

app.get("/", function(request, response){
    response.render("index",{
        message: "Welcome to my Pug based homepage!"
        
    });
});

http.createServer(app).listen(5000, function(){
    console.log("appication started on port 5000");

});


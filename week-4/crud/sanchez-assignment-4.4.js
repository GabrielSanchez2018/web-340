/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Date:   28 February 2019
; Description: Demonstrates CRUD operations in a
;              Node.js API.
;===========================================
*/

var express = require("express");
var http = require("http");

var app = express();
// GET, POST, PUT, DELETE REQUEST
app.get("/", function(request, response) {
  response.send("send get request.");
});

app.put("/", function(request, response) {
  response.send("Post request.");
});

app.post("/", function(request, response) {
  response.send("Put request");
});

app.delete("/", function(request, response) {
  response.send("Delete Request");
});

http.createServer(app).listen(4004, function() {
  console.log("Application started on port 4004!");
});

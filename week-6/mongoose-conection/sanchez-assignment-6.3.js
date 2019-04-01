/*
Author: Richard Krasso
Edited by: Gabriel Sanchez 
Date: 3/27/2019
Ex: Assignment 6.3 Mongoose connection
*/

//require

var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");
// Need to replace your username and password!
var mongoDB = "mongodb+srv://Gabriel:Jairo500!@cluster0-djivq.gcp.mongodb.net/test?retryWrites=true";
mongoose.connect(mongoDB, {
    userMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on("error", console.error.bind(console, "mongoDB connection error"));
db.once('open', function(){
    console.log("Application connected to mLab");    
});
// create express server 
var app = express();
app.use(logger('dev'));

http.createServer(app).listen(5003, function(){
    console.log("Application started and listening on port 5002");
});
// inserting data
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Gabriel:Jairo500!@cluster0-djivq.gcp.mongodb.net/test?retryWrites=true";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("employees");
  var myobj = [
    { _id: 154, name: 'Chocolate Heaven'},
    { _id: 155, name: 'Tasty Lemon'},
    { _id: 156, name: 'Vanilla Dream'}
  ];
  dbo.collection("emp").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  });
});
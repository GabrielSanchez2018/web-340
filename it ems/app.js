/*
Author: Professor Krasso
Edited by: Gabriel Sanchez
Date: 3/27/2019
Ex: Assignment 5.4 EMS (Milestone 1)
*/

//require

var express=require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
//require the emoployee directory
var Employee = require("./models/employee")

// add database mongoose
var mongoose = require("mongoose");
var mongoDB = "mongodb+srv://Gabriel:Jairo500!@cluster0-djivq.gcp.mongodb.net/test?retryWrites=true";

mongoose.connect(mongoDB, {
    userMongoClient: true
    
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB Connection Error"));
db.once("open", function(){
    console.log("Application DB Connected")
});
var app = express();
app.use(logger('dev')); //mongo

//insert to database from form 
app.post('/insert', (req, res) =>{
    db.collection(emp).save(req.body, (err, result)=>{
        if (err) return console.log(err)

        console.log('saved to database')
        res.redirect('/') // redirect back to '/'
    });
});

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

//get home
app.get("/", function(request, response){
    response.render("index",{
        title: "Home Page"
    }); 
});
//adding Eployee list
app.get("/list", function(request, response){
    response.render("list", {
        message: "list"
    });
});
//adding new data entry routing 
app.get("/new", function(request, response){
    response.render("new", {
        message: "Data Entry"
    });
});
//views
app.get("/view", function(request, response){
    response.render("view", {
        message: "Data Entry"
    });
});

// Employee model
var employee = new Employee({
    firstName: "Gabriel",
    lastName: 'Sanchez'
});
// Create the server
http.createServer(app).listen(8085, function(){
    console.log("Application started on port 8085");
});

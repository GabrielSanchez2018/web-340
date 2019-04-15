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
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var helmet = require("helmet");
var Employee = require("./models/employee")
var csrf = require("csurf");

//set up csrf protection
var csrfProtection = csrf({cookie: true});

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
//start up app
var app = express();
app.use(logger('dev')); //mongo
//helmet xss
app.use(helmet.xssFilter());

//insert to database from form 

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
// Morgan Logger
app.use(logger("short"));
//use statements Body Parser
app.use(bodyParser.urlencoded({extended: true}));
//Cookie parser
app.use(cookieParser());
//csrf Protection 
app.use(csrfProtection);
app.use(function(request, response, next){
    var token = request.csrfToken();
    response.cookie("XSRF-TOKEN", token);
    response.locals.csrfToken = token;
    next();
});

// http calls helmet 
app.get('/', function(request, response){
    response.render("index", {
        message: "XSS Prevention Example"
    });
});

// routing

app.get("/", function(request, response) {
    response.render("index", {
        message: "New Employee Entry Page"
    });
});

app.post("/process", function(request, response) {
    console.log(request.body.txtName);
    response.redirect("/");
});

// mongosee save 
app.get("/", function (req, res) {
    Employee.find({}, function (err, employees) {
        if (err) {
            console.log(err)
            throw err;
        } else {
            console.log(employees);
            res.render('index', {
                title: 'EMS|Home',
                employees: employees
            })
        }
    });
});

app.get("/new", function (request, response) {
    response.render("new", {
        title: 'EMS|New'
    });
});

app.post('/process', function(req, res) {
    console.log(request.body.txtName);
    if (!req.body.txtName) {
      res.status(400).send('Entries must have a name');
      return;
    }
  
    // get the request's form data
    const employeeName = req.body.txtName;
    console.log(employeeName);
  
    // create a fruit model
    let employee = new Employee({
      name: employeeName
    });
  
    // save
    employee.save(function(err) {
      if (err) {
        console.log(err);
        throw err;
      } else {
        console.log(employeeName + ' saved successfully!');
        res.redirect('/');
      }
    });
  });

app.get("/list",function(req,res){
    Employee.find({},function(error,employees){
        if(error)throw error;
        res.render("list",{
            title:'Employee List',
            employee:employee
        })
    })
})
//Redirects users to the new page
app.get('/new', function(req, res) {
    res.render('new', {
      title: 'FMS | New'
    });
  });

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

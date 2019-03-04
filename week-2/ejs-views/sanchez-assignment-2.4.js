/*
Title: sanchez-assignment-2.4.js
Date: 3/2/2019
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: EJS views
*/

var http = require("http");

var express = require("express");

var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views")); //Tell express the views are in the Views Directory

app.set("view engine", "ejs"); //Tell Express to use the EJS view Engine

app.get("/", function(request, response){
	response.render("index",{
		name: "Gabriel",
		lastname: "Sanchez",
		address: "4821 O st Omaha Nebraka"
	});
});

http.createServer(app).listen(8080, function(){
	console.log("EJS-Views app started on port 8080.");
});


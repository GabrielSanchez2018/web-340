/*
Title: sanchez-assignment-1.3.js
Date: 2/20/2019
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: Modules 
*/
var url = require("url");

var parsedURL = url.parse("http://www.example.com/profile?name=smith");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
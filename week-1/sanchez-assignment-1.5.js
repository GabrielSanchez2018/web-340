/*
Title: sanchez-assignment-1.5.js
Date: 2/20/2019
Author: Profesor Krasso
Modified by: Gabriel Sanchez
Description: Hello World
*/

Variable declaration:

var http = require("http");

function processRequest(req, res) {

var body = "Got It";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);
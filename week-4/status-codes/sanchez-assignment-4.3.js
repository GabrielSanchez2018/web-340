var express = require("express");
var http = require ("http");
var logger = require("morgan")

var app = express();

app.use(logger("dev"))

// request using using status codes.
app.get('/not-found', function(request, response){
    response.status(404);
    response.json({
        error: "Resource not found."
    });
});

app.get('/ok', function(request,response){
    response.status(200);
    response.json({
        message: "Page loaded correctly."
    });
});

app.get('/not-implemented', function(request, response){
    response.status(501);
    response.json({
        error: "Page not implemented"
    });
});

// We are going to create the server

http.createServer(app).listen(8081, function(){
    console.log("Application started on port 8080");
}); 
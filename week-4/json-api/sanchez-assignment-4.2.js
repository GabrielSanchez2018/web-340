var express = require ('express');
var http = require ("http");
var logger = require("morgan");

var app = express();

app.use(logger('dev'));

app.get('/customer/:id', function(req, res){
    var id = parseInt(req.params.id, 10);
    res.json({
        firstName: 'Gabriel',
        lastName: 'Sanchez',
        employeeId: id
    });
});

http.createServer(app).listen(3001, function(){
    console.log("Appication started and running on port 3000");
});
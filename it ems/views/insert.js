/*
Author: Professor Krasso
Edited by: Gabriel Sanchez
Date: 3/27/2019
Ex: Assignment 5.4 EMS (Milestone 1)
*/

// try to inser data
const express = require('express')
const bodyParser= require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.post("/new", (req, res) =>{
    console.log(req.body)
});



/* Old Code
var passport = require("passport");

router.get("/new", function(req, res){
    res.render("new")
});

router.post("/new", function(req, res, next){
    var username= req.body.username;
    var password= req.body.password;

    User.findOne({username:username}, function(err, user){
        if (err) {return next(err);}
        if (user) {
            req.flash("error", "User already exist");
            return res.redirect("/new");
        }
        var newUser = new User({
            username: username,
            password: password,
    });
    newUser.save(next);
});


}, passport.authenticate("new", {
    successRedirect: "/",
    failureRedirect: "/new",
    failureFlash: true
}));
*/
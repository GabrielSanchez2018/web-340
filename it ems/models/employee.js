/*
Author: Richard Krasso
Edited by: Gabriel Sanchez 
Ex: 7.4
Date: 4/7/2019
*/

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Employee Scheema

let EmployeeSchema = new Schema({
    fistName:{type:String, required:true},//chapter 8 p128
    lastName:{type:String, required:true}
});

// Exporting The Model
module.exports = mongoose.model('Employee', EmployeeSchema)

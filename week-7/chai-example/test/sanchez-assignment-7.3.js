/*
Author: Richard Krasso
Edited by: Gabriel Sanchez 
Ex: 7.4
Date: 4/7/2019
*/
var fruits = require("../sanchez-fruits");
var chai = require("chai");
var assert = chai.assert;

describe("fruits", function() {
    it("should return an array of fruits", function() {
        var f = fruits('Apple,Orange,Mango');
        assert(Array.isArray(f));
    });
});
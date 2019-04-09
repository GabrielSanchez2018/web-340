/*
Author: Richard Krasso
Edited By: Gabriel Sanchez 
Ex: 7.2 Mocha and Chai
Date: 4/8/2019
*/

var assert = require("assert");
describe("String#split", function() {
    it("should return an array of fruits", function() {
        assert(Array.isArray('Apple,Orange,Mango'.split(',')));
    });
});
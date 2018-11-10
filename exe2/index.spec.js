const {add, mult, moins} = require("./index.js");

describe("Test de la fonction add", function() {
    it("should return 5", function() {
        expect(add(2,3)).toBe(5);
    }); 
    it("should return 15", function() {
        expect(add(5,10)).toBe(15);
    }); 
}); 

describe("Test de la fonction mult", function() {
    it("should return 6", function() {
        expect(mult(2,3)).toBe(6);
    }); 
    it("should return 50", function() {
        expect(mult(5,10)).toBe(50);
    }); 
}); 


describe("Test de la fonction moins", function() {
    it("should return 5", function() {
        expect(moins(10,5)).toBe(5);
    });
    it("should return 10", function() {
        expect(moins(20,10)).toBe(10);
    });
});
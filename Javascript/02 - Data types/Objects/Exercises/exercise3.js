"use strict";

/* Task:

Create a constructor function Calculator that creates objects with 3 methods:

    1. read() prompts for two values and saves them as object properties with names a and b respectively.
    2. sum() returns the sum of these properties.
    3. mul() returns the multiplication product of these properties.

*/

// Create the construct function:
function Calculator() {
    alert(`Hello! Welcome to this exercise!`);

    // Make the read() function construct:
    this.read = function() {
        this.a = +prompt(`Type the first value please:`);
        this.b = +prompt(`Type here your second value please:`);
        return this.a, this.b;
    };

    // Make the sum() function construct:
    this.sum = function() {
        return this.a + this.b;
    };

    // Make the mul() function construct:
    this.mul = function() {
        return this.a * this.b;
    };
};

// Make the new function:
let calculator = new Calculator();

// Call the functions:
calculator.read();

alert(`Sum = ${calculator.sum()}`);
alert(`Mul = ${calculator.mul()}`);
"use strict";

/* Task:
Create an object calculator with three methods:

    1. read() prompts for two values and saves them as object properties with names a and b respectively.
    2. sum() returns the sum of saved values.
    3. mul() multiplies saved values and returns the result.
*/

// Define the object:
let calculator = {
    // 1
    read() {
        alert(`Hello! welcome...`);

        this.a = +prompt(`Insert the first value:`);
        this.b = +prompt(`Insert the second value:`)

        return this.a, this.b;
    },

    // 2
    sum() {
        return this.a + this.b;
    },

    mul () {
        return this.a * this.b;
    },
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// Without "this", you're trying to access global variables which don't exist.
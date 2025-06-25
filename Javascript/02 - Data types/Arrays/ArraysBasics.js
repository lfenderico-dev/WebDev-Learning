"use strict";

// What is an array?: ordered collection of something

//Defining an array:
let array = [`hello`, 22, -1.4, function() {console.log(`hello`)}]; // Can contain every data type


// Getting elements:
let colors = [`red`, `blue`, `green`];

console.log( colors[colors.at(0)] ); // This outputs the first element (0), red.
console.log( colors[colors.at(-1)] ); // This outputs the last element (-1), green.
console.log( colors[0] ); // This method does not allow negative values

// Override values:
colors[0] = `yellow`; // Now the first element is yellow and not red


//----------------------------------------------------------------------



"use strict";

// To access a character of a string use the following syntax:
// variable.at(position)
let str = `Hello`;

alert( str.at(0) ); // H
alert( str.at(-1) ); // o
// Using negative values will be starting counting backward

// another way to access:
alert( str[0] ); // H
alert( str[-1] ); // Error
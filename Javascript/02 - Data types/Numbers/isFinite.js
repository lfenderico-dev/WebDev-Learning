"use strict";

// There is this function that checks if its argument is a number, a NaN, an Infinity or -Infinity value.

alert( isFinite ( `15` ) ); //true
alert( isFinite ( `hello` ) ); //false because it is NaN
alert( isFinite( Infinity ) ); // false because it is Infinity


// Example:
let number = +prompt(`Enter a number`);

alert ( isFinite (number) );
// will be true unless you enter Infinity, -Infinity or not a number
"use strict";

// 1. Math.floor() ----- round down
alert(Math.floor(3.2)); // 3
alert(Math.floor(-1.1)); // -2

// 2. Math.ceil() ----- round up
alert(Math.ceil(3.2)); // 4
alert(Math.ceil(-1.1)); // -1

// 3. Math.round() ----- rounds to the nearest integer
alert(Math.round(3.7)); // 4
alert(Math.round(3.2)); // 3
alert(Math.round(-1.3)); // -1

// 4. Math.trunc() ----- deletes everything after the decimal point without rounding
alert(Math.trunc(3.2345)); // 3

// 5. toFixed(n) ---- rounds to n digits after the decimal point and returns a string that rapresent the result.
let number = 12.36;
alert( number.toFixed(1) ); // "12.4"
// This rounds down to neareast int value similar to Math.round()
// To return a number:
alert( +number.toFixed(1) ); // 12.4
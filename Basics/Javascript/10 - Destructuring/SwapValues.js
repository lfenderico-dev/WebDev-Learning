"use strict";

// HOW TO SWAT THE VALUE OF TWO VARIABLES:
let a = 1;
let b = 2;

[a, b] = [b, a];            // Destructuring

console.log(a);
console.log(b);

// Output:
//2
//1
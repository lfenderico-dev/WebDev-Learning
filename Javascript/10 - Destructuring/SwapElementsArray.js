"use strict";

// HOW TO SWAP 2 ELEMENTS IN AN ARRAY:
const foods = [`apple`, `pasta`, `pizza`, `bread`, `cheese`];

// Let's swap `pasta` with `bread`:
[foods[1], foods[3]] = [foods[3], foods[1]];      // Destructuring swap

// Print the array:
console.log(foods);
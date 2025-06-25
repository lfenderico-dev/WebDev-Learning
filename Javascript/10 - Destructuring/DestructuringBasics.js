"use strict";

// destructuring =  extract values from arrays and objects then assign them to variables in a convenient way

//           [] = to perform array destructuring
//           {} = to perform object destructuring


// Example:
const colors = [`Purple`, `Green`, `Pink`, `Blue`, `Yellow`];

// Assign every element to a variable using their position as reference
const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);
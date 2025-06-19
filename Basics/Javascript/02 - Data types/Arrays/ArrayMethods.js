"use strict";

// Array main methods:
let fruits = [`Apple`, `Banana`, `Orange`, `Pear`];
// 1. pop() ----  removes the most recently added element from the array:
fruits.pop(); // removing `Pear` element in the array.

// 2. push() ------ append an element to the end of the array
fruits.push(`Mango`); // Adding the element `Mango` to the array.

// 3. shift() ---- remove the first element of the array
fruits.shift(); // remove `Apple` element

// 4. unshift() ---- add an element in first position to an array
fruits.unshift(`Mandarin`);


// ---------------------------------------------------------------------


// .splice()
/* Syntax:
    arr.splice(start, deleteCount, elem1....);

- It modify the array starting from `start`.
- Removes `deleteCount` elements.
- Inserts `elem1...` elements
*/

let arr = [`I`, `am`, `studying`, `Javascript`, `right`, `now`];
// Remove the first 4 elements and replace them:
arr.splice(0, 4, `Let's`, `go`, `out`);
// Console log the array:
console.log(arr);

// You can also just add things:
let shopCart = [`Banana`, `Strawberry`, `Pineapple`];
shopCart.splice(2, 0, `Orange`); // Set `deleteCount` = 0
console.log(shopCart);


//----------------------------------------------------------------------


// .slice()
/* Syntax:
    arr.slice(start, end);

- Returns a new array copying all the item (subarray) from `start` to `end` (`end` is not included).
*/

let words = [`h`, `e`, `l`, `l`, `o`];
//copy the first 2 words:
console.log( words.slice(0, 2) );


// ---------------------------------------------------------------------


// .concat()
/* Syntax:
    arr.concat(arg1, arg2 ....);

- It creates a new array with the values of the previous plus the new arguments.
*/

//declare 2 variables
let programmingLanguages = [`Python`, `Javascript`, `Go`, `Typescript`];
let newProgrammingLanguages = [`C`, `Rust`];

// use .concat() and overwrite the previous variable
programmingLanguages = programmingLanguages.concat(`C++`, newProgrammingLanguages);

//console.log the result
console.log(programmingLanguages);


// ---------------------------------------------------------------------


// .forEach() iteration
/* Syntax:
    arr.forEach(function() {
        do smth with all the items
    });

- For each element in the array does something
*/

// Example: here we display for every item its index and the array where it is stored:
let arr1 = [`Example`, `Hello`, `World`];

arr1.forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`);
});

"use strict";

// .map() method:
/*
Syntax: 
    let result = arr.map(function(item, index, array) {
        // returns the new value instead of item
    });

What it does: calls the function for each element and returns the array of result.
*/

// Example:
// Here we want to transform each element into its lenght:
let people = [`Gandalf`, `Bilbo`, `Nazgul`];
console.log(people.map(item => item.length));


// -----------------------------------------------------------------------


// .sort() method:
/*
Syntax: arr.sort(sortingFunction);
    - It needs a sorting Function that compares elements.
What it does: sorts elements in the array.
*/

// Example1: with numbers
let numbers = [1, 334, 14, 8, 22];
console.log( numbers.sort( (a, b) => a - b) );
// Here we are using an arrow function to sort numbers in crescent order


// Example2: with strings
let countries = [`Italy`, `France`, `Spain`, `Ukraine`, `Japan`];
console.log( countries.sort( (a, b) => a.localeCompare(b) ) );
// That is a standard method to use with strings in general


// ---------------------------------------------------------------------


// .reverse() method:
/*
Syntax: arr.reverse();
Used to: reverse the order of elements in the array.
*/

// Example:
let num = [1, 2, 3, 4, 5];
console.log( num.reverse() );


// ---------------------------------------------------------------------


// .split() method:
/* 
Syntax: arr.split(separator);
    - The separator is what delimits a new word in the string.
Used to: convert a string into an array.
*/

// Example:
let names = 'Bilbo, Gandalf, Nazgul';
console.log( names.split(', ') );


// ---------------------------------------------------------------------


// .join() method:
/*
Syntax: array.join(separator);
    - The separator is what delimits a new word in the string.

Used to: convert an array into a string.
*/

// Example:
let greeting = [`Hello`, `World`, `!`];
console.log( greeting.join(` `));

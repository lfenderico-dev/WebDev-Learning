"use strict";
let arr = [1, `hello`, true, `12`];

// .indexOf() search method:

/* Syntax: arr.indexOf(item, from);
What it does: looks for `item` starting from index `from`, and returns the index where it was found. If not found return `-1`.

- Leaving `from` blank means `from the beginning`.
- This method uses strict equality so if you like search for `false` it searches for false and not like `0`.
*/

console.log( arr.indexOf(`hello`) );
console.log( arr.indexOf(`world`) );


// ---------------------------------------------------------------------


// .includes() search method:

/* Syntax: arr.includes(item, from);
What it does: looks for `item` starting from index `from`, returns true if found and false if not.

- Leaving `from` blank means `from the beginning`.
*/

console.log( arr.includes(1) );
console.log( arr.includes(33) );


//----------------------------------------------------------------------


// .find() search method:

/* Syntax: 
    let result = arr.find(function(item, index, array) {
        // if true is returned, item is returned and iteration is stopped
        // for falsy scenario returns undefined
    });

Used to: find objects with specific conditions
*/

// Example:
let users = [
    {name: `Lorenzo`, id: 1},
    {name: `Andrea`, id: 2},
    {name: `Marco`, id: 3},
];

console.log( users.find(item => item.id == 1));



// ---------------------------------------------------------------------


// .findIndex() search method:
/*
Syntax: 
    let result = arr.findIndex(function(item, index, array) {
        // if true is returned, item is returned and iteration is stopped
        // for falsy scenario returns undefined
    });

What it does: same as .find() but this returns the index where the element was found instead of the element itself.
If nothing is found returns `-1`.
*/

// Example:
let newUsers = [
    {id: 1, name: `Roberta`},
    {id: 2, name: `Luigi`},
    {id: 3, name: `AndreaJr`},
];

console.log( newUsers.findIndex(newUsers => newUsers.name == `Roberta`) );


// ---------------------------------------------------------------------


// .filter() search method:
/* 
Syntax: 
    let results = arr.filter(function(item, index, array) {
        // if true item is pushed to results and the iteration continues
        // returns empty array if nothing found
    });

What it does: returns an array with all matching elements of the filter.
*/

// Example:
let colors = [
    {id: 1, name: `red`},
    {id: 2, name: `green`},
    {id: 3, name: `purple`},
    {id: 4, name: `yellow`},
    {id: 5, name: `blue`},
];

console.log( colors.filter(item => item.id < 4) ); 
// Returns the first 3 objects of the array.
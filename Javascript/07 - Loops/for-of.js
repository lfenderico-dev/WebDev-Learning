"use strict";

// Used to iterate over characters:
/* Syntax: 
    for (characters of string) {
        body
    }
*/

for (let characters of `Hi`) {
    alert(characters);     // H, i
}



// With Arrays:
// Used to iterate over array elements (as the elements themselves)
let fruits = [`Apple`, `Orange`, `Banana`];

for (let fruit in fruits) {
    console.log( fruit );
}
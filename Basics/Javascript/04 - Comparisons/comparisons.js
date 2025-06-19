"use strict"

// All the comparison operators:
console.log( 2 > 1 ); // True
console.log( 2 < 1 ); // False
console.log( 2 == 1 ); // False
console.log(2 != 1); // True

console.log( `Z` > `A` ); //True
// For strings js checks the alphabetical position number of the first letter.

console.log( `2` > 1 ); //True
// JS automatically converts!

console.log( true == 1 ); // True
console.log( false == 0 ); // True
console.log( false = `` ); // True


// Strict equality:
console.log( false === 0 ); // False
// False because the types are different.
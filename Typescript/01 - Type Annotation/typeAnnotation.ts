/* Type annotation: specifying the data-type of a parameter
     2 ways:
        - Typescript does it automatically (type inference).
        - Manually with this syntax: let variableName : dataType = data;

Usage: Mainly error prevention.
*/

// Example:
let message: string = 'Hello world!';
let age: number = 17;
let isStudent: boolean = true;
// Once declared you can't change the data type.
// If you try assigning a numerical value to a string variable it will give error.
// If you try overwrite a string variable assigning another string it will work.

// message = 19;   Error!
message = `Hello world again!`; // This works



// Typescript also does this automatically:
function sum(a:number, b:number) {
    return a + b;
}
// Here typescript will automatically say: "oh this is a sum of numbers, it is a number for sure!"
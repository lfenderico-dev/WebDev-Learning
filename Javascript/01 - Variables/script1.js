"use strict";

// To declare a variabe:
let variableName; //You must declare once a variable.
// To assign some value to it:
variableName = `Hello world`;

// You can also do them both in the same line:
let age = 17;

// You can overwrite a variable:
age = 18; //Now the value is 18


// To declare a constant:
const birthdayYear = 2008; //You cannot overwrite the value of a constant.


// A little exercise:
/*
    1. Declare two variables: admin and name.
    2. Assign the value "John" to name.
    3. Copy the value from name to admin.
    4. Show the value of admin using alert (must outpout“John”).
*/

let name = `John`;
let admin = name;

alert(admin);

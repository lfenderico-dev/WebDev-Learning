"use strict";

let name;
name = prompt(`What is your name?`);

if (name == `Lorenzo`) {
    alert(`Hello ${name}`);
}
else if (name ==`Andrea`) {
    alert(`Maybe I know you`);
}
else {
    alert(`I don't know you!!!`);
}

// The condition must be in parentheses
// A code block in JS must be in curly braces



// Shorter way to check a condition:
// let variable = condition ? valueIfTrue : valueIfFalse;

let surname;

surname = prompt(`What is your surname?`);

let message = (surname == `Fenderico`) ? `hello ${surname}` : `I don't know you!`;

alert(message);

// You can also concatenate the conditional operator:
let age;
age = prompt(`Please ${name} enter your age:`);

let message1 = (age < 10) ? `You are so young!`:
    (age < 18) ? `You are a teen!` : `You are a grown man!`;
alert(message1);

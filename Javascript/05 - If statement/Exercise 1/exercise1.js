"use strict";

/* Task:
    Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

    If the visitor enters “ECMAScript”, then output “Right!”, otherwise – output: “You don’t know? ECMAScript!”
*/

alert(`Hello! Welcome to this exercise.`);

let question = `What is the “official” name of JavaScript?`;
let answer;

answer = prompt(question);

if (answer == `ECMAScript`) {
    alert(`You are RIGHT!`);
}
else {
    alert(`You don’t know? ECMAScript!`);
}
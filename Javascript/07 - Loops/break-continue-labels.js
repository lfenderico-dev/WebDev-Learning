"use strict";

// Break: keyword to force exit the loop.
// Continue: keyword to skip the rest of the code and start a new iteration.
// Label: used to name loops so you can break or continue them.


// Break example:
let value;

while (true) {
    value = prompt(`Insert a number`, ``);

    if (value != number(value)) {
         alert(`Invalid number, ERROR!`);
         break;
    } 
    else alert(`You picked ${value}`);
}
// This loop is infinite until the user writes something that is not a number!


// Continue example:
while (true) {
    alert(`hello`);
    let answer = prompt(``);
    if (answer == `hello`) continue;
    alert(`you must say hello`);
}
// When the user type `hello` the last alert is skipped and the loop restarts.



// Label example:
loopName: for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
        let input = prompt(`Value at coords (${i},${j})`, '');
        // if an empty string or canceled, then break out of both loops
        if (!input) break loopName; 
        // do something with the value...
    }
}
alert('Done!');
"use strict";


function func1(callback) {                                  // This function prints the message after 3000ms
    setTimeout(() => {console.log(`Task 1`);
    callback()}, 3000);
}

function func2() {
    console.log(`Task 2`);
    console.log(`Task 3`);
    console.log(`Task 4`);
    console.log(`Task 5`);
}

func1(func2);

// Now we handled the situation with a callback.
// The syncr. part will be executed after the async. part
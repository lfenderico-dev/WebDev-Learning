"use strict";

// synchronous  = Executes line by line consecutively in a sequential manner 
//                Code that waits for an operation to complete.


// asynchronous = Allows multiple operations to be performed concurrently without waiting
//                Doesn't block the execution flow and allows the program to continue
//               (I/O operations, network requests, fetching data)
//               Handled with: Callbacks, Promises, Async/Await



// Example:
// 1
setTimeout(() => {console.log(`Task 1`)}, 3000);                  // This function prints the message after 3000ms.

// 2
console.log(`Task 2`);
console.log(`Task 3`);
console.log(`Task 4`);
console.log(`Task 5`);


// 1. is async because it is not blocking the flow of the code and is executing while the 2. part is too.
// 2. is sync because it execute line by line.
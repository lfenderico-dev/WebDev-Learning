"use strict";

// Create the function with the destructuring as parameter
function displayPerson({firstName, lastName, age, job = `Fry Cook`}) {
    console.log(`name: ${firstName} ${lastName}.`);
    console.log(`age: ${age}.`);
    console.log(`job: ${job}.`);
}

// Here is the object we are going to pass to the function:
const person1 = {
    firstName: `SpongeBob`,
    lastName: `SquarePants`,
    age: 20,
}


// Let's call the function and pass the object:
displayPerson(person1);

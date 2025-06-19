"use strict";

// HOW TO EXTRACT VALUES FROM OBJECTS:

const person1 = {
    firstName: `Lorenzo`,
    lastName: `Fenderico`,
    age: 17,
}

// Person1 value extraction:
const {firstName, lastName, age, job=`Student`} = person1;

// console.log values:
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);


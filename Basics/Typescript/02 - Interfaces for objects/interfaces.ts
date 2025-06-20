/*

Definition: An interface is a block of code used to define the data type of each property/method of an object.

Purpose:
    - Enforce type-checking to avoid errors.
    - Define an object's shape.

Syntax:
    interface objName {
        properties and methods : dataType;
    }
*/



// Let's create an interface:
interface isPerson {
    name: string;
    age: number;
    speak(a: string): void;
};
// Let's define an object using the interface:
const me: isPerson = {
    name: `Lorenzo`,
    age: 17,
    speak(text) {
        console.log(text);
    }
};
// If we type something that does not respect the interface rule an error will be given.

// Let's create a function:
    // Here we specify that the parameter must be an object with isPerson interface
const greetPerson = (person: isPerson) => {    
    console.log(`Hello ${person.name}`);
};

// Call the function:
greetPerson(me);
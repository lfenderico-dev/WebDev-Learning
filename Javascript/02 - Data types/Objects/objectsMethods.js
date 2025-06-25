"use strict";

// A function that is a property of an object is called its method.

let user = {
    sayHello() {
        alert(`Hello world!`);
    }
};
// sayHello is a method of the user object.
// Now the user can say hello!
user[sayHello()]; // We call the function like we are getting a property.

// --------------------------------------------------------------------------------

// "this" keyword
// "this" is a special keyword that refers to the object that is executing the current function.

let user1 = {
    name : `Lorenzo`,
    age : 17,

    message() {
        alert(`Hello ${this.name}, I know that you're ${this.age}`)
    }
};

user.message(); // Hello Lorenzo, I know that you're 17

// In this case for example: user1.name == this.name
// It is better to use "this" because of copying issue that can be caused later on.
"use strict";

// Contstructor functions are like blueprints for objects.
// You can create a specific object using a constructor function as blueprint.

// Example:

// Constructor function:
function User(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        alert(`Hello! My name is: ${this.name}`);
    };
};

// Create an user with the constructor function:
let userLorenzo = new User(`Lorenzo`, 17);
/* The object now is:
    userLorenzo = {
        name : `Lorenzo`,
        age : 17,
        sayHello : function() {
        alert(`Hello! My name is: ${this.name}`);
        }
    }
*/
alert(userLorenzo.name);
alert(userLorenzo.age);
alert(userLorenzo.sayHello());
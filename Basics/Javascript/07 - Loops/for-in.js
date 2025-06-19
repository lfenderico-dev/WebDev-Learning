"use strict";

/* Syntax:
    for (key in object) {
        loop body
    }
*/

// Executes the body for each key among object's properties.


// Example: let’s output all properties of user
let user = {
    name : "Lorenzo",
    age : 17,
    sex : `male`,
};

for (let key in user) {             // key is just a temporal variable that refers to all the keys in the object, it could be named as you wish.
    // Display all the keys:
    alert(key);

    // Display all the values:
    alert(user[key]);
}
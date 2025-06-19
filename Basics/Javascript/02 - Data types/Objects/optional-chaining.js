"use strict";

// Used to access a property also if it doesn't exist.
// Useful to not get errors.


/* Obj?.property
    - If obj exists: returns obj.property.
    - Otherwise: returns undefined.
*/
// Example:
let user = {     // We have this user
    name: `Lorenzo`,  //User has no adress property
};

console.log(user?.adress?.street);
// undefined

// -----------------------------------------------------------------------------------

/* obj?.[property]
    - If obj exists: returns obj[property].
    - Otherwise: return undefined.
*/
// Example:
let user1 = {
    surname: `Fenderico`,
};

let user2 = {
    age: 18,
}

alert( user1?.[surname] ); // Fenderico
alert( user2?.[surname] ); // surname property does not exist so it returns undefined

// --------------------------------------------------------------------------------

/* obj.method?.()
    - If obj.method exists: calls the method.
    - Otherwise: return undefined.
*/
// Example:
let userAdimin = {          // Here we have an userAdmin object with a method admin
    admin() {
        alert(`Hello! I am an admin!`)
    }
};

let userGuest = {};     // Here we don't have the admin method

userAdimin.admin?.(); // Hello! I am an admin!
userGuest.admin?.(); // Nothing happens


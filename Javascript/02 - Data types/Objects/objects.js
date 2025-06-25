"use strict";

//Object: list of property.
//Property: key:value pair.

// Object declaration:
let user = {
    name : `Lorenzo`,
    // Key : value,
    "like pizza" : true
};


// Access a value:
// Method 1:
alert(user.name); // Lorenzo
// Method 2:
alert(user[name]); // Lorenzo
alert(user["like pizza"]); // true

// Add a property:
user[age] = 17;
user[sex] = `Male`;


// Delete a property
delete user[sex];


// Using variables to make properties:
function makeUser(name, surname, age) {
    return {
        name : name,
        surname : surname,
        age : age,
    };
};

let user = makeUser("Lorenzo", "Fenderico", 17);
alert(`Hello ${user[name]} ${user[surname]}, I know you are ${user[age]}`);
// Output: Hello Lorenzo Fenderico, I know you are 17

// --------------------------------------------------------------------------------

// in operator
// Syntax: "key" in object

let a = {
    b : 10,
};

alert("b" in a); // True because b key exists in a object.
alert("name" in a); // False

// --------------------------------------------------------------------------------

// How to copy an object: using Object.assign.

/* Syntax:
    Object.assign(dest, sources);

    - dest is the target object (where to clone).
    - sources are what to copy in the clone.
*/

// Copy all the object:
let user = {
    name : `Lorenzo`,
    age : 17,
    sex : `male`,
};

let clone = Object.assign({}, user); // Create the clone object and copy all the user properties

alert(clone.name); //Now you can use this
alert(clone.age); //Now you can use this
alert(clone.sex); //Now you can use this


// Copy something specific into a specific object:
let user = {
    name : `Lorenzo`,
};

let permissions = {
    canView : true,
    canEdit : true,
}

Object.assign(user, permissions);

/* Now user object is:
user {
    name: `Lorenzo`
    canView : true,
    canEdit : true,
}
*/

Object.assign(user, { name: `Andrea`});   // If the property exists it will be overwrited.

/* Now user object is:
user {
    name: `Andrea`
    canView : true,
    canEdit : true,
}
*/

// --------------------------------------------------------------------------------



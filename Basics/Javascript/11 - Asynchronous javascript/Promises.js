"use strict";

// Promise = An Object that manages asynchronous operations.
//           Wrap a Promise Object around {asynchronous code}.

// Peding -> resolved or rejected.
//Syntax: new Promise((resolve, reject) => {async code})


// EXAMPLE:
    // Perform those tasks in order:
        //1. Walk the dog;
        //2. Clean the kitchen;
        //3. Take out the trash;


// Make the function to walk the dog:
function walkDog() {
    return new Promise((resolve, reject) => {     //Make the promise with the syntax we wrote up here
        // Write the async code:
        setTimeout(() => { 
                         
            const dogWalked = true;
            dogWalked ? resolve(`You walked the dog`) : reject(`You didn't walk the dog`);

        }, 1500)
    });
}

// Make the function to clean the kitchen:
function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const kitchenCleaned =  false;
            kitchenCleaned ? resolve(`You cleaned the kitchen`) : reject(`You did not clean the kitchen`);
        }, 3000)
    });
}

// Make the function to take out the trash:
function takeTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            const TrashTaken = true;
            TrashTaken ? resolve(`You took out the trash!`) : reject(`You did not took out the trash!`);
        }, 500)
    });
}


// Let's call the function using "method-chaining".
walkDog().then(value => {console.log(value); return cleanKitchen()}).then(value => {console.log(value); return takeTrash()}).then(value => {console.log(value); console.log(`You finished all your tasks!!`)}).catch(error => console.error(error));


// When it encounters a reject it stops, that is why this example does not execute further then the second function!
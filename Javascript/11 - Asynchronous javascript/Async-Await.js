"use strict";

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


// This is the same example of Promises.js but now we are going to call all of this in a different way:

/*
Async/Await: 
    Async = makes a function return a promise
    Await = makes an async function wait for a promise

Allows you write asynchronous code in a synchronous manner
Async doesn't have resolve or reject parameters
Everything after Await is placed in an event queue
*/


// Declare the async function
async function doTasks(){
// Let's use try to check up for errors in case of rejection
    try{

        const walkDogResult = await walkDog();     // here we use await on the function storing the result in a constant.
        console.log(walkDogResult);  // here we console.log the result.


        const cleanKitchenResult = await cleanKitchen();    // here we use await on the function storing the result in a constant.
        console.log(cleanKitchenResult);    // here we console.log the result.


        const takeTrashResult = await takeTrash();  // here we use await on the function storing the result in a constant.
        console.log(takeTrashResult);   // here we console.log the result.

    }
    // Let's catch errors and display them into the console:
    catch(error){
        console.error(error);
    }
}

// Call the async function
doTasks();

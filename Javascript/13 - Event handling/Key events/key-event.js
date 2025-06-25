"use strict";

/*

eventListener = Listen for specific events to create interactive web pages.
    events: keydown, keyup

Syntax:
    document.addEventListener(event, callback);

*/

// Save a reference to the element:
const myBox = document.getElementById("myBox");

// Declare some constants useful for movement:
const moveAmount = 30;
let x = 0;
let y = 0;

// Add one eventlistener:
document.addEventListener(`keydown`, event => {
    myBox.textContent = `😮`;
    myBox.style.backgroundColor = `tomato`;
});

// Add another eventlistener:
document.addEventListener(`keyup`, event => {
    myBox.textContent = `😎`;
    myBox.style.backgroundColor = `lightblue`;
});

// Add another eventlistener:
document.addEventListener(`keydown`, event =>{

    // If statement to make sure that only arrow keys works
    if(event.key.startsWith(`Arrow`)){

        //Add a switch statement to differentiate the arrow movements:
        switch(event.key){
            case `ArrowUp`:
                y -= moveAmount;
                break;
            case `ArrowDown`:
                y += moveAmount;
                break;
            case `ArrowLeft`:
                x -= moveAmount;
                break;
            case `ArrowRight`:
                x += moveAmount;
                break;
        }


        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});

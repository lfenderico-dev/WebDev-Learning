"use strict";

/*

eventListener = Listen for specific events to create
interactive web pages.
    events: click, mouseover, mouseout

    Syntax:
        .addEventListener(events, function)

In the example you will se an event parameter:
    The event parameter is an object provided by the browser that gives data about events (so when you click things...)

*/


// Let's save a reference for the div:
const myBox = document.getElementById(`myBox`);

// Add an event listener with `click` events:
myBox.addEventListener(`click`, event => {
    // This arrow function takes `event.target` (the element itself) and acess some CSS properties modifying them.
    event.target.style.backgroundColor = `tomato`;
    event.target.textContent = `Ouch! 🤕`
});

// Add an event listener with `mouseover` events:
myBox.addEventListener(`mouseover`, event => {
    // This arrow function takes `event.target` (the element itself) and acess some CSS properties modifying them.
    event.target.style.backgroundColor = `yellow`;
    event.target.textContent = `Please no!! 😰`
});

// Add an event listener with `mouseout` events:
myBox.addEventListener(`mouseout`, event => {
    // This arrow function takes `event.target` (the element itself) and acess some CSS properties modifying them.
    event.target.style.backgroundColor = `lightgreen`;
    event.target.textContent = `Click me! 😃`;
});


// You can also refer to other elements in place of `event-target`.
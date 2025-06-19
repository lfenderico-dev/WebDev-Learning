"use strict";

// HOW TO ASSIGN ARRAY ELEMENTS TO VARIABLES:

const pizzas = [`Margherita`, `Capricciosa`, `Marinara`, `Peperoni`];

// Let's declare variables using the position of elements in the array.
const [firstPizza, secondPizza, ...otherPizzas] = pizzas;
// ...otherPizzas will create an array called like that with all the remainin pizzas.

// Print the variables:
console.log(firstPizza);
console.log(secondPizza);
console.log(otherPizzas);
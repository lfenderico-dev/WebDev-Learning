"use strict";

/*
fetch = Function used for making HTTP requests to fetch resources.
        (JSON style data, images, files)
        Simplifies asynchronous data fetching in JavaScript and
        used for interacting with APIs to retrieve and send
        data asynchronously over the web.

        Syntax: fetch(url, {options})

            Options can be:
            - Method:
                - GET -- to get data;
                - POST -- to send data;
                - PUT -- replace data;
                - DELETE -- delete data;
*/


// Let's fetch some info from a website and display it in the console:

// Create the async function:
async function fetchData(){

    // Use try/catch to handle errors:
    try{
        // let's fetch the data, saving it into response.
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/Luxray`);

        // Let's convert the response into a json file:
        const data = await response.json();
        // Let's display the json file with all the data fetched:
        console.log(data);
    }
    catch(error){
        console.error(error);
    }
}

// Call the function to get the data
fetchData();

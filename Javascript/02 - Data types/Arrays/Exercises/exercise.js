" use strict ";

/* Task:
    Let’s try 5 array operations.

    1. Create an array styles with items “Jazz” and “Blues”.
    2. Append “Rock-n-Roll” to the end.
    3. Replace the value in the middle with “Classics”.
    4. Strip off the first value of the array and show it.
    5. Prepend Rap and Reggae to the array.
*/

//1
let styles = [`Jazz`, `Blues`];

//2
styles.push(`Rock-n-Roll`);

//3
styles[1] = `Classics`;

//4
alert( styles.shift() );

//5
styles.unshift(`Rap`, `Raggae`);

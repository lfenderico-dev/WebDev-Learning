"use strict";

// Used to compare values:

/* Syntax:

    switch(x) {
        case value1:
            ....
            break;
        
        case value2:
            ....
            break;
        
        default:
            ....
            break;
    }  
*/

// Example:
let x = 2 * 2;

switch(x) {
    case 10:
        alert(`Impossible`);
        break;
    case 33:
        alert(`It's not that!`);
        break;
    case 4: //Correct one
        alert(`That is right`);
        break;
    default:
        alert(`I don't know!`);
}
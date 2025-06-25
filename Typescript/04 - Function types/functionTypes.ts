// Defining which kind of data type functions accept and return.

// Example: numerical function
function sum(a:number, b:number): number {
    return a + b;
    // This function takes two parameters as numbers and return a number.
};

// Example: void function (void = that returns nothing)
function msg(text:string): void {
    console.log(text);
};



// Call the function 1:
sum(2,5);

// Call the function 2:
msg(`Hello world!`);

// If we try to put another data type as parameter error is going to be given.

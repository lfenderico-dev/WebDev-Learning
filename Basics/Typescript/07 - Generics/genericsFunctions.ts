/*

We need this to create a function/interface that works well with any data type instead of duplicating the code for each data type.

Think of it as: a placeholder for a type that gets filled in when used.

*/

// Example:
function displaySmth<T>(arg: T): T {
    return arg;
}

// Usage:

// We can specify the type like this.
const result1 = displaySmth<string>("Hello World");
const result2 = displaySmth<number>(23);

// We can inference it:
const result3 = displaySmth(`Hi`); // Type inferred as string
const result4 = displaySmth(true); // Type inferred as boolean



// --------------------------------------------------------------------



// MULTIPLE TYPE PARAMETERS WITH GENERICS:

// In this function we are assigning T to the first value and U to the second value. Those will be inferred.
// Then we are saying that the result is an array with those value in it.
function pairValue<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

const result0 = pairValue(40, `Hello`); // [Numeric, String]


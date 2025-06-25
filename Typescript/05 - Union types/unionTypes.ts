// We can also set that a value has more than 1 dataType possible.
// Take this example:
function sum(a:number | string, b:number | string): number {
    return (+a) + (+b);
}
// Here we can accept number and string as parameters.
// The result will be the same (number) because I typecasted in the return statement.
// We can also store types to assign into variables:
type sumType = (number | string)[];  // Doing so we can accept: numbers, strings and arrays.

function sum1(a:sumType, b:sumType): number {
    return (+a) + (+b);
}
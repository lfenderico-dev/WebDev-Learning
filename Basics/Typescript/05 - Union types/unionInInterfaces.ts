interface person {
    // we can set that any key is good to go and we can set up what types are going to be good for the values:
    [anyKey: string]: number | string;
}

// So every key with a number or string value is good to go:
const person1: person = {
    name: `Lorenzo`,
    age: 17,
    city: `Naples`,
    // isStudent = true           this will give error!
};
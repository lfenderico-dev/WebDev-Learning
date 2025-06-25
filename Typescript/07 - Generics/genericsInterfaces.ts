// Create the interface:
interface Container<T> {
    value: T;
}

// Now we can specify the data type:
const container1: Container<string> = {
    value: `hello`,
}

const container2: Container<number> = {
    value: 20,
}

const container3: Container<boolean> = {
    value: true,
}

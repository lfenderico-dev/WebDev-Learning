// Optional property: a not required property. Even if the object does not have it no errors will be pushed.
// To set a property optional just put the `?` after the keyName.

// Let's see this example:
interface cat {
    name: string;   // required
    age: number;    // required
    isMale?: boolean;   // optional
};

const catGregor: cat = {
    name: `Gregor`,
    age: 9
};
// Even though the property `isMale` is not here no error is going to be pushed because it is optional.

// We can also discriminate and separate cases using the properties of interfaces.

// Interface 1:
interface person {
    name: string;
    age: number;
    speaks: () => void;     // A method that returns nothing
    type: `human`;
};

// Interface 2:
interface dog {
    name: string;
    age: number;
    barks: () => void;     // A method that returns nothing
    type: `animal`;
};

// Let's make a function:

// This function accepts as a parameter a dog or a person and returns void.
function makeNoises(dogOrPerson: dog | person): void { 
    switch(dogOrPerson.type){         // Here we separate cases based on the type value of both interfaces 
        case `human`: {
            dogOrPerson.speaks();  // In case it has `human` as value it speaks.
            break;
        }
        case `animal`: {
            dogOrPerson.barks();  // In case it has `animal` as value it barks.
            break;
        }
    }
}
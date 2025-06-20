// You get data from somewhere, TypeScript only knows it's "any"
let someData: any = "hello world";

// TypeScript: "I don't know what this is, could be anything"
someData.toUpperCase(); // Error: might not have toUpperCase method

// You: "Trust me, it's a string!" (type assertion)
let text = someData as string;
text.toUpperCase(); // Works: "HELLO WORLD"
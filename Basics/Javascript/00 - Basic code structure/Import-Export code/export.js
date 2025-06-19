"use strict";

// Let's create some variables and functions to export
export const PI = 3.14;

export function getCircumference(radius) {
    return 2 * PI * radius;
};

export function sum(a, b) {
    return a + b;
};

// To set something exportable use the keyword: `export`.
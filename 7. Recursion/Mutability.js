// An  immutable / unchangeable object is one whose state cannot be modified indirectly by its copy after it is created.
// Arrays in JS are mutable by default.

// Mutable example: Mutating function
const add = (arrayInput, value) => {
    arrayInput.push(value);
    return arrayInput;
};

// Immutable example 1: Pure function 1 using slice() and push()
const add = (arrayInput, value) => {
    copiedArray = arrayInput.slice(0);
    copiedArray.push(value);
    return copiedArray;
};

// Immutable example 2: Pure function 2 using concat()
const add = (arrayInput, value) => {
    return arrayInput.concat(value);
};

// Immutable example 3: Pure function 3 using the spread operator (ES3)
const add = (arrayInput, value) => {
    return [...arrayInput, value];
};

const array = [1,2,3];
console.log(array);
console.log(add(array, 4));
console.log(add(array, 5));

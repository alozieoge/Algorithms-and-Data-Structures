// Write a function which accepts a case and an exponent. 
// It should return the result of raising the base to that exponent.

// power(2,4) >> 16
// power(3,2) >> 9
// power(3,3) >> 27

// Recursive function
function power(base, exponent) {
    if (exponent == 0) return 1;

    return base * power(base, exponent - 1);
}

// Iterative function
function power(base, exponent) {
    result = 1;
    for (let i = exponent; i > 0; i--) {
        result *= base;
    }

    return result;
}

power(5,3)

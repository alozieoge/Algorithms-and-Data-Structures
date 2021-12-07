// Write a function that returns the nth number in the Fibonacci sequence. 
// [0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,...]

function fibonacci(n) {
    if (n <= 2) return 1

    return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(8)

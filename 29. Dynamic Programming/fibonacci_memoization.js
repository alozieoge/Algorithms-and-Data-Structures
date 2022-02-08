// function fib_memo(n, memo = []) {
//     if (memo[n] != undefined) return memo[n];
//     if (n <= 2) return 1; 

//     var result = fib(n - 1, memo) + fib(n - 2, memo);
//     memo[n] = result;
//     return result;
// }

function fib_memo(n, memo = [undefined, 1, 1]) {
    if (memo[n] != undefined) return memo[n];

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}

fib_memo(45);

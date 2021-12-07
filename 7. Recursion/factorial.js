// Return the factorial of the input number.

// Iterative solution
function factorial(num) {
  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
}

// Recursive solution
function factorial(num) {
  if (num == 1) return 1;
  
  return num * factorial(num - 1);
}
  

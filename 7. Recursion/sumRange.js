// Return the sum of numbers in a range starting from a given value down to 1.

function sumRange(num) {
  // Base case
  if (num == 1) {
    return 1;
  }
  
  // Recursion call with different inputs each time
  return num + sumRange(num - 1);
}

sumRange(4)

// Count down from the given value to 1. 

// Iterative function
function countDown(num) {
  for (let i = num; i > 0; i--) {
    console.log(i);
  } 
  console.log("All done!");
}

// Recursive function
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

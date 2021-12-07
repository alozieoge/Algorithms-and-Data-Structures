// Collect all the odd values in an array.

// Solution 1: Helper method recursion
function collectOddValues(arr) {
  let result = []
  
  // Helper recursive method 
  function helper(helperInput) {
    if (helperInput == []) 
      return [];
    
    if (helperInput[0] % 2 != 0) {
      result.push(helperInput[0])
    }
    
    return helper(helperInput.slice(1));
  }
  
  result = helper(arr);
  return result
}

collectOddValues([1,2,3,4,5,6,7,8,9]) // >> [1,3,5,7,9]


// Solution 2: Pure recursion
function collectOddValues(arr) {
  let result = []
  
  if (arr.length == 0)
    return result;
  
  if (arr[0] % 2 != 0) {
    result.push(arr[0]);
  }
  
  result = result.concat(collectOddValues(arr));
  return result;
}

collectOddValues([1,2,3,4,5]) // >> [1,3,5]
// How it works:
// [1].concat(collectOddValues([2,3,4,5]))
//                 [].concat(collectOddValues([3,4,5]))
//                                 [3].concat(collectOddValues([4,5]))
//                                                     [].concat(collectOddValues([5]))
//                                                                     [5].concat(collectOddValues([]))
//                                                                                     []


     
    

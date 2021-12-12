// Merging Sorted Arrays
// Define a function that takes 2 sorted arrays as inputs. 
// Create an empty array. 
// Take a look at the smallest values (first elements) in each input array. 
// While there are still values we haven't looked at ...
//  If the value in the first array is smaller than the value in the second array, push the value in the first array to the result and move on to the next value in the first array.
//  If the value in the first array is larger than the value in the second array, push the value in the second array to the result and move on to the next value in the second array.
//  Once an array (first or second) is exhausted, push all remaining values from the other array to the result.

// MEE
// function merge(arr1, arr2) {
//     result = [];
//     let i = 0;
//     let j = 0;

//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] <= arr2[j]) {
//             result.push(arr1[i]);
// //             console.log(result, arr1[i]);
//             i++;  
//         }
//         else {
//             result.push(arr2[j]);
// //             console.log(result, arr2[j]);
//             j++;
//         }
//     }

//     if (i == arr1.length) {
//         result = result.concat(arr2.slice(j));
// //         console.log(result, arr2.slice(j));
//     }
//     else {
//         result = result.concat(arr1.slice(i));
// //         console.log(result, arr1.slice(i));
//     }
    
//     return result;
// }


// Merging and sorting function
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        }
        else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }

    return results;
}

// merge([1,10,50], [2,14,99,100])
// merge([], [1,3])
// merge([100], [1,2,3,4,5,6])

// Merge Sort Pseudocode
// Define a function that takes an unsorted array of numbers
// Break up the array into halves until you have arrays that are empty or have 1 element. 
//  Use .slice() to half the (sub)arrays and recursion to repeat the process until the base case is satisfied.
// Once you have smaller sorted arrays, merge those arrays wih other sorted arrays until you are back to the full length of the array. 
// Once the array has been merged back together, return the merged and sorted array. 

// function mergeSort(arr) {
//     let result1 = [];
//     let result2 = [];
//     if (arr.length == 0 || arr.length == 1) return arr;

//     let midIdx = Math.ceil(arr.length / 2);
//     result1 = result1.concat(mergeSort(arr.slice(0,midIdx)));
//     result2 = result2.concat(mergeSort(arr.slice(midIdx)));
// //     console.log(result1, result2);

// //     result = result.concat(mergeSort(arr.slice(0,midIdx))); //.concat(mergeSort(arr.slice(midIdx)));
//     return result1;

// //     half(arr);
// //     merge(result)
// }

// function split(arr) {
//     result = [];
//     for (let val of arr) {
//         result.push([val]);
//     }
//     return result;
// }


// split([2,50,10,1,100,99,14])


// Pseudocode
// Define a recursive function that takes an array.
// Define the base case to return the input array if the array length is less than or equal to 1.
// Calculate the mid-point of the input array.
// Get the left half of the input array using .slice() - from start to midpoint.
// Call this function recursively on the left half of the array.
// Get the right half of the input array using .slice() - from midpoint to end.
// Call this function recursively on the right half of the array. 
// Merge the left and right halves obtained from the recursive function calls.
// Return the result.


// Merge sort
// Splitting, merging and sorting
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    // Split the array into 2 halves and recursively call mergeSort on each half to further split ...
    let mid = Math.floor(arr.length / 2);
    let left =  mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    // Merge the left and right arrays and return the result
    return merge(left, right);

}

// mergeSort([2,50,10,1,100,99,14])
// mergeSort([10,24,76,73,72,1,9])
mergeSort([10,24,76,73])

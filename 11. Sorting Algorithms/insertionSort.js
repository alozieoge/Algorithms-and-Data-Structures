// Define a function that takes an unsorted array of numbers. 
// Start by picking the 2nd element in the array. 
// Compare the 2nd element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left portion) to place the elelemtn in the correct position. 
// Repeat until the array is sorted. 

// MEE
// function insertionSort(arr) {
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     }

//     for (let i = 1; i < arr.length; i++) {
//         for (let j = i; j >= 0; j--) {
//             console.log(arr, arr[j - 1], arr[j]);
//             if (arr[j] < arr[j - 1]) {
//                 swap(arr, j, j - 1);
//             }
//             else {
//                 console.log("PASS COMPLETE!")
//                 break;
//             }
//         }
//     }
//     return arr;
// }

// insertionSort([3,44,38,5,47,15])


// Insertion Sort - ES5
function  insertionSort(arr) {
//     console.log(arr);
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i]; // Value to be inserted
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j]; // Make space for currentVal by moving the jth element to the right
        }
        arr[j + 1] = currentVal; // Insert currentVal at the next j which did not satisfy the condition in the inner loop
//         console.log(arr); 

    }
    return arr;
}


insertionSort([2,1,9,76,4])

// Define a function that takes an array of unsorted numbers. 
// Start looping from the end of the array to the beginning, with a variable i. 
// Start an inner (nested) loop with a variable j, from the beginning to i - 1.
// If arr[j] > arr[j + 1], swap these 2 values. 
// Return the sorted array.

// Swapping
// ES5
// function swap(arr, idx1, idx2) {
//     var temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[idx2] = temp;
//     return arr;
// }

// ES2015
// const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     }

// MEE solution
// function bubbleSort(arr) {
//     for (let i = arr.length - 1; i > 0; i--) {
//         for (let j = 0; j <= i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 arr = swap(arr, j, j + 1);
//             }
//         }
//     }
//     return arr;
// }

// bubbleSort([29,10,14,30,37,14,18])

// // Naive approach - sorting from beginning to the end for every element
// function bubbleSort(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         for (var j = 0; j < arr.length; j++) {
//             console.log(arr, arr[j], arr[j + 1]);
//             if (arr[j] > arr[j + 1]) {
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// Optimized approach + ES5 for swapping - sorting from beginning to the end of the outer loop
// function bubbleSort(arr) {
//     for (var i = arr.length; i > 0; i--) {
//         for (var j = 0; j < i - 1; j++) {
//             console.log(arr, arr[j], arr[j + 1]);
//             if (arr[j] > arr[j + 1]) {
//                 var temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//         console.log("ONE PASS COMPLETE!")
//     }
//     return arr;
// }


// Optimized approach + ES2015 for swapping + Refactored
// function bubbleSort(arr) {
//     const swap = (arr, idx1, idx2) => {[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];}

//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 swap(arr, j, j + 1);
//             }
//         }
//     }
//     return arr;
// }


// bubbleSort([37,45,29,8,12,88,-3])


// Optimized for nearly sorted array + ES5 for swapping
function bubbleSort(arr) {
    var noSwaps // Did we swap values during a pass? T or F
    for (var i = arr.length; i > 0; i--) {
        noSwaps = true; // Start each pass assuming no swap
        for (var j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1]);
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false; // A swap was done in this pass
            }
        }
        console.log("ONE PASS COMPLETE!")
        if (noSwaps) break; // No need to continue checking each element since there was no swap in the previous pass.
    }
    return arr;
}

bubbleSort([8,1,2,3,4,5,6,7])



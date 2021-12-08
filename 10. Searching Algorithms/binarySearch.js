// Write a function that accepts a sorted array and a value. 
// Create a left pointer at the start of the array and a right pointer at the end of the array. 
// While the left pointer comes before the right pointer:
//  Create a pointer in the middle. 
//  If you find the value, return its index.
//  If the value is too small, move the left pointer up.
//  If the value is too large, move the right pointer down down. 
// If you never found the value, return -1.

// function binarySearch(arr, val) {
//     let left = 0;
//     let right = arr.length - 1;
//     let steps = 0;

//     while (left < right) {
//         let middle = Math.floor((left + right) / 2);

//         if (arr[middle] == val)
//             return middle;
//         else if (arr[middle] > val)
//             right = --middle;
//         else
//             left = ++middle;
//         steps++;
//     }
//     console.log(steps);
//     return -1;
// }


// function binarySearch(arr, val) {
//     var start = 0;
//     var end = arr.length - 1;
//     var middle = Math.floor((start + end) / 2);
    
//     while (arr[middle] != val && start <= end) {
//         console.log(start, middle, end)
//         if (val < arr[middle]) {
//             end = middle - 1;
//         }
//         else {
//             start = middle + 1;
//         }
//         middle = Math.floor((start + end) / 2);
//     }
//     console.log(start, middle, end);

//     if (arr[middle] == val) {
//         return middle;
//     }
//     return -1;
// }

// Refactored
function binarySearch(arr, val) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);
    
    while (arr[middle] != val && start <= end) {
        if (val < arr[middle]) end = middle - 1;
        else start = middle + 1;
        middle = Math.floor((start + end) / 2);
    }

    return arr[middle] == val ? middle : -1;
}

// binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 4)
binarySearch([2,5,6,9,13,15,28,30], 50)

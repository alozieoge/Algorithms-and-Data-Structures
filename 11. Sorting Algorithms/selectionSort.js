// Define a function that takes an unsorted array of numbers. 
// Store the first element as the smallest value you have seen so far. 
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller number is found, desginate that smaller number to be the new minimum and continue until the end of the array. 
// If the new "minimum" is not the value (index) you initially began with, swap the 2 values. 
// Repeat this process starting with the next unsorted element until the array is sorted. 

// MEE
// function selectionSort(arr) {
//     const swap = (arr, idx1, idx2) => {[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];}

//     for (let i = 0; i < arr.length; i++) {
//         let minIdx = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             console.log(arr, arr[minIdx], arr[j])
//             if (arr[j] < arr[minIdx]) {
//                 minIdx = j;
//             }
//         }
//         console.log("ONE PASS COMPLETE! SWAP MIN!")
//         swap(arr, minIdx, i);
//     }
//     return arr;
// }

// selectionSort([19,44,38,5,47,15])


// Selection Sort + ES5
// function selectionSort(arr) {

//     for (var i = 0; i < arr.length; i++) {
//         var lowest = i;
//         for (var j = i + 1; j < arr.length; j++) {
// //             console.log(i, j);
//             if (arr[j] < arr[lowest]) {
//                 lowest = j;
//             }
//         }
// //         console.log(arr)
// //         console.log("SWAPPING TO: ")
//         if (i != lowest) { // Only swap if the found minimum is not the same value (index) you started the pass with.  
//             console.log(i, lowest)
//             var temp = arr[i];
//             arr[i] = arr[lowest];
//             arr[lowest] = temp;
//         }
        
// //         console.log(arr)
// //         console.log("*************")

//     }
//     return arr;
// }

// Selection Sort + ES2015
function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => {[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];}

    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if (i != lowest) swap(arr, i, lowest);
    }
    return arr;
}

selectionSort([0,2,34,22,10,19,17])

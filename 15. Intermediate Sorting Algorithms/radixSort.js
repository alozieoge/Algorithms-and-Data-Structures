// Radix Helper Functions
// 1. getDigit(num, place)
// 2. digitCount(num)
// 3. mostDigits(nums)

// 1. getDigit(num, place) - returns the digit in num at the given place value. 
// getDigit(12345, 0); >> 5
// getDigit(12345, 1); >> 4
// getDigit(12345, 2); >> 3
// getDigit(12345, 3); >> 2
// getDigit(12345, 4); >> 1
// getDigit(12345, 5); >> 0
// getDigit(12345, 6); >> 0
// ...

// Pseudocode
// Define a function that takes a number and a place value. 
// Calculate the absolute of the number. 
// Divide the absolute by 10 raised to the power of the place value. 
// Floor the above result. 
// Return the modulus 10 of the above result.

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// getDigit(7232, 2)
// getDigit(7232, 4)

// 2. digitCount(num) - returns the number of digits in num. 
// digitCount(1); >> 1
// digitCount(12); >> 2
// digitCount(314); >> 3

// Pseudocode
// If the number is 0, return 1 (We can't find log10 of 0)
// Find the absolute of the number. (We can't find log10 of a negative number)
// Find the log10 of the above result.
// Floor the above result. 
// Add 1 and return the result.

function digitCount(num) {
    if (num == 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// digitCount(314)
// digitCount(2745)
// digitCount(-21388)

// 3. mostDigits(nums) - Given a list of numbers, returns the number of digits in the largest numbers in the list. 
// mostDigits([1234, 56, 7]); >> 4
// mostDigits([1, 1, 11111, 1]); >> 5
// mostDigits([12, 34, 56, 78]); >> 2

// Psuedocode
// Define a function to take an array of numbers. 
// For each number in the array, find the number of digits. 
// Find the maximum number of digits in the array. 
// Return the maximum value.

// MEE
// function mostDigits(nums) {
//     let maxDigits = 0;
//     for (let i = 0; i < nums.length; i++) {
//         count = digitCount(nums[i]);
//         if (count > maxDigits) {
//             maxDigits = count;
//         }
//     }
//     return maxDigits;
// }

// mostDigits([1234, 56, 7])
// mostDigits([12, 34, 56, 78])
// mostDigits([1, 1, 11111, 1])

// CS
function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// mostDigits([23,567,89,12234324,90])

// Radix Sort

// Pseudocode
// Define a function that accepts an unsorted array of numbers. 
// Figure out how many digits the largest number has / the largest number of digits in the array. 
// Loop from k = 0 up to this largest number of digits. 
// For each iteration of the loop:
// - Create buckets (empty arrays) for each digit (0 to 9). 
// - Place each number in the corresponding bucket based on its kth digit. 
// - Replace our existing array with values in our buckets starting with 0 and going up to 9. 
// Return the list at the end.

// MEE
// function radixSort(arr) {
//     let maxDigits = mostDigits(arr);

//     for (let k = 0; k < maxDigits; k++) {
//         const buckets = new Array(10);
//         for (let i = 0; i < 10; i++) {
// //             buckets[i] = new Array();
//             buckets[i] = [];
//         }
//         for (let j = 0; j < arr.length; j++) {
//             bin = getDigit(arr[j], k)
//             buckets[bin].push(arr[j]);
//         }
// //         console.log(buckets);
//         arr = [].concat(...buckets);
//         console.log(arr);
//     }
//     return arr;
// }


// radixSort([3221, 1, 10, 9680, 577, 9420, 7, 5622, 4793, 2030, 3138, 82, 2599, 743, 4127])


// CS
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    console.log(maxDigitCount);

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => [])

        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
//         console.log(digitBuckets);
        nums = [].concat(... digitBuckets);
//         console.log(nums);
    }
    return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852])

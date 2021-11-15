// Write a function which accepts 2 arrays. 
// The function should return true if every value in the first array has its corresponding value squared in the second array. 
// The frequency of values must be the same.

// Examples:
// sameSquared([1,2,3], [4,1,9]) >> true (order should not matter)
// sameSquared([1,2,3], [1,9])   >> false
// sameSquared([1,2,1], [4,4,1]) >> false (must be same frequency)


// Naive solution: O(n^2) because of nested loops
// function sameSquared(arr1, arr2) {
//     if (arr1.length != arr2.length) {
//         return false;
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);  // indexOf() is an O(n) operation
//         if (correctIndex == -1) {
//             return false;
//         }
//         console.log(arr2);
//         arr2.splice(correctIndex, 1)  // delete the item (1 item) from 'arr2' at index 'correctIndex'
//     }
//     return true;
// }

// same([1,2,3,2], [9,1,4,4])


// Optimal solution: O(n)
function sameSquared(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key ** 2] != frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

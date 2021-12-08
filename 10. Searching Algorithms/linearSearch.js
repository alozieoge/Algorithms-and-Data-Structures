// Write a function that accepts an array and a value. 
// Loop through the array and check if the current array element is equal to the value. 
// If it is, return the index of the element. 
// If the value is never found, return -1.

function linearSearch(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
            return i;
        }
    }
    return -1;
}

linearSearch([1,2,3,4,5,6], 6)

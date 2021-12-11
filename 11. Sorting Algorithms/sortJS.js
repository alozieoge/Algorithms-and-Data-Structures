// Javascript default sort() method. 
// [6,4,15,10].sort()
// ["Steele", "Colt", "Data Structures", "Algorithms"].sort()

// Using a comprarator function to sort numbers in ascending order
// function numCompare(num1, num2) {
//     return num1 - num2;
// }

// [6,4,15,10].sort(numCompare)

// Sort numbers in descending order
// function numCompare(num1, num2) {
//     return num2 - num1;
// }

// [6,4,15,10].sort(numCompare)

// Sort by length of string, shortest to longest
// function compareByLen(str1, str2) {
//     return str1.length - str2.length;
// }

// ["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen)

// Sort by length of string, longest to shortest
function compareByLen(str1, str2) {
    return str2.length - str1.length;
}

["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen)

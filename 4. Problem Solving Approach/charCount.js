// function charCount(str) {
//     var obj = {}; 
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i].toString().toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++;
//             }
//             else {
//                 obj[char] = 1;
//             }
//         }
//     }
//     return obj;
// }

// Refactor:
// Use a for(var item of collection) for looping through a string to return each character, instead of a for() loop with index i.
// Replace the if ... else ... block using a single-line statement.
// Replace regex check with a seperate function to check if the char is alphanumeric based on ASCII codes i.e. "".charCodeAt()
// Convert to lowercase only if the char is alphanumeric.

function isAlphaNumeric(char) {
    var code  = char.charCodeAt(0);
    if (!(code > 47 && code < 58) &&  // not numeric (0-9)
        !(code > 64 && code < 91) &&  // not upper alphabet (A-Z)
        !(code > 96 && code < 123)) { // not lower alphabet (a-z)
       return false;
    }
    return true;
}

function charCount(str) {
    var obj = {}; 
    for (var char of str.toString()) {
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1; // if obj[char] exists, then obj[char]++ else obj[char] = 1
        }
    }
    return obj;
}



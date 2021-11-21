// Given 2 strings, write a function to determine if the second string is an anagram of the first. 
// An anagram is a word, phrase, or name formed by re-arranging the letters of another, using all the letters in the original word only once 
// e.g. "cinema" is an anagram of "iceman".
// All lower case input strings.
// No spaces in input strings.

// validAnagram('', '') >> true
// validAnagram('aaz', 'zza') >> false
// validAnagram('anagram', 'nagaram') >> true
// validAnagram('rat', 'car') >> false
// validAnagram("awesome", "awesom") >> false
// validAnagram("qwerty", "qeywrt") >> true
// validAnagram("texttwisttime", "timetwisttext") >> true

// function validAnagram(str1, str2) {
//     if (str1.length != str2.length) {
//         return false
//     }

//     let frequencyCounter1 = {}
//     let frequencyCounter2 = {}

//     for (let val of str1) {
//         frequencyCounter1[val] = ++frequencyCounter1[val] || 1
//     }
//     for (let val of str2) {
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
//     }

//     console.log(frequencyCounter1)
//     console.log(frequencyCounter2)

//     for (key in frequencyCounter1) {
//         if (!(key in frequencyCounter2)) {
//             return false
//         }
//         if (frequencyCounter1[key] != frequencyCounter2[key]) {
//             return false
//         }
//     }
//     return true;
// }


function validAnagram(first, second) {
    if (first.length != second.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)

    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // if can't find letter or letter count is zero, then it's not an anagram
        if (!lookup[letter]) {
            return false
        }
        else {
            lookup[letter] -= 1;
        }
        console.log(lookup)
    }
    return true;
}

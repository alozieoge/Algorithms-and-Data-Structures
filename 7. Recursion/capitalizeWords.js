// Write a recursive function to capitalize each word in an array of words

function capitalizeWords(arr) {
    let result = [];
    if (arr.length == 0) return result;

    result.push(arr[0].toString().toUpperCase());

    return result.concat(capitalizeWords(arr.slice(1)));
}

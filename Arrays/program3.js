// Calculate the Sum of Elements in an Array

function sum(arr){
    if (arr.length < 1) return NaN;
    return arr.reduce((currentSum, currentElement) => currentSum + currentElement, 0);
}

// Tests

console.log(sum([]));  // NaN
console.log(sum([5]));  // 5
console.log(sum([3, 5, 2, 5, 2, 5, 3]));  // 25
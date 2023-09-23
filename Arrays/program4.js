// Calculate the Average of Elements in an Array

function calcAverage(arr){
    if (arr.length < 1) return NaN;
    return arr.reduce((currentSum, currentElement) => currentSum + currentElement, 0) / arr.length;
}

// Tests

console.log(calcAverage([]));  // NaN
console.log(calcAverage([3]));  // 3
console.log(calcAverage([1, 5, 3, 6, 3, 6, 3]));  // 3.85
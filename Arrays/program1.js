// Find the Maximum Element in an Array

function getMaximumElement(arr){
    if (arr.length < 1) return NaN;
    return arr.reduce((maxElement, currentValue) => currentValue > maxElement ? currentValue : maxElement, arr[0]);
}

// Tests

console.log(getMaximumElement([1]));  // 1
console.log(getMaximumElement([]));  // NaN
console.log(getMaximumElement([1, 4, 5, 2, 5, 2, 4, 2]));  // 5
// Find the Minimum Element in an Array

function getMinimumElement(arr){
    if (arr.length < 1) return NaN;
    return arr.reduce((minElement, currentElement) => currentElement < minElement ? currentElement : minElement, arr[0]);
}

// Tests

console.log(getMinimumElement([1]));  // 1
console.log(getMinimumElement([]));  // NaN
console.log(getMinimumElement([4, 5, 2, 5, 2, 4, 2]));  // 2
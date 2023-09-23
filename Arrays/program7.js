// Find the Second Largest Element in an Array

function getSecondLargestElement(arr){
    if (arr.length < 1) return NaN;

    let largestElement = -Infinity;
    let secondLargestElement = -Infinity;

    for (let element of arr){
        if (element > largestElement){
            secondLargestElement = largestElement;
            largestElement = element;
        } else if (element != largestElement && element > secondLargestElement){
            secondLargestElement = element;
        }
    }

    return secondLargestElement == -Infinity ? NaN : secondLargestElement;
}

// Tests

console.log(getSecondLargestElement([5, 5, 5, 5]));  // NaN
console.log(getSecondLargestElement([]));  // NaN
console.log(getSecondLargestElement([4, 5, 5]));  // 4
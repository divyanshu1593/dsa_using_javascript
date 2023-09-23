// Find the Second Smallest Element in an Array

function getSecondSmallestElement(arr){
    if (arr.length < 1) return NaN;

    let SmallestElement = Infinity;
    let secondSmallestElement = Infinity;

    for (let element of arr){
        if (element < SmallestElement){
            secondSmallestElement = SmallestElement;
            SmallestElement = element;
        } else if (element != SmallestElement && element < secondSmallestElement){
            secondSmallestElement = element;
        }
    }

    return secondSmallestElement == Infinity ? NaN : secondSmallestElement;
}

// Tests

console.log(getSecondSmallestElement([5, 5, 5, 5]));  // NaN
console.log(getSecondSmallestElement([]));  // NaN
console.log(getSecondSmallestElement([4, 5, 5]));  // 5
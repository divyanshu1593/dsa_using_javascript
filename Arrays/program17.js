// Search for an Element in an Array (Binary search)

function binarySearch(arr, element){
    let leftPointer = 0;
    let rightPointer = arr.length-1;

    while (leftPointer <= rightPointer){
        let mid = Math.floor((leftPointer + rightPointer) / 2);

        if (arr[mid] == element) return mid;
        
        if (arr[mid] < element){
            leftPointer = mid + 1;
        } else {
            rightPointer = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 4));  // 3
console.log(binarySearch([1, 2, 3, 4, 5], 5));  // 4
console.log(binarySearch([1, 2, 3, 4, 5], 1));  // 0
console.log(binarySearch([1, 2, 3, 4, 5], 6));  // -1
// Search for an Element in an Array (Linear serach)

function linearSearch(arr, element){
    for (let i=0; i<arr.length; i++ ){
        if (arr[i] == element) return i;
    }
    return -1;
}

// Tests

console.log(linearSearch([1, 2, 3, 4, 5], 3));  // 2
console.log(linearSearch([1, 2, 3, 4, 5], 10));  // -1
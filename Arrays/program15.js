// Find the Missing Element in an Array
// There will be consecutive numbers in the array with one number missing in between, find it.

function findMissingNumber(arr){
    for (let i=0; i < arr.length-1; i++){
        if (arr[i+1] == arr[i] + 2){
            return arr[i] + 1;
        }
    }
}

// Tests

console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9]));  // 5
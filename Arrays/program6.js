// Check if an Array is Palindrome

function isPalindrome(arr){
    for (let i=0; i < Math.floor(arr.length / 2); i++){
        if (arr[i] != arr[arr.length - (i+1)]) return false;
    }
    return true;
}

// Tests

console.log(isPalindrome(['r', 'a', 'c', 'e', 'c', 'a', 'r']));  // true
console.log(isPalindrome([1, 2, 2, 1]));  // true
console.log(isPalindrome([1, 2, 3, 4, 5]));  // false
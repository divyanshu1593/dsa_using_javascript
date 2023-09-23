// Reverse an Array

function reverseArray(arr){
    if (arr.length < 1) return NaN;
    
    for (let i=0; i < Math.floor(arr.length / 2); i++){
        [arr[i], arr[arr.length - (i+1)]] = [arr[arr.length - (i+1)], arr[i]];  // swapping elements
    }
}

// Tests

let arr = [1, 2, 3, 4, 5];
reverseArray(arr);
console.log(arr);  // [ 5, 4, 3, 2, 1 ]
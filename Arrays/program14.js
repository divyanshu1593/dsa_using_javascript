// Rotate an Array to Right

function rotateRightByOne(arr){
    if (arr.length < 1) throw new Error('Size of the array should be at least 1');

    let lastElement = arr.pop();
    
    for (let i = arr.length-1; i >= 0; i--){
        arr[i+1] = arr[i];
    }

    arr[0] = lastElement;
}

function rotateRight(arr, rotateBy){
    rotateBy %= arr.length;

    for (let i=0; i<rotateBy; i++){
        rotateRightByOne(arr);
    }
}

// Tests

let arr = [1, 2, 3, 4, 5];
rotateRight(arr, 3);
console.log(arr);  // [3, 4, 5, 1, 2]
// Merge Two Arrays

function getMergedArray(arr1, arr2){
    let mergedArray = [];

    for (let element of arr1){
        mergedArray.push(element);
    }

    for (let element of arr2){
        mergedArray.push(element);
    }

    return mergedArray;
}

// Tests

let arr1 = [1, 2, 3];
let arr2 = [4, 5];

console.log(getMergedArray(arr1, arr2));
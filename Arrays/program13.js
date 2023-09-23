// Find the Difference of Two Arrays

function getDifferenceBetweenArrays(arr1, arr2){
    let diffArray = [];
    arr2 = new Set(arr2);

    for (let element of arr1){
        if (!arr2.has(element)){
            diffArray.push(element);
        }
    }

    return diffArray;
}

// Tests

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 4];
console.log(getDifferenceBetweenArrays(arr1, arr2));  // [1, 3, 5]
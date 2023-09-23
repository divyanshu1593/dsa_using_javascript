// Find the Union of Two Arrays, It is assumed that array does not have duplicate element

function getUnionOfArrays(arr1, arr2){
    let set = new Set(arr1);

    let union = arr1.map(element => element);

    for (let element of arr2){
        if (!set.has(element)){
            set.add(element);
            union.push(element);
        }
    }

    return union;
}

// Tests

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [4, 5, 6, 7, 8, 9, 10];

console.log(getUnionOfArrays(arr1, arr2));  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
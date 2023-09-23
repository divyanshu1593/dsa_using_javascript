// Find the Intersection of Two Arrays, It is assumed that array does not have duplicate element

function getIntersectionOfArrays(arr1, arr2){
    arr1 = new Set(arr1);
    let addedElements = new Set();

    let intersection = [];

    for (let element of arr2){
        if (arr1.has(element) && !addedElements.has(element)){
            addedElements.add(element);
            intersection.push(element);
        }
    }

    return intersection;
}

// Tests

let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [4, 5, 6, 7, 8, 9, 10];

console.log(getIntersectionOfArrays(arr1, arr2));  // [4, 5, 6]
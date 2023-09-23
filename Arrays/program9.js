// Remove Duplicates from an Array

function removeDuplicates(arr){
    let uniqueArr = [];
    let set = new Set();

    for (let element of arr){
        if (!set.has(element)){
            set.add(element);
            uniqueArr.push(element);
        }
    }

    uniqueArr.forEach((element, index) => arr[index] = element);
    arr.length = uniqueArr.length;
}

// Tests

let arr = [3, 5, 3, 6, 4, 2, 4, 3, 5, 5];
removeDuplicates(arr);
console.log(arr);
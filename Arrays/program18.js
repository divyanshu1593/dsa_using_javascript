// Find the Leaders in an Array (Leaders are elements which have no greater elements on the right side)

function findIndexOfLeaders(arr){
    let leaders = [];

    let currentMaximumElement = -Infinity;

    for (let i=arr.length-1; i>=0; i--){
        if (arr[i] >= currentMaximumElement){
            leaders.push(i);
            currentMaximumElement = arr[i];
        }
    }

    return leaders;
}

// Tests

console.log(findIndexOfLeaders([2, 4, 2, 5, 2, 3, 5, 6 , 5, 3, 5]));  // [ 10, 8, 7 ]
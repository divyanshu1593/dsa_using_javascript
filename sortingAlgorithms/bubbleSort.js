function bubbleSort(arr){
    for (let i = arr.length - 1; i > 0; i--){
        for (let j = 0; j < i; j++){
            if (arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
}

let arr = [3, 5, 2, 5, 2];

bubbleSort(arr);

console.log(arr);

/*
Output

[ 2, 2, 3, 5, 5 ]
*/
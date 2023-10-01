function insertionSort(arr){
    for (let i = 1; i < arr.length; i++){
        let element = arr[i];

        let j;
        for (j = i; j > 0 && arr[j-1] > element; j--) arr[i] = arr[i-1];

        arr[j] = element;
    }
}

let arr = [5, 3, 1, 4, 9];

insertionSort(arr);

console.log(arr);

/*
Output

[ 1, 4, 5, 5, 9 ]
*/
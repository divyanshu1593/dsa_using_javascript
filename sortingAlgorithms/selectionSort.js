function selectionSort(arr){
    for (let i = 0; i < arr.length - 1; i++){
        let minIndex = i;

        for (let j = i; j < arr.length; j++){
            if (arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
}

let arr = [4, 6, 2, 6, 2, 5];

selectionSort(arr);

console.log(arr);

/*
Output

[ 2, 2, 4, 5, 6, 6 ]
*/
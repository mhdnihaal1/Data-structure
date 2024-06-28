function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
        }
    }
    return arr;
}



 
let arr = [3,5,1,6,7,2,5,8,4,9]
let fun = selectionSort(arr)
console.log(fun)

//logic
//iterte through all element and check which is small and swap it to the first index
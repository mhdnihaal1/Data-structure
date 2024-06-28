function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
//logic
// start from index 1 and check to the adjacent elements on second loop until it reach its position

// 

let arr = [3,5,1,6,7,2,5,8,4,9]
let fun = insertionSort(arr)
console.log(fun)
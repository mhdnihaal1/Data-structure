function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 1; i < n; i++) {
            if (arr[i - 1] > arr[i]) {
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]] ; // Swap
                swapped = true;
            }
        }
        n--;
    } while (swapped);
    return arr;
}

let arr = [3,5,1,6,7,2,5,8,4,9]
let fun = bubbleSort(arr)
console.log(fun)
//logic
//swap each adjacent element until it get sorted



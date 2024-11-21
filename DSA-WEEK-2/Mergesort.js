// function mergeSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     let mid = Math.floor(arr.length / 2);
//     let left = arr.slice(0, mid);
//     let right = arr.slice(mid);
//     return merge(mergeSort(left), mergeSort(right));
// }
// function merge(left, right) {
//     let result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;
//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             result.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             result.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }
//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// }
//============simple method than above 

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; 
    }
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); 
    const right = mergeSort(arr.slice(mid));  
    return merge(left, right);
}
function merge(left, right) {
    let sortedArray = [];
    let i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }
    return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}


let arr = [3,5,1,6,7,2,5,8,4,9]
let fun = mergeSort(arr)
console.log(fun)


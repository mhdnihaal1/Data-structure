
function findUncommonElements(arr1, arr2) {

    let set1 = new Set(arr1);
    let set2 = new Set(arr2);

    let uncommon1 = arr1.filter(item => !set2.has(item));
    
    let uncommon2 = arr2.filter(item => !set1.has(item));

    return [...uncommon1, ...uncommon2];
}
let arr1 = [1, 5, 3, 6, 7, 7];
let arr2 = [5, 8, 4, 9];
console.log(findUncommonElements(arr1, arr2)); 
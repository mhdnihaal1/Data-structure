//======================flattern a jagged array recursion =============================
// function flattenArray(arr) {
//     function flattenHelper(input) {
//         let result = [];
//         for (let i = 0; i < input.length; i++) {
//             if (Array.isArray(input[i])) {
//                 result = result.concat(flattenHelper(input[i]));
//             } else {
//                 result.push(input[i]);
//             }
//         }
//         return result;
//     }
    
//     return flattenHelper(arr);
// }

// let jaggedArray = [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]];

// let flattenedArray = flattenArray(jaggedArray);

// console.log(flattenedArray);


//==================================sum of all numbers=========================

// function sumArray(arr) {
//     if (arr.length === 0) {
//         return 0;
//     }
    
//     return arr[0] + sumArray(arr.slice(1));
// }

// const numbers = [1, 2, 3, 4, 5];
// const result = sumArray(numbers);
// console.log(result);

//==================================string reverse==========================



// function reverseString(str) {
//     if (str.length <= 1) {
//         return str;
//     }
    
//     return str[str.length - 1] + reverseString(str.slice(0,-1));
// }

// const originalString = "Hello, World!";
// const reversedString = reverseString(originalString);
// console.log(reversedString); 

//======================================cheking array is a palindrome=====================================

// function isPalindrome(str) {
//     if (str.length <= 1) {
//         return true;
//     }

//     if (str[0] !== str[str.length - 1]) {
//         return false;
//     }
    
//     return isPalindrome(str.slice(1, -1));
// }
// const testString = "madam";
// console.log(isPalindrome(testString)); 

// const testString2 = "hello";
// console.log(isPalindrome(testString2)); 


//=================================recursive binary search===================

// function first(arr,target){
//     function second(left,right){
//       if(left > right){
//         return -1
//       }
//       const middle = Math.floor((left + right)/2)

//       if(target == arr[middle]){
//         return middle
//       }

//       if(target < arr[middle]){
//         return second(left,middle -1)
//       }else{
//         return second(middle +1,right)
//       }
//     }
//     return second(0,arr.length-1)
// }


// const ar = [1,2,3,4,5,6,7,8,9]
// const target = 4;
// const fir = first(ar,target)
// console.log(fir)

//================================ Recursive LinearSearch========================================

// function recursiveLinearSearch(arr, target, index = 0) {
//     if (index >= arr.length) {
//         return -1; 
//     }

//     if (arr[index] === target) {
//         return index; 
//     }
//     return recursiveLinearSearch(arr, target, index + 1);
// }

// const array = [10, 20, 30, 40, 50];
// const target = 30;

// console.log(recursiveLinearSearch(array, target)); 

//======================================== Count Digits ===================================================

// function countDigits(n) {
//     if (n < 10) {
//         return 1;
//     }
//     return 1 + countDigits(Math.floor(n / 10));
// }


// console.log(countDigits(456))

//======================================================================================
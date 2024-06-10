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

//=================================recursive inary search===================

// function recursiveBinerySearch(arr, target) {
//     return search(arr, target, 0, arr.length - 1);
//   }
  
//   function search(arr, target, leftIndex, rightIndex) {
//     if (leftIndex > rightIndex) {
//       return -1;
//     }
  
//     let middelIndex = Math.floor((leftIndex + rightIndex) / 2);
//     if (target === arr[middelIndex]) {
//       return middelIndex;
//     }
  
//     if (target < arr[middelIndex]) {
//       return search(arr, target, leftIndex, middelIndex - 1);
//     } else {
//       return search(arr, target, middelIndex + 1, rightIndex);
//     }
//   }
//   console.log(recursiveBinerySearch([-5, 2, 4, 6, 10], 10));//4
//   console.log(recursiveBinerySearch([-5, 2, 4, 6, 10], 6));//3
//   console.log(recursiveBinerySearch([-5, 2, 4, 6, 10], 7));//-1

//=================================(2)recursive inary search===================

// function binarySearch(arr, target) {
//     function search(leftIndex, rightIndex) {
//         if (leftIndex > rightIndex) {
//             return -1;
//         }

//         let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

//         if (arr[middleIndex] === target) {
//             return middleIndex;
//         }

//         if (target < arr[middleIndex]) {
//             return search(leftIndex, middleIndex - 1);
//         } else {
//             return search(middleIndex + 1, rightIndex);
//         }
//     }

//     return search(0, arr.length - 1);
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const target = 7;
// const index = binarySearch(arr,target);

// console.log(index);

//========================================================================
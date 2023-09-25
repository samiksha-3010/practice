// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
// two susms

// var nums = [2, 7, 11, 15];
// var target = 9;
// let final = [];
// for (let i = 0; i < nums.length; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//     if (nums[i] + nums[j] == target) {
//       final.push(i, j);
//     }
//   }
// }
// console.log(final);

// for (let i = nums.length - 1; i > 0; i--) {
//   for (let j = nums.length; j > i + 1; j--) {
//     if (nums[j] + nums[i] === target) {
//       final.push(nums[j], nums[i]);
//     }
//   }
// }
// console.log(final);


// remove Duplicate number form the array and sort the array ascending

// var arr = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 9, 10, 11, 12, 13, 13];

// for (let i = 0; i < arr.length;) {
//   if (arr[i] === arr[i + 1]) {
//     arr.splice(i, 1);
//   } else {
//     i++;
//   }
// }

// console.log(arr);

// Remove Duplicates from Sorted Array II {MEDIUM}

// no same numbers should be more than 2

// var arr2 = [1, 1, 1, 1, 2, 2, 2, 2, 3];

// for (let i = 0; i < arr2.length; ) {
//   if (arr2[i] === arr2[i + 1] && arr2[i] === arr2[i + 2]) {
//     arr2.splice(i + 1, 1);
//   } else {
//     i++;
//   }
// }

// console.log(arr2);

// var array = [1, 5, 6, 7, 2, 9, 10];
// var newArr = array.slice(0, 3);
// console.log(newArr);
// array.splice(0, 3, 2);
// console.log(array);



// let arr = [3, 2, 2, 3];

// let val = 3;

// let count = 0;

// let res = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] != val) {
//     res.push(arr[i]);
//   }
// }

// console.log(res);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== val) {
//     arr[count++] = arr[i];
//   }
// }

// console.log(count);



// sumMultiple.js

let n = 10;

var sumOfMultiples = function (n) {
  let res = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      res += i;
      //   console.log(res);
    }
  }

  return res;
};

console.log(sumOfMultiples(n));


// Sumof1array

let nums = [1, 2, 3, 4];

let newArr = [];

let sum = 0;

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
  newArr.push(sum);
}

console.log(newArr);

//solution 2 function based

// var runningSum = function (nums) {
//   let newValue = [];
//   let sum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     (sum += nums[i]) + nums[i + 1];
//     newValue.push(sum);
//   }

//   return newValue;
// };

// console.log(runningSum(nums));

//Single number.js

// let nums = [2, 2, 3, 2];

// // Output: 3
// var singleNumber = function (nums) {
//   let obj = {};
//   for (var k of nums) {
//     obj[k] = obj[k] != null ? obj[k] + 1 : 1;
//     console.log(obj);
//   }
//   for (var i in obj) {
//     if (obj[i] === 1) return i;
//     console.log(obj);
//   }
// };

// console.log(singleNumber(nums));




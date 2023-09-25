// let nums = [2,2,3,4]

// var singleNumber = function(nums){
//     let obj = {};
//     for (var k of nums){
//         obj[k] = obj[k] != null ? obj[k] + 1 : 1;
//          console.log(obj);

//     }
//     for(var i in obj){
//         if(obj[i]===1) return i;
//         console.log(obj)
//     }
//     for (var i in obj){
//         if(obj[i] ===1) return i
//         console.log(obj)
//     }
// }

// console.log(singleNumber(nums))

let arr = [3, 2, 2, 3];

let val = 3;

let count = 0;

let res = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] != val) {
    res.push(arr[i]);
  }
}

console.log(res);

for (let i =0; i< arr.length; i++){
    if(arr[i] !=val){
        arr[count++]=arr[i]
    }
}
console.log(count)

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var nums = [2, 7, 11, 15];
var target = 9;
let final = [];
for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    if (nums[i] + nums[j] == target) {
      final.push(i, j);
    }
  }
}
console.log(final);

// for (let i = nums.length - 1; i > 0; i--) {
//   for (let j = nums.length; j > i + 1; j--) {
//     if (nums[j] + nums[i] === target) {
//       final.push(nums[j], nums[i]);
//     }
//   }
// }
// console.log(final);
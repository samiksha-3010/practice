
//Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
// The fn function takes one or two arguments:

// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only conlet arr = [10, 10, 59, 2, 6, 2, 5, 7, 1]
// let arr = [12, 10, 54, 2, 6, 2, 5, 7, 1];
// function filterArray(arr) {
//   let newArr = [];
//   for(let i=0;i<arr.length;i++){
//       if(arr[i]>10){newArr.push(arr[i])}
//   }
//   return newArr
// }
// console.log(filterArray(arr));

// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
// Output: [10,11,12] n = 10

// const counter = (n)=>{
//     return (n = [n +1, n-2])
// };
// console.log(counter(10))
// console.log(counter(11))

//Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
//The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

// const counters = (int) => {
//     return (obj = {
//       increment: () => {
//         int++;
//         console.log(`increment is ${int}`);
//       },
//       decrement: () => {
//         int--;
//         console.log(`decrement is ${int}`);
//       },
//       reset: () => {
//         int = int + 1;
//         console.log(`reset ${int}`);
//       },
//     });
//   };
//   const c = counters(4);
//   c.increment();
//   c.decrement();
//   c.reset();

  // Given an integer array nums, a reducer function fn, and an initial value init, return a reduced array.

  // let arr = [10,2,3,4,5,6,8]
  // const reduce = (arr)=>{
  //   let init=0;

  //   for (let i =0;i<arr.length; i++){
  // init+=arr[i]
  //   }
  //   return init 
  // }
  // console.log(reduce(arr))

  
  

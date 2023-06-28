// let mapArr = [2, 5, 6, 9, 7, 6];

// let newMap = mapArr.map((element, index, array) => {
//   //   return element;
//   //   return index;
//   //   return array;
//   //   return element * 2;
//   //   return index * 2;
// });
// console.log(newMap);


// let mapArr = [2,3, 4,7, 8];
// let newMap  = mapArr.map((element, index, array)=> {
//     return  index * 4;
//     return index + 2;
// })
// console.log(newMap);


// let mapArr = [1,2,6,8,9,];
// let newMap = mapArr.map (( element, index,Array) =>{
//     return index - 6;
//     return index / 4
// })
// console.log(newMap);



// let filtArr = [5, 8, 68, 4, 3, 11, 54, 100];

// let filterArray = filtArr.filter((element, index) => {
//   //   return element > 10;
//   //   return element;
//   //   return index > 2;
// });

// console.log(filterArray);



// let filterArr = [2, 3, 4, 7, 9, ];
// let filterArray =  filterArr.filter(( element, index) =>{
//     return element < 8;
//     return element
//     return index > 2;
// });
// console.log (filterArray);

// **************REDUCE

// let redVal = [2, 6, 8, 4, 10, 9, 22, 74];

// //accumulative,current calue
// let reducingArr = redVal.reduce((acc, curr) => {
//   //   return acc + curr;
//   //   return acc;
//   //   return curr;
// }, 10);

// console.log(reducingArr);

// **************REDUCE

// let redVal = [2, 6, 8, 4, 10, 9, 22, 74];

// //accumulative,current calue
// let reducingArr = redVal.reduce((acc, curr) => {
//   //   return acc + curr;
//   //   return acc;
//   //   return curr;
// }, 10);

// console.log(reducingArr);


let redVal =[2, 4, 7, 8, 9, 12, 34];
let reducingArr = redVal. reduce((acc, curr)=>{
    return acc + curr
    return acc;
    return curr;
} ,10)
console.log (reducingArr);


// ****************MAP FILTER REDUCE CHAINING

// let allInOne = [2, 3, 5, 4, 9, 2, 4, 6];

// let newArr = allInOne
//   .map((e) => {
//     return e + 5;
//   })
//   .filter((e) => {
//     return e < 10;
//   })
//   .reduce((acc, curr) => {
//     return acc + curr;
//   });
// console.log(newArr);
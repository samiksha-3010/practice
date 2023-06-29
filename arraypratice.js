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


// let redVal =[2, 4, 7, 8, 9, 12, 34];
// let reducingArr = redVal. reduce((acc, curr)=>{
//     return acc + curr
//     return acc;
//     return curr;
// } ,10)
// console.log (reducingArr);


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

// let allInOne [2, 3,6,8,9 ];
// let newArr = allInOne 
// .map((e) =>{
//     return e+5 ;

// } );
// .filter((e) => {
//     return acc + Curr;
// });
// console.log(newArr);

//==============================FOR EACH
// is not chainable

// let arr = [5, 10, 55, 22, 3];

// arr.forEach((element, index, array) => {
//   //   console.log(element);
//   //   console.log(index);
//   //   console.log(array);
//   //   return element;
// });
// console.log(newArr);

// let arr = [4, 27, 55, 22, 3];
// arr. forEach((element, index, array)=>{
//     console.log (element);
//     console.log (index);
//     console.log(array)
//     return element;
// })
// console.log(newArr);


//=====================SORT METHOD

// let arr = [ 5, 1, 10, 11, 7];
// arr .sort();
// console.log(arr);

// arr.sort((a,b)=>{
//     return b-a;     //descending
// });
// arr.sort ((a,b)=>{
//     return a-b;  //acesending
// })
// console.log(arr);

// =================CONCAT METHOD

// let arr1 = [2, 5, 6, 8];
// let arr2 = [10, 5, 3, 8];
// // #1
// // let arr3 = arr1.concat(arr2);
// // #2
// // let arr3 = [arr1, arr2];
// // #3
// // let arr3 = [...arr1, ...arr2];
// // console.log(arr3);

// let newArr = arr1 + "," + arr2;
// console.log(newArr);




// let arr1 = [2,4,6,8];
// let arr2 = [10,5,3,8];
// let arr3 = arr1.concat(arr2);
// let arr3 = [arr1, arr2];

// let newArr = [...arr1, ...arr2];
// console.log(newArr);

// let newArr= arr1+ ","+arr2;
// console.log(newArr);


// ***********************EVERY METHOD

// let arr = [2, 5, 6, 8, 7, 9];

// let everyArr = arr.every((element) => {
//     // return element >= 2;
//     // return element < 2;
// });

// console.log(everyArr);

// let arr = [2, 4, 7, 6, 9,];
// let everyArr arr.every((element) => {
//     // return element >=2;
//     // return element <2;
// });
// console.log(everyArr);

//======================SOME METHOD

// let arr = [2, 4, 6, 8, 9, ];
// let someArr = arr.some((element) =>{
//  return element < 1 ;
// })
// console.log(someArr);

// ===========================INDEXOF

// let arr = [5, 8, 6, 7, 9, 10, 20, 30, 54, 12, 5, 6, 865, 4];

// console.log(arr.indexOf(30));
// console.log(arr.length);
// console.log(arr.indexOf(arr.length));

// let arr = [ 5,  6,  7, 8, 4, 3, 2, 23, 56, 89 ];
// console.log(arr.indexOf)((30));
// console.log(arr.length);
// console.log(arr.indexOf(arr.length));
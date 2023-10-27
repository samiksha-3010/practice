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
//  return element < 8 ;
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

//  let arr = [23, 45, 67, 89, 23, 34];
//  console.log(arr.indexOf((8)));
//  console.log(arr.length);
//  console.log(arr.indexOf(arr.length));


// let arr = [5, 8, 6, 7, 9, 10, 20, 30, 6, 54];
// console.log(arr.lastIndexOf(6));
// let arr = [ 5, 8, 9, 4, 10, 23, 56, 78]
// console.log(arr.lastIndexOf(8));
// let arr = [2, 3, 7, 9, 7, 9];
// console.log(arr.lastIndexOf(7))



// ***********************FILL
// array.fill(value, start, end);
// let arr = [10, 20, 30, 6, 54];

// let newArr = arr.fill("hi");
// console.log(arr);
// arr.fill(30);
// console.log(arr);
// arr.fill(3, 2, 5);
// console.log(arr);

// arr.fill()
// Array.fill (value, start, end);
// let arr =[ 10, 30, 35, 8, 57,]

// let newArr = arr.fill ("hello")
// console.log(arr);
// arr.fill(30);
// console.log(arr);       //not understand
// arr.fill(3,2,5);
// console.log(arr);
// arr.fill;

// let arr = [10, 20, 30, 6, 54];

// console.log(arr.slice(1, 3)); // starts from 1 and ends on 2

// let arr = [ 12, 45, 67, 8, 90, 23]
// console.log(arr.slice (1,3));


// *********************REVERSE METHOD

// let arr = [10, 20, 30];  //print start last value

// console.log(arr.reverse());

// let arr =[23, 56, 78, 90, 45];

// let arr1 =[
//     [1, 2, 4, 6], [5, 7, 9, 4],
// ];
// console.log (arr1);

// let arr2 =[
//     [1, 3, 5, 6],
//     [2, 4, 5, 6],
//     [3, 5, 6, 8]
//     [3, 5, [99,33]],
// ];
// console.log(arr2);

// let arr2 = [
//   [1, 2, 3],
//   [5, 4, 9],
//   [9, 4, 9],
//   [5, 8, 4],
//   [1, 4, 9],
//   [3, 4, [99, 33]],
// ];

// console.log(arr2);

// let arr3 = [
//   [1, 2, 3],
//   [5, 4, 9],
//   [9, [55, 99, [66, 88, 650, [888, 1000]]], 9],
//   [5, 8, 4],
//   [1, 4, 9],
//   [3, 4, [99, 33]],
// ];
// console.log(arr3);

// let arr3;[
//     [1, 3, 5],
//     [3, 5, 9],
//     [ 9, [ 55, 99, [ 66, 88, 99,[ 888, 10000,]]],9],
//     [ 1, 4, 9],
//     [3, 4, [ 99, 33]],
// ];
// console.log(arr3);

// let newArr = arr1.flat();
// let newArr = arr2.flat(2);
// let newArr = arr3.flat(Infinity);
// console.log(newArr);


//******************** ARRAYFROM

// let str = "manoj";
// let makeArr = Array.from(str);
// console.log(makeArr);

// let arr = [5, 2, 3];
// let newArr = Array.from(arr, (x) => {
//   return x + x;
// });

// console.log(newArr);

// let str = "nidhi";
// let makeArr = Array.from(str) 


// let arr = [2, 4, 6];
// let newArr = Array.from(arr, (x) =>{
// return x + x;
// });
// console.log(makeArr);


// let str = "nidhi";
// let makeArr= Array.from(str)
// console.log(makeArr);
// let arr = [2, 4, 6]
// let newArr = Array.from(arr,(x) =>{
//     return x+x;
// });
// console.log(newArr)

// let arr = [5, 10, 55, 22, 3];

// arr.forEach((element, index, array) => {
//   //   console.log(element);
//   //   console.log(index);
//   //   console.log(array);
//   //   return element;
// });
// console.log(newArr);
//  let arr=  [2, 5, 7, 9, 12, 34, 56 ]
// arr. forEach  ((element, index, array) =>{
//     console.log(index);
// // return array;

// });
// // console.log(newArr);
// const items = ["item1", "item2", "item3"];
// const copyItems = [];

// // before
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i]);
// }
// console.log(copyItems)

// // after
// items.forEach((item) => {
//   copyItems.push(item);
// });
// // console.log(items);

// const item = ["apple","banana", "mango"];
// const copyItem = [];

// for (let i = 0; i< item.length; i++){
//     copyItem.push(item[i]);
// }
//  console.log(copyItem);

//  let mapArr = [2, 4,6 ,8, 9];
//  let newMap = mapArr.map((element,index,array)=>{
//     return index
//     return element;
//     return array;
//  })
//  console.log(newMap)

// const words = [ 'samiksha', 'pooja', 'nidhi', 'samikshayadav'];
// const result = words.filter(word=> words.length<7);
// console.log(result);

      

// let filtArr = [5, 8, 68, 4, 3, 11, 54, 100];

// let filterArray = filtArr.filter((element, index) => {
//     return element > 10;
//     // return element;
//     return index > 2;
// });

// console.log(filterArray);


// let arr = [5, 10, 55, 22, 3];

// arr.forEach((element, index, array) => {
//     // // console.log(element);
//     // console.log(index);
//     // // console.log(array);
//     return element;
// });
// // console.log(newArr);


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


// let str = "samiksha";
// let makeArr = Array.from(str);
// console.log(makeArr);

// let arr = [5, 2, 3];
// let newArr = Array.from(arr, (x) => {
//   return x + x;
// });

// console.log(newArr);

// let arr = [5, 8, 6, 7, 9, 10, 20, 30, 54, 12, 5, 6, 865, 4];
// console.log(arr.indexOf(30));
// console.log(arr.length);
// console.log(arr.indexOf(arr.length));


// ======================SOME METHOD

let arr = [2, 4, 6, 8, 9, ];
let someArr = arr.some((element) =>{
 return element > 3;
})
console.log(someArr);

    //    ===========map=============
    // let mapArr = [ 3, 4, 7, 9, 6, 3];
    //   let newMap = mapArr.map((element, index, array)  => {
    //     // return element;
    //     // return index;
    //     // return array;
    //     //  return element * 2;
    //     //  return index * 2;

    //   });
    // // 
    
    // var num1 = [ 12,34,65,]
    // console.log(num1[0]);
   

//       let mapArr = [3,4 , 5, 7, 8];
//       let newMap = mapArr.map ((element, index, array) => {
//         return element;
//         return index;
//         return array;
//         return element * 2;
//         return index * 2
//         return array * 2;
//       })
// console.log(newMap);

// =======filter==========

//   let filterArr = [2, 3, 5, 6, 7, 9, 3];
//   let filterArray  =  filterArr.filter ((element ,index) => {
//     return index  > 10;
//     return element; 
//    return index > 6;
//   })
//   console.log(filterArr);


// let filtArr = [5, 8, 68, 4, 3, 11, 54, 100];

// let filterArray = filtArr.filter((element, index) => {
//     // return element  > 10;
//     // return element;
//     // return index   > 2;
// });

// console.log(filterArray);

// ======reduce======

// let redVal = [ 2, 3, 5, 6, 8, 9, ];
//  let reducingArr = redVal.reduce((acc, curr) => {
//     return acc + curr;
//     return acc;
//     return curr;
//  } , 10)
// console.log(reducingArr);


// let redVal = [2, 6, 8, 4, 10, 9, 22, 74];

// //accumulative,current calue
// let reducingArr = redVal.reduce((acc, curr) => {
//   //   return acc + curr;
//   //   return acc;
//   //   return curr;
// }, 10);

// console.log(reducingArr);



// ****************MAP FILTER REDUCE CHAINING

// let allInOne = [2,3,4,6,8,9,5];
// let newArr = allInOne
// .map((e) => {
//     return e + 5;
// })
// .filter((e) => {
//     return e < 10;
// })
//  .reduce((acc , curr ) => {
//     return acc + curr;

//  })
//  console.log(newArr);


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


// ***********************FOR EACH
// is not chainable

// let arr = [5, 10, 55, 22, 3];

// arr.forEach((element, index, array) => {
//     console.log(element);
//     console.log(index);
//     console.log(array);
//     return element;
// });
// console.log(newArr);

// let arr = [ 5,6,7,8,9];
// arr.forEach((element , index,array) => {
//     console.log(element);
//        console.log(index);
//        console.log(array);
//     return element;
// })
// console.log (newArr);

                                    //  ======mapArrPratice========


// let  mapArr = [2, 5, 8,10,];
// let newMap = mapArr.map((array, index,element) =>{
//     return array +2 ;
// //    return index;
// //    return element;
  
// });
// console.log(newMap);

// let mapArr = [23, 45, 67, 89, 90];
// let newMap = mapArr.map ((element, index, array) =>{
//     return element +4;     //add in element    
//   return   index;   //  start 0
//   return  array ;    // return everyelement  many times
//   return index ;
// })
// console.log(newMap);

    // var num1 = [ 12,34,65,]
    // console.log(num1[0]);
   

    // var num2 = [23, 67, 56, 34]
    // console.log(num2[1] );
    // console.log (num2[2]);
    // console.log(num2[3]);


// let mapArr = [ 23, 56, 78, 90];
// let newMap = mapArr.map((index) =>{
// return index;
// });
 // console.log(newMap);

// let mapArr = [ 23, 56, 78, 12, 45, 34 ];
// let  newMap = mapArr.map((array)=>{
// return array*6;  //mul
// });
// console.log(newMap);

// let mapArr = [23, 45,12,45,89];
// let newMap = mapArr.map((element)=>{
// return element /2;
// });
// console.log(newMap);

// let mapArr= [ 23,45, 78, 90];
// let newMap = mapArr.map((index) =>{
//     return index-2;
// }) 
//  console.log(newMap)

// let mapArr = [234, 567,234,456,];
// let newMap = mapArr.map((element) =>{
//     return  element /4;
// })
// console.log(newMap);

// var num1 =  [ 23, 56, 89, 90,12];
// console.log(num1[3]);

// var num2 = ["samiksha"," Anikja", "nidhi"];
// console.log(num2[2])

// var num3 = ["samiksha", "annnu", "vibhu"];
// console.log(num3[0]);

// var num4 = [ "product", "smailer","vibhu"];



// =======filter==========

//   let filterArr = [2, 3, 5, 6, 7, 9, 3];
//   let filterArray  =  filterArr.filter ((element ,index) => {
//     return index  > 10;
//     return element; 
//    return index > 6;
//   })
//   console.log(filterArr);



//  let filterArr = [2, 3, 5, 7, 9, 90];
//  let  filterArray = filterArr. filter((index) => {
//     return index +
//     10;
//  });
//  console.log(filterArr);
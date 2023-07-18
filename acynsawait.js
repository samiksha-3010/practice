
//   // Async Await

// function one() {
//   setTimeout(() => {
//     console.log("one");
//   }, 3000);
// }

// async function prom() {
//     let one = new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("promise 1"); // execute 2nd
//       }, 6000);
//     });

//     function one(){
//         setTimeout(() =>{
//             console.log("one");
//          } ,3000);
//     };



    // find odd number

// var array = [2, 4, 8, 10, 6, 3, 4, 44, 79, 99, 55, 33];

// function oddNum(odd) {
//   let newOdd = [];
//   for (let i = 0; i < odd.length; i++) {
//     if (odd[i] % 2 != 0) {
//       //   console.log(odd[i]);
//       newOdd.push(odd[i]);
//     }
//   }

//   return newOdd.length;
// }

// console.log(oddNum(array));

// var array = [23, 45, 67, 89, 10, 23, 12, 44];
// function oddNum(odd){
//     let newOdd = [];
//     for (let i = 0; i < odd.lenght; i++){
//         if(odd[i] % 2 != 0){
//             console.log (odd[i]);
//             newOdd.push (odd[i]);
//         }
//     }
//     return newOdd.length;
// }
// console.log(oddNum(array));

// var array = [23, 56, 78, 96, 34, 32, 12];
// function oddNum(odd){
//     let newOdd =[];
//     for (let i = 0; i  < odd.lenght; i++) {
//         if (odd[i] % 2 !=0){
//             console.log (odd[i]);
//             newOdd.push(odd[i]);
//         }

//     }  
//          return newOdd.length;

//     }
//     console.log (oddNum(array));



// sumThree(array, target);

// find even number of given array

// var array2 = [8, 10, 6, 3, 4, 79, 99, 55, 33];

// var array = [2, 4, 8, 10, 6, 3, 4, 79, 99, 55, 33];

// function findEvenNum(array) {
// //   let newEven = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//     //   console.log(newEven);
//     console.log(array[i])
//       //   newEven.push(even[i]);
//     }
//   }
//   //   console.log(newEven);
//   //   return newEven.length;
// }

// var e = findEvenNum(array);
// console.log(e);

// var arrry1 = [5, 6, 8, 9, 10, 12, 24, 26,];
// var arry2 = [ 4, 6, 8, 9, 10, 23, 46 ];
// function findEvenNum(array){
//     let newEven = [];
//     for (let i=0; i< array.length; i++){
//       if (array [i] % 2 == 0) {
//         console.log(newEven);
//         console.log(array(i));
//         newEven.push(even[i]);

//       }  
//     }
//     console.log(newEven);
//     return newEven.length;
// }
// var e = findEvenNum (array);
// console .log(e);


// subtraction of three number and find target

// var array = [54, 33, 55, 77, 99, 66, 44, 5, 2, 6, 7, 9, 11];
// var target = 17;

// function sumThree(array, target) {
//   var flag = false;
//   for (let i = 0; i < array.length - 2; i++) {
//     for (let j = i + 1; j < array.length - 1; j++) {
//       for (k = j + 1; k < array.length; k++) {
//         if (array[i] - array[j] - array[k] === target) {
//           console.log(array[i], array[j], array[k], "=", target);
//           flag = true;
//           //   return flag = true
//           //if we return the flag = true.then it will return the first possible output and end the loop
//         }
//       }
//     }
//   }
//   if (flag === false) {
//     console.log("Sorry no matches found");
//   }
// }

// var array = [ 24, 56, 89, 90, 12, 45, ];
// var target = false;
// for (let i= 0; i < array.length -2; i++) {
//     for (let j = i + 1; j < array.length -1; j++){
//         for( k = j + 1 ; k < array.length; k++){
//             if (array [i] - array[j] - array[k] === target){
//                 console.log(array[i], array[j], array[k], "=", target);
//             }
//         }
//     }
//    if (flag === false){
//     console.log()
//    }
// }


// add three numbers sum find the target

// var array = [54, 33, 55, 77, 99, 66, 44, 5, 2, 6, 7, 9, 11];
// var target = 171;

// function sumThree(array, target) {
//   var flag = false;
//   for (let i = 0; i < array.length - 2; i++) {
//     for (let j = i + 1; j < array.length - 1; j++) {
//       for (k = j + 1; k < array.length; k++) {
//         if (array[i] + array[j] + array[k] === target) {
//           console.log(array[i], array[j], array[k], "=", target);
//           flag = true
//    return flag = true
// if we return the flag = true.then it will return the first possible output and end the loop
//         }
//       }
//     }
//   }
//   if (flag === false) {
//     console.log("Sorry no matches found");
//   }
// }

var array  = [23, 56, 34, 23, 56, 89, 10];
// var trget = 24;

// function sumThree (array, target ){
//     var flag = false;
//     for (let i= 0; i = 0; < array.lenght - 2; i++){
//         for(let j = i+1; j<array.length - 1; j++){
//     for ( k= j+1; k< array .length; k++){
//         if (array [i] , + array [j], + array[k], "+", target)
//         flag =  true 
//         return flag = true {
            
//         }
//     }
//         }

//     }
// if (flag === false ){
//     console.log()
// }
// }
// // Q Find out indec of three number which addition is target.



// // [2, 3, 4]

// // 1 - On
// // 2 - On^2
// // 3 - On^3

// // for(){}
// // for(){}
// // On

// // find out indec of three number which addtion is target

var array = [1, 2, 3, 4, 5, 6, 7, 8, 10,11]
var target = 10;
for (var i = 0; i < array.length - 2; i++) {
    for (var j = i + 1; j < array.length - 1; j++) {
        for (var k = j + 1; k < array.length; k++) {
            // console.log(array[i], array[j], array[k])
            if (array[i] + array[j] + array[k] == target) {
                // console.log(array[i], array[j], array[k])
                console.log([i, j, k])
            }
        }
    }
}
// // Function
// // Syntax 
// function newFunction(){
//     console.log("hello this is a my first function code")
// }
// newFunction();

// function EvenNuber(){
//     console.log("Number is even")
// }
// function OddNumber(){
//     console.log("number is Even")
// }
// var number = 87654

// if(number%2==0){
// EvenNuber()
// }else{
//     oddNumber()
// }


// find of index of three number which addition is target

// var target= [2,3,4,5,6,7,8,9]
// target = 7

// var array = [1, 2, 3, 4, 5, 6, 7]
// var target = 9;
// for (var i = 0; i < array.length - 2; i++) {
//     for (var j = i + 1; j < array.length - 1; j++) {
//         for (var k = j + 1; k < array.length; k++) {
//             // console.log(array[i], array[j], array[k])
//             if (array[i] + array[j] + array[k] == target) {
//                 // console.log(array[i], array[j], array[k])
//                 console.log([i, j, k])
//             }
//         }
//     }
// }
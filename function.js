// hello = function() {
//     return "Hello World!";
//   }
//   console.log()

                                            //  ****************nested for loop******************

//   var target = 93;
// var array = [3, 54, 65, 32, 6, 23, 56, 76, 17];
// // result "3 17"
// for (var i = 0; i < array.length; i++) {
//     // console.log(array[i])
//     for (var j = i + 1; j < array.length; j++) {
//         if (array[i] + array[j] == target) {
//             console.log(array[i], array[j], "got!")
//         }
//         console.log(array[i], " + ", array[j], " = " ,array[i] + array[j])
//     }
// }


// var target = 93;
// var array = [ 3, 54, 65, 32, 6, 23, 56, 76, 17];
// // result "3 17"
// for (var i =0;i< array.length; i++) {  
// console.log(array[i])
// for (j =i+1; j< array.length; j++){
//   if(array[i]+ array[j] == target){
//     console.log(array[i], array[j], "got!")
//   }
//   console.log(array[i], " + " , array[j], " = ", array[i] + array[j])
 
// }
// }

// Q Given an target find two number from array which subtration is target . 

// var target = 93;
// var array = [3, 54, 65, 32, 6, 23, 56, 76, 17, 100, 7];
// 100,7

// Hint - use three nested for loops

// for (var i = 0; i < array.length - 2; i++) {
//   // console.log(array[i])
//   for (var j = i + 1; j < array.length - 1; j++) {
//       console.log(array[i],"- array[i]",array[j],"- array[j]")
//       console.log(array[i] + array[j], "- total", target)

//       // if(array[i] + array[j] == target){
//       //     console.log(array[i] , array[j],"got it")
//       // }
//   }
// }


// for ( var i=0; i< array.length -2; i++) {
//   // console.log(array[i])
// for (var j = i + 1; j < array.length - 1; j++ ){
//   console.log (array[i], "- array.length[i]", array[j], "-array[j]")
// console.log(array[i] + array [j], "- total", target )
// if (array[j] == array[j] == target){
//  console.log(array[i], array[j], "got it")
// }
// }
// }


// var num1 = 2345;
// var num2 = 8763;

// function addition() {
//     var add = num1 + num2;
//     console.log(add, "addition")
// }
// addition();
// addition();
// addition();


// var num1 = 3478;
// var num2 =  7892;

// function addition(){
//   var add = num1 + num2
//   console.log (add, "addition")
// }
// addition();

// var num3 =  8976;
// var num4 = 7894;
//   function subtration(){
//     var sub = num3 - num4
//     console.log(sub, "subtration")
//   }
//    subtration();

//    var num5 = 7823;
//    var num6 = 9813;
//    function multiplication(){
//     var sub = num5 * num6
//     console.log(mul, "multiplication")
//    }
//    multiplication();

// var num1 = 4590;
// var num2 = 8731;
// function dividation (){
//   var div = num1 / num2 
//   console.log (div, " dividation")
// }
// dividation();

// var num1 = 1234;
// var num2 = 9876;

// function addition(num1, num2 ){
//     console.log(num1 + num2)
// }

// addition(num1,num2)


// var num1 = 2309;
// var num2 = 9812;
// function subtration(num1, num2){
//   console.log(num1-num2)
// }
// subtration(num1,num2)

// var num1 =3456;
// var num2 = 4532;
// function subtraction() {
//   var sub = num1 - num2;
//   console.log(sub, "subtractionn")

//   if (sub > 0) {
//       return sub;
//   } else if (sub == 0) {
//       return "Sub is gretar than 0"
//   } 
//   else {
//       return "Inside else"
//   }

//   return "Sub is not equal to zero or not gretar than 0!"
//   // console.log("Loggin after return keyword")
// }
// var res = subtraction();
// console.log(subtraction())

// subtraction()

function additionOfNumbers(samiksha, somesh) { // 2 step
  // console.log(samiksha,somesh,"insdie function")
  for (var i = 0; i < samiksha.length - 1; i++) {
      for (var j = i + 1; j < samiksha.length; j++) {
          if (samiksha[i] + samiksha[j] == somesh) {
              console.log(samiksha[i], samiksha[j])
          }
      }
  }
}
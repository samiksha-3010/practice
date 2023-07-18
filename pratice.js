// Q. Print number from 10 -1; 


// for(var i = 10; i >= 1 ; i--){
//     console.log(i)
// }

// for(var i = 100; i >= 54 ; i--){
//     console.log(i)
// }

// for(var i = 100; i >= 1 ; i = i - 2){
//     console.log(i)
// }

// for(var i = 1000; i >= 1 ; i = i - 10){
//     console.log(i)
// }

// for(var i = 1000/2; i >= 1 ; i = i - 10){
//     console.log(i)
// }


// Loops - for
// Q. Print numbers from 1- 10;
// var i = 1;
// i++;
// console.log(i)

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
  
// var remote = ["S", 'A', "B", "c", "y", "p", 87, 897, true];

// console.log(remote[0])
// console.log(remote[1])
// console.log(remote[2])
// console.log(remote[3])
// console.log(remote[4])

// for (var i = 0; i < remote.length; i++) {
//     console.log(remote[i])
// }



// for (var i = 1001; 1001 <= 1000; i++ ) { print("execute") }

// for( var i = 1; i <= 100; i++){
//     console.log("Hello",i);
// }

// for (var i = 1; i<= 100; i= 1+2){
//     console.log("Hello", i)
// }  

// for ( var i = 34; i<78; i++){
//     console.log("Hello", i)
// }



// for (var i = 1; i <= 100; i++) {
//     console.log("Hello", i);
// }
// for (var i = 1; i <= 100; i = i + 2) {
//     console.log("Hello", i);
// }
// for (var i = 234; i <= 765; i++) {
//     console.log("Hello", i);
// }
// for (var i = 50; i <= 230; i = i * 2) {
//     console.log("Hello", i);
// }
// for (var i = 1; i <= 1000; i = i + 6) {
//     console.log("Hello", i);
// }
// for (var i = 8976; i <= 87658; i++) {
//     console.log("Hello", i);
// }
// for (var i = 5; i <= 1000; i = i ** 2) {
//     console.log("Hello", i);
// }



// Q Given an target find two number from array which addition is target . 

// var target = 93;
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



// Q Given an target find two number from array which subtration is target . 

var target = 93;
// var array = [3, 54, 65, 32, 6, 23, 56, 76, 17, 100, 7];
// // 100,7
// for (var i = 0; i < array.length; i++) {
//     // console.log(array[i])
//     for (var j = i + 1; j < array.length; j++) {
//         if (array[i] - array[j] == target) {
//             console.log(array[i], array[j], "got!")
//         }
//         console.log(array[i], " - ", array[j], " = " ,array[i] + array[j])
//     }
// }

var res = []; // 1, 2,3,4
var nums = [3,3,3,3,5,5,5,8,8,8,9]
for (let i = 0; i < nums.length; i++) {
    if (nums[i] != nums[i + 1]) { //  nums[3] = 2,  nums[4] = 3
        res.push(nums[i])
        
    }
}
console.log(res);







// function swaraj() {
//     var id = '';
//     var length = 125;
//     var secretKey = "ABCDEFGHIJKLMNOPQRSTabcdefghh1234567890"
//     for (var i = 0; i < length; i++) {
//         id += secretKey[Math.floor(Math.random() * secretKey.length)];
//     }
//     return id
// }
// console.log(getRandomId())
// var index = (Math.floor(Math.random() * 30))
// console.log(index, "- index")
// console.log(secretKey[index], "- data")
// console.log(Math.floor(3.7941411198316493))

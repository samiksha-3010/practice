// function greet() {
//     alert("Welcome!")
// }

// function hello() {
//     alert("Clicked!")
// }



// var samiksha = [12, 34, 56, 7, 8,9]
// samiksha.pop(65)
// console.log(samiksha,"samiksha")

// var samiksha = ["samiksha", "yadav", "annnu", "pihu"]
// samiksha.push("pooja")
// console.log(samiksha,"samiksha")

// var samiksha = [ 12, 34, 56, 78,90, 12]
// samiksha.push(65,34)
// console.log(samiksha,"samiksha")

// var samiksha = ["samiksha", "pooja", "meghali","shivani"]
// samiksha.pop()
// samiksha.pop()
// console.log(samiksha,"samiksha")

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato', "Somhedsh"];

// plants.pop()
// plants.pop()

// console.log(plants.pop());\

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato', "Somhedsh"];
// plants.pop();
// plants.pop();
// plants.pop();
// plants.pop();
// console.log(plants,plants);

// const array1 = [1, 2, 3];
// array1.shift()
// array1.shift()
// array1.shift()
// console.log(array1)

// const array1 = [1, 2, 3, 4, 5,6]
// array1.shift()
// array1.shift()
// array1.shift()
// console.log(array1)

// const array1 = ["samiksha", "nidhi","tannu"]
// array1.unshift("sami");
// array1.unshift(34)
// console.log(array1)

// const array1 = [123, 532, 12, 78, 89,12];
// array1.unshift(23, 45, 67, 8);
// console.log(array1)

// Q. Find the numbers who divisible by 5 from given range and return the array of those number... 

// var start = 9876;
// var end = 10234;

// function diviBY5(start, end) {
//     var result = [];
//     for (var i = start; i <= end; i++) {
//         if (i % 5 == 0) {
//             result.push(i)
//             // console.log(i)
//         }
//     }
//     console.log(result,"- res")
//  }
// diviBY5(start, end)
//  Q. Find the numbers who divisible by 6 from given range and return the array of those number... 



// var start = 9867;
// var end = 1345;

// function diviBY6(start,end){
//     var result = [];
//     for(var i=start; i <= end; i++){
//         if( i % 6 == 0 ){
//             result.push(i);
//             // console.log(i)
//         }
//     }
//     console.log(result, "-res")
// }
// diviBY6(start,end)



// async await



// function resolveAfter5Seconds(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("samiksha")
//         }, 5000)

//     })
//     }
//     async function asyncCall(){
//         console.log('start')
//         const result = await resolveAfter5Seconds();
//         console.log(result,"-result")
//         console.log("end")

//     }
//     asyncCall();
//     setTimeout(() =>{ console.log("aftee 5 sec...")},2000)
//     setInterval(() =>{console.log("Got..")},5000)
 
// function Myfunction(){
//     return("hello World")
// }
// console.log("hello World")

// function Myfunction (){
//     return "hello"
// }
// console.log("hello")


// const person ={    
// firstPerson: "samiksha",
// lastName: "yadav"
// }
// console.log(person.lastName )
// console.log(typeof("lastName"))


// const person = {
//     firstPerson: "samiksha",
//     lastName: "yadav",
//     age: 23,
//     Adress: "Mumbai"
// }
// console.log(person.age)


// const fruit = ["apple", "Banana"]
// let length= fruit.length
// console.log(fruit)

// const fruits = ["apple", "orange", "banana"]

// console.log  ( fruits[0])

// const fruits = ["samiksa","pooja","shivani"];
// let fruit = fruit[0]
// console.log(fruits)

// const name = ['poohu', 'sami',]
// let  fruit = name[1]
// console.log(name)

// // Q. Find multiplication of give two numbers by using function. 

// var num3 = 9876;
// var num4 = 5678;
// function add( num3 = num4){
//     console.log(num3+num4)
   
// }
// add(num3+num4);

// var num1 = 234;
// var num2 = 236;
// function dived (num1 = num2){
//     console.log(num1/num2)
// }
// dived(num1/num2)

// var num1 = 234;
// var num2 = 156;
// function sub(num1=num2){
//     console.log(num1-num2)
// }
// sub(num1-num2)

var num1 = 4;
var num2 = 8;
function mul(num1=num2){
    console.log(num1*num2)
}
mul(num1*num2)
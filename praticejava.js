// function greet() {
//     alert("Welcome!")
// }

// function hello() {
//     alert("Clicked!")
// }
            //  push method 


// var swaraj = [2, 3, 45, 6];

// swaraj.push(23)
// swaraj.push(24)
// swaraj.push(25)
// swaraj.push(26)
// swaraj.push("Hiii")


// var samiksha = [ 23, 45, 78, 90, 12, 34]
// samiksha .push(98)
// console.log(samiksha,"samikisha")

// var samiksha =  [ 23, 56, 89, 12, 45, 23];
// samiksha .pop(23);
// samiksha.pop(56);
// samiksha.push("samiks")
// console.log(samiksha,"samiksha")


// var samiksha = [ 'samiksha', 'nidhu', 'girls' , 'aarush']
// samiksha.push("tanu")
// samiksha.push("hello")
// samiksha.push(98)
// console.log(samiksha,"samiksha")

// var company = [ "honda " , "sujuki","indiko", "hero"]
// samiksha.pop("honda")
// console.log(samiksha,"samiksha")


// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato', "Somhedsh"];

// plants.push('mango')
// plants.push('banana')

// console.log(plants.push());
//                                             //   pop method 


// const flower = ['lily', 'sunflower', 'rose','louts','hibicuac']
// flower.pop()
// flower.pop()
// flower.pop()
// flower.pop()


//  console.log(flower.pop());

                            //    **************** shift unshift************



//  const array1 = [1, 2, 3];
// array1.shift()
// console.log(array1)

// const array1 = [ 23, 45, 78, 12,]
// array1.shift()
// array1.shift()
// array1.shift()

// console.log(array1)
 
// const array1 = [ 'samiksha','pooja', 'rocky','meghali']
// array1.shift()
// array1.shift()
// console.log(array1)

// const array1 = [ 'samiksha', 'tanu', 'topar','nidhu']
// array1.unshift ('samii')
// array1.unshift ('poohu')
// console.log(array1)

// const array1 = [1, 2, 3];
// array1.unshift(234567, 98765);
// array1.unshift(9876);
// array1.unshift("jhg");
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
// }
// diviBY5(start, end)



// find the numbers who divisble by  6 from given renge and return the array of those number 

// var start = 9876;
// var end = 10234;

// function diviBY6(start, end){
//     var result = [];
//     for(var i = start; i <= end; i++){
//         if (i% 5  == 0){
//             result.push(i)
//             console.log(i)

//         }
//     }
//     console.log(result,-"res")

// }
// diviBY6(start,end)



// var givenArray = [23, 45, 56, 67, 23, 56, 68, 34, 4556, 78, 655, 23, 568787, 89845, 343, 54576, 7873, 323, 54, 636, 6836, 575];

// // find numbers who odd from given array and return array with those number... 
// function samiksa(array) {

//     var oddNumberArray = [];
//     for (var i = 0; i < array.length; i++) {
//         // console.log(array[i])
//         if (array[i] % 2 == 1) {
//             oddNumberArray.push(array[i])
//       }
//     }
//     console.log(oddNumberArray, "- oddNumberArray")
// }
// samiksa(givenArray);

// var givenArray = [ 23, 56, 23, 4567, 89, 12, 34, 56, 78, 90, 120, 230, 128, 43]
// // find number who add from given array and return array with those number
// function samiksha (array){
//     for ( var i =0; i < array.length; i++){
//     console.log(array[i])
//    if (array [i] % 2 ==1){
//     oddNumberArray.push(array[i])
//    }
//     }
//     console.log(oddNumberArray, "-oddNumberArray")
// }
// samiksha(givenArray);



//  ascyin await*********************************




// function resolveAfter2Seconds() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Awdiz');
//         }, 5000);
//     });
// }

// async function asyncCall() {
//     console.log('Start');
//     const result = await resolveAfter2Seconds();
//     console.log(result,"- result");
//     console.log("end")
//     // Expected output: "resolved"
// }
// asyncCall();



// setTimeout(() => { console.log("After 5 sec..") } , 2000)
// setInterval(() => { console.log("Got..") }, 5000)


// function resolveAfter5Seconds(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('samiksha');
//         } ,5000);
//     });
// }
// setTimeout (() =>{ console.log("After 5 sec ...")

// },5000)

// function setresolveAfter7Second (){
//     return new Promise((resolve) =>{
//         setTimeout(() => {
//             resolve('samiksha');
//         } , 7000)
//     })
// }
// setTimeout (() => {
//     console.log("After7 sec..")
// }, 7000

// )
function setresolveAfter5Second(){
    return new Promise ((resolve) =>{
        setTimeout(() =>{
            resolve ('samiksha');
        }, 5000)
    }) 
    setTimeout(() =>{
        console.log("After 5 sec...")
    }, 500)
}

// function setresolveAfter5Second (){
//     return new Promisw((resolve) => {
//         setTimeout(()=> {
//             resolve('aarohi')
//         },5000)
//     })
//     setTimeout (() =>{
//         console.log("After5 sec....")
//     }, 5000)
// }
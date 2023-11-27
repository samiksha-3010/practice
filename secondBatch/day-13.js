// Event Lopp
// closure


function outerfunction(){
      const myname = "samiksha";
      function innerFunction(){
            return`hello student, Im ${myname}`
      } 
      return innerFunction
}

var  result = outerfunction();
console.log(result())

// for(){
//       for(){
//             nested for loop
//       }
// }

// Evnt Loop


console.log("Starting")

setTimeout(()=>{
      console.log("Settimeout")
},5)
console.log("Eanding")

// Promise calling  backend api 
// resolve () - success
// reject - fail
// then  catch

// async await - try-catch - response -> variable


// Promise.resolve((data) => {
//     console.log(data)
// }).rejct((error) => {
//     console.log(error)
// })

console.log("start")

Promise.resolve().then(() => {
    console.log("promise")
})

console.log("end")




console.log("start")
setTimeout(() => {
    console.log("st")
},0)
Promise.resolve().then(() => {
    console.log("promise")
})
console.log("end")


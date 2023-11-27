// Pre Define Function in array
//Map Method return the array of value
var array = [1,2,3,4,]
console.log(array,"array")

  var result = array.map((number)=> number*2)

console.log(result,"result")

var result = array.map((number)=>number*2)  // return the array with updaetes value
console.log(result,"result")


//forEach  seperate value

var array = [2,3,4,5];
array.forEach((number)=> console.log(number*2))
      
// reduce sinfle value return

 const array1 = [1,2,3,4,5]
// 0+1+2+3+4

const initialValue = 10;
const sumWithInitial = array1.reduce(
      (accumulator,currentValue)=>accumulator+currentValue,
      initialValue,
);

console.log(sumWithInitial)


// filter Method array of the value with filters

var list = [ "samiksha","roshni","neha","kanka","tanu","shilpa","lta"]
var result = list.filter((str)=> str.length>3)
console.log(result,"result")


setTimeout(()=>{
      console.log("Hello Samiksha")
},2000)

setTimeout(()=>{
      console.log("Hello EverOne");
      console.log("Hello Samiksha")
},7000)

var counter = 0;
const message = setInterval(()=>{
      counter ++;
      console.log(counter)
},1000)
// clearInterval(message)


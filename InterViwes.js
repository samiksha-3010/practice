// const arrNumber = [2,3,4,5,6,78,3,3,9]
// const duplcates = arrNumber.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
// console.log(duplcates)


// const arrNumber = [1,2,3,4,5,6,7] 
// const arrNumber=[2,34,56,78,90]

// const maxFunction=(arr)=>{
//     return arr.reduce(function(pre,cur){
//         return pre>cur?pre:cur
//     })
// }
// console.log(maxFunction(arrNumber))

// const arrNumber=[2,34,56,78,90]

// const minFunction=(arr)=>{
//     return arr.reduce(function(pre,cur){
//         return pre<cur?pre:cur
//     })
// }
// console.log(minFunction(arrNumber))


// var x=4
// var y="4";
// console.log(x===y)

// how to find second largest value and remove first largest value in  array

// salutaion step to  find second largest valuue'
// find largest value from array 
// find index of largest value
// delite index og the array using splice method 
// apply same logic that use for find a largest value

// const intArray = [2,3,4,5,67,89]
// const largestValue=(arr)=>{
//     firstLargestValue=Math.max(...arr)
//     index=arr.indexOf(firstLargestValue)
//     arr.splice(index,1)
//     SecondLargestValue=Math.max(...arr)
//     return(SecondLargestValue)
// }
// console.log(largestValue(intArray))

// what is the diffrece between Filter()and find method in javascript

//  filetr method returns the matched values in an
//   array from the coolection find()method the returns
  
//   the first value the matches from the coolection once 
//   it matches the value in finding it will not check the remaing values
//    in the array collection

// const  empArr ={
//  name:"samiksha",age:"22",
//  name:"iksha",age:"27",
//  name:"sami",age:"2u",
//  name:"amiksha",age:"28",
//  name:"miksha",age:"28",
// };

// const filteredItem=empArr.filter((item)=>{
//     return item.age>30
// })
// console.log(filteredItem)


// const  empArr ={
//     name:"samiksha",age:"22",
//     name:"iksha",age:"27",
//     name:"sami",age:"2u",
//     name:"amiksha",age:"28",
//     name:"miksha",age:"28",
//    };
   
//    const findItem=empArr.find((item)=>{
//        return item.age>30
//    })
//    console.log(findItem)


// how to the find the missing number in a given integer array if 1 to 10

// const arrNumber = [2,4,6,8,10,12,14,16,18,20]
// const missArray=[]
// const missingValue=(arr)=>{
//     const minValue=Math.min(...arr)
//     const maxValue=Math.max(...arr)
//     for(let i=minValue;i<maxValue;i++)
//     if(arr.indexOf(i)<0){
//         missArray.push(i)
//     }
//     return(missArray)
// }

// console.log(missingValue(arrNumber))

// how to find even or odd number in a given array in javaScript
 const numbers = [12,34,56,78,90,13]
//  const even=numbers.filter((item)>{
//     return item%2===0
//  })
//  const odd=numbers.filter((item)>{
//     return item%2==!0
//  })
//  console.log("even numbers",even)
//  console.log("odd numbers",odd)


// how to find the sum of all element in a given array[]in java script 

// const number = [12,34,56,78,90,13]
// const sumOfNumber=(arr)=>{
//     return arr.reduce((pre,cur)=>{
//         return pre+cur
//     })
// }
// console.log(sumOfNumber(number))


// how to find Factrocial(n!) of a given number in java script
//  the Fcctroical of a number is the product of all number from 1 to that number
//  for Example : factorical og 5 is equal to 5!=1*2*3*4*5*=120
//  factorical of nagative number is not poosible

// const inputNum=prompt("please Enter Number")
// var fact=1;
// if(inputNum<0){
//     console.log(`Factorical of ${inputNum} is not possible`)

// }else{
//     for(let i=1;i<=inputNum;i++)
//     fact=fact*1
// }
// console.log(`Factorical of ${inputNum}is ${fact}` )

const reverseString=(str)=>{
    var strToArray=str.split("")
    return strToArray

}
console.log(reverseString("butter"))


// How to polindram in java Script?
//madam
// a word vrese or sentence or a number that reads same backword or faorword



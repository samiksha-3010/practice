// let start  = 8457;
// let end = 6985;
// const twoStage = (start,end) =>{
//     let filterArray =[]
//    for (let i = start; i >end; i--){
//     if(i % 2 == 0 || i % 5 == 0 || i% 10 == 0){
//         filterArray .push(i)
//     }
//    }
//    console.log(filterArray)
//    let result=[]
//    for(let k=0;k<filterArray.length;k=k+2){
//     result.push(filterArray[k])
//    }
//    console.log(result)
// }

// {
//     let arr = [12,12,12,34,23,45,6,7]
//     let count = 0;
//     for(let i = 0;i<arr.length;i++){
//         count+=arr[i]
        
        
//     }
//     console.log("Sum is ",count)  /// add is 
// }

// const number = [12,34,56,78,90,12]
// {
//     let max = []
//     let count = 1
//     for(let i = 0;i<number.length ;i++){
//         if(number[i]>count)
//         max.push(number[i])
//     count++
//     }
//     console.log("The Maxium Number is" +max)
// }
{  
const FindMax = (...arr)=>{
    let result = Math.max(...arr)
    console.log(result);
}
FindMax(12,10,5,1,5)
}

// Write a function to calculate the sum of all numbers in an array.

// const allNum= (num)=>{
//     let max=num.reduce((a,b)=>a+b)
//     console.log(max)

// }
// allNum(number)

//loop
// {
//   let total = 0;
//   for(let i = 0; i<number.length; i++) {
//     total+=number[i]
//   } 
//   console.log(`the total num is $ {toatal}`)
// }


 // pop is inbuild fuction that remove last element of array


// const CheckedLength = (arr) =>{
//     arr.pop()
//    return arr
// }
//Question 3: How to add an element to the end of an array


const Arr = [12,13,14,25,24,34]
Arr.push(10)
    console.log(Arr)


//Question 2: How to access the first element of an array

const AccessFirstElememt =(arr)=>{
    return arr[0]
}
console.log(AccessFirstElememt([12,13,45,67,89]))

//How to remove the last element from an array
// create a function that remove last element

const RemoveElement =(arr) =>{
    return arr[0]
}
console.log(RemoveElement([87,1112, 34,56,78,90]))

//Question 5: How to check the length of an array

const CheckedLength=(arr)=> arr.length
console.log(CheckedLength([12,14,12,2,23,45,6]))

// write a function  that add 55 number from array
{  
const arr = [1,2,3,4,5,6,7,8,9,"a","b","r","t","u","f"]
for (let i =0; i<6;i++){
    let add = "*"
    add+=arr[Math.floor(Math.random()*arr.length)]
    console.log(add)
}
}

// write a function to find min and max number in array
const num = [ 12, 14, 52, 4, 54, 69, 45, 41, 23, 64, 14, 10, 22]
const FindMinMax=() =>{
    let max = num[0];
    let min = num[0]
    for(let i = 1;i< num.length; i++){
    if(num[i]<min){
        min = num [i]
    }
    return {min,max}
    }
    console.log(FindMinMax)
}

//Write a program to reverse an array or string
const arr = [12, 14, 11, 26, 41, 23, 5];

const reverseArray =(...arr)=>{
   return arr.reverse

}
// let arr1 = reverseArray(arr)
// console.log(arr1)

// let arr2 = reverseArray(11,14,52,14,55,4,34,45)
// console.log(arr2)


//Check if two arrays are equal or not

{
    const arr1=[1,2,3]
    const arr2=[3,2,1]
    function checkEqual(arr1,arr2){
      if(arr1==arr2){
        console.log('array is same');
      }else{console.log('array is not same');}
    }
    checkEqual(arr1,arr2)
  }



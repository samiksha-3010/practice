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

// var res = []; // 1, 2,3,4
// var nums = [3,3,3,3,5,5,5,8,8,8,9]
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] != nums[i + 1]) { //  nums[3] = 2,  nums[4] = 3
//         res.push(nums[i])
        
//     }
// }
// console.log(res);







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



// How do you declare an empty array in JavaScript?


// const arr = Array (0)
// console.log(arr)
// let arr1 = [];

// console.log(arr1)

// Array Initialization: Create an array with the numbers 1 to 5.


let arr = [1,2,3,4,5,6]
console.log(arr)

// Accessing Elements: How do you access the third element in an array?

console.log(arr[4])
// Adding Elements: Add the number 6 to the end of an array.

arr.push(9)
//[1, 2, 3, 4, 5, 9]
console.log(arr)

// Removing Elements: Remove the second element from an array.

console.log(arr.splice(2,4))

// Array Length: Write code to find the length of an array.
console.log(arr.length)

// Array Iteration: Use a for loop to iterate through and print all elements of an array.


for (let i=0; i<arr.length; i++){
    console.log(arr[i])
}

// Array Sum: Write a function that calculates the sum of all elements in an array of numbers.

const findSum = (arr) =>{
    let total = 0;
    arr.forEach((element)=>{
        total +=element

    })
    return total
}
console.log(findSum(arr));

// Array Max Value: Write a function to find the largest number in an array of numbers.

let arr1 = [10,20,30,40,405,12]

let findLargest = (arr) =>{
    return arr.reduce((prev,cur)=>{
       return prev > cur ? prev : cur;
    })
}
console.log(findLargest(arr1))

let findLargestLoop = (arr) =>{
    let largest = arr [0]
    for(let i = 1; i<arr.length; i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    return largest;
}
console.log(findLargestLoop(arr1), "loop")

// Array Min Value: Write a function to find the smallest number in an array of numbers.

let findSmallest = (arr)=>{
    let smallest = arr[0]
    for(let i = 1; i< arr.length; i++){
        if(arr[i]< smallest){
            smallest = arr[i]
        }
    }
    return smallest
}
console.log(findSmallest(arr1))

// Array Sorting: Sort an array of strings in alphabetical order.

const sortStr =(arr)=>{
    return arr.sort();


}
console.log(sortStr(["samiksa","diksha","nidhi","annu","ruhi"]))

// Array Reversal: Reverse the order of elements in an array.

const reverseArr = (arr) =>{
    console.log(reverseArr([10,20,30,40]))
}

// Array Filtering: Create a new array containing only even numbers from an existing array.
// using forEachb method

let evenArr = (arr) => {
    let even = [];
    arr.forEach((ele) => {
      if (ele % 2 === 0) {
        even.push(ele);
      }
    });
    return even;
  };
  console.log(evenArr([10, 3, 2, 1, 5, 4, 63, 8, 12]));

  // using filter method

  let evenNumber = (arr) =>{
    let even = []
    arr.filter((element)=>{
        if (element % 2 === 0){
            even.push(element)
        }
    })
    return even
  
  }
console.log(evenNumber([10,20,30,67,54,32]))

  // Array Mapping: Double each element in an array of numbers using the map() method.


let copy = (arr) =>{
    return arr.map((element)=>{
        return element
    })
}
console.log(copy([40,20,70]))

const Concatenate = (arr,arr1)=>{
    return arr.concat(arr1)
}
console.log(Concatenate([10,20],[30,40]))


// Array Searching: Write a function that checks if a given element exists in an array.

// Array Unique Values: Write a function to remove duplicate values from an array.

const removeDuplicate = (arr) =>{
    let remove = arr.filter((element,index,arr) =>{
        return arr.indexOf(element) === element
    })

    return remove ;
}
console.log(removeDuplicate([10,20,30,40,50.20,20]))

// Array Slicing: Create a new array that includes elements from the third to the fifth position of an existing array.

let SliceArr = (arr)=>{
    return arr.slice(3,6)
} 
console.log( SliceArr([10,20,30,40,50.20,20]))

// Array Joining: Convert an array of words into a single string sentence.

const joinStr = (arr) =>{
    return arr.join('')
}
console.log(joinStr(['neha','sunidi','megha','iam student']))

const replace = (arr) =>{
    return arr.slice(2,1)
}
console.log(replace([10,20,30,40]))

// const findEvenNum=(...num)=>{
//     let a=  num.filter((val)=> val%2==0)
//       console.log(a)
//   }
//   findEvenNum(12,41,11,2,36,22,20)

  const findEvenNum=(...num)=>{
    let a=  num.filter((val)=> val%2==0)
      console.log(a)
  }
  findEvenNum(128,417,110,2,361,224,200)


  const filterString=(...arr)=>{
    const result = arr.filter((str)=>{
        return str.length >=5
    })
    console.log(result)
}
filterString('anshu','mohiks','deesha','ruhinika')


const student=[{
    name:'anshu',
    age:22
},{
    name:'mohika',
    age:18
},{
    name:'deesha',
    age:21
},{
    name:'ruhunika',
    age:15
}
]
const filterStudentAge=()=>{
    const result = student.filter((student)=>{
        return student.age !==18;
    })
    console.log(result)
}
filterStudentAge()
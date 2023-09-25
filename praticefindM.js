//  const array1 =  [5, 12, 8, 130, 44]
//  const found = array1.find(element  => element>  20);    //output 130
//  console.log(found);


// const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
//   ];
  
//   const result = inventory.find(({ name }) => name === "cherries");
  
//   console.log(result); // { name: 'cherries', quantity: 5 }


// const fruits = [
//     { name: "orange", quantity: 4},
//     { name: "apple", quantity: 3},
//     { name: "bnana", quantity: 5},
// ];
// const result = fruits.find (({name}) => name == "apple", "bnana", "orange" )
// console.log(result)

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);

// const student = [ 'samiksha', 'pooja', 'poohu', 'meghali', 'shivani']
// const result = student.filter (  student => student.length > 7) 
// console.log (result);



// const array1 = [1, 4, 9, 16];


// const map1 = array1.map(x => x * 2);

// console.log(map1);


// const array1 = [ 'samiksha', 'poohu', 'pooja', 'shivani', 'mwghali']
// const  map1 = array1.map ( )
// console.log (map1)


// const array = [15, 16, 17, 18, 19];

// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }
// array.reduce(reducer);



// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
//   ]);
//   console.log(new Map)
   

//////map method


//  const arr1= [ 23, 45, 67, 89]
// const newArr = arr1.map ((element)=> {     
// return element *2
// })
// console.log(newArr);
 

//filter method 

// const arr2 = [2,3,4,6,8,9, 8]
// const newArr = arr2.map ((index)=>{
//   return index%3==0;
// })
// console.log(newArr)                               //condition based return new array


///reduse method 


// const arr3 = [ 2, 4, 56, 7, 9, 21];
// const newVlue = arr3.reduce((prev, currnt)=>{
//   return prev+currnt;
// })
// console.log(newVlue)

// const arr4 =['samiksha', 'Anika', 'pooja']
// const newArr = arr4.map((element) =>{
//   return element (pooja)
// })
// console.log(newArr)

// const arr5 = [34, 56, 78, 90, 12, 34]
// const newArr = arr5.map ((element)=>{
//   return  element-18
// })
// console.log(newArr)


// const arr1 = [23, 45, 67, 89, 90, 12];
// const newArr = arr1.map((index, element) =>{
//   return index, element + 4
// })
// console.log(newArr)


// const  arr3= [ 23, 45, 67, 89,12];
// const newArr = arr3.map((element) =>{
//   return element %3 == 1
// }) 
// console.log(newArr);

// const arr4 = [23, 56, 89, 12, 41, 23];
// const newArr = arr4.filter((element) =>{
//   return element %2==0
// })
// console.log(newArr)                 //  even number return condition based


//  const arr4 = [24, 42, 48, 84,];
//  const newArr = arr4.filter ((element) => {
//   return element%4== 0
//  });
//  console.log(newArr)

//  const arr4  = [2,4,6,8,10];
//  const newArr = arr4.filter((index)=> {
//   return index%3==0
//  })
//  console.log(newArr)

//  const arr6 = [144, 188, 244, 422];
//  const newArr = arr6.filter((element) =>{
//   return element%12==0
//  })
//  console.log(newArr)


 ///////////reduse method 

//  const arr2 = [122, 134, 152, 172]
//  const newValue = arr2.reduce ((preva, cuurnt) =>{
//  return preva-cuurnt
//  })
//  console.log(newValue)

//  const arr2 = [23, 45, 67, 89, 12]
//  const newValue = arr2.reduce((prev, cuurnt) =>{
//    return prev*cuurnt
//  })
//  console.log(newValue)


var createHelloWorld = function() {
  return function() {
      return "Hello World";
  }
};
console.log("function")


 










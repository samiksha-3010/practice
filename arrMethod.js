// const items = ["item1", "item2", "item3"];
// const copyItems = [];

// // before
// for (let i = 0; i < items.length; i++) {
//   copyItems.push(items[i]);
// }
// console.log(copyItems)

// // after
// items.forEach((item) => {
//   copyItems.push(item);
// });
// // console.log(items);

// const item = ["apple","banana", "mango"];
// const copyItem = [];

// for (let i = 0; i< item.length; i++){
//     copyItem.push(item[i]);
// }
//  console.log(copyItem);

//  let mapArr = [2, 4,6 ,8, 9];
//  let newMap = mapArr.map((element,index,array)=>{
//     return index
//     return element;
//     return array;
//  })
//  console.log(newMap)

// const words = [ 'samiksha', 'pooja', 'nidhi', 'samikshayadav'];
// const result = words.filter(word=> words.length<7);
// console.log(result);

      

// let filtArr = [5, 8, 68, 4, 3, 11, 54, 100];

// let filterArray = filtArr.filter((element, index) => {
//     return element > 10;
//     // return element;
//     return index > 2;
// });

// console.log(filterArray);


// let arr = [5, 10, 55, 22, 3];

// arr.forEach((element, index, array) => {
//     // // console.log(element);
//     // console.log(index);
//     // // console.log(array);
//     return element;
// });
// // console.log(newArr);


// let arr = [ 5, 1, 10, 11, 7];
// arr .sort();
// console.log(arr);

// arr.sort((a,b)=>{
//     return b-a;     //descending
// });
// arr.sort ((a,b)=>{
//     return a-b;  //acesending
// })
// console.log(arr);


// let str = "samiksha";
// let makeArr = Array.from(str);
// console.log(makeArr);

// let arr = [5, 2, 3];
// let newArr = Array.from(arr, (x) => {
//   return x + x;
// });

// console.log(newArr);

// let arr = [5, 8, 6, 7, 9, 10, 20, 30, 54, 12, 5, 6, 865, 4];
// console.log(arr.indexOf(30));
// console.log(arr.length);
// console.log(arr.indexOf(arr.length));


// ======================SOME METHOD

// let arr = [2, 4, 6, 8, 9, ];
// let someArr = arr.some((element) =>{
//  return element > 3;
// })
// console.log(someArr);


// *FINDINDEX* =>  returns the index

// const array1 = [5, 12, 8, 120, 44];
// const isLastNumber = (element) => element > 110;
// console.log(array1.findIndex(isLastNumber));


// const array1 = [5, 6, 7, 8, 9, 134, 123] ;
// const isLargeNumber = (element )=> element < 120 ;
// console.log (array1.findIndex(isLargeNumber));


// const  array1 = [ 23, 56, 12, 67, 23, 32];
// const isLargeNumber = (element) => element< 67;
// console.log(array1.findIndex(isLargeNumber));


// *FOREACH* => executes a provided function once for each array element

// const array1 = ['a', 'b', 'c'];
// array1.forEach(element => console.log(element));


//*JOIN* => returns a strings without any seperator

// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join());


// const element = [ 'fiar', 'air', 'water'];
// console.log(element.join(0));



//*MAP* => creates a new array

// const array1 = [1, 4, 9, 16];
// const map1 = array1.map(x => x * 2);
// console.log(map1);



//*REVERSE* => used to reverse an array

// const array1 = ['one', 'two', 'three'];
// console.log('array1:', array1);
// const reversed = array1.reverse();
// console.log('reversed:', reversed);            //output three two one

// const array1 = [ 'input', 'output', 'index']
// console.log('array1:', array1);
// const reversed = array1.reverse();
// console.log('reversed:', reversed);

//*SORT* => sorts the array in ascending order

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort();
// console.log(months);


// const weak = ['sunday', 'monday', 'tuesday', 'wedenesday'];
// weak.sort();
// console.log(weak);

// const month =[ 'jan', 'feb', 'mar', 'dec']
// month. sort();
// console.log(month);


//*SOME* => returns true or false value based on conditions

// const array = [1, 2, 3, 4, 5];
// const even = (element) => element % 2 === 0;
// console.log(array.some(even));

// const array = [1, 7, 3, 9, 5];
// const even = (element) => element % 2 === 0;
// console.log(array.some(even));

 


// const  array = [2, 4, 6, 8,  10];
// const even = (element ) => element % 3===0;
//     console.log (array.some(even));


//*SPLICE* => removes or replaces existing array

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// console.log(months);

// months.splice(4, 1, 'May');
// console.log(months);


// const weak= [ 'month', 'june', 'july', 'dec'];
// // weak.splice(1,0,'jaunary');
// // console.log(weak);


// weak.splice(2,1, 'may');
// console.log(weak);

//*SLICE* => returns a part of array which falls under start and end index nos. mentioned

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));

// console.log(animals.slice(2, 4));

// console.log(animals.slice(1, 5));

// const flowers = ['louts', 'rose', 'lily','hibiscuc', 'chemali' , 'chamapa', 'bela']
// // console.log(flowers.slice());

// console.log(flowers.slice(2,4))


// const ratings = [5, 4, 5];
// let sum = 4;

// const sumFunction = async (a, b) => a + b;

// ratings.forEach(async (rating) => {
//   sum = await sumFunction(sum, rating);
// });

// console.log(ratings);

    //  ******using for each()on sprays arrays




// const arraySparse = [1, 3, , 7];
// let numCallbackRuns = 0;

// arraySparse.forEach((element) => {
//   console.log({ element });
//   numCallbackRuns++;                    //notunderstood
// });

// console.log({ numCallbackRuns });

// var x = 10;

// function createFunction1() {
//   const x = 20;
//   return new Function("return x;"); // this `x` refers to global `x`
// }

// console.log(x)

// myName = "Chris";

// function logName() {
//   console.log(myName);
// }

// logName();

// var myName;


// const bird = { species: "Kestrel" };
// console.log(bird.species);

// let myNumber = "74";
// myNumber = Number(myNumber) + 5;

// console.log(myNumber)

let num1 = 4;
num1++;
console.log(num1)

let num2 = 6;
num2--;
num2;
console.log(num2)



const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.textContent === "Start machine") {
    btn.textContent = "Stop machine";
    txt.textContent = "The machine has started!";
  } else {
    btn.textContent = "Start machine";
    txt.textContent = "The machine is stopped.";
  }
}
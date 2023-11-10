var myData = {name:"samiksha",age:"23",Location:"Mumbai",Hobbies:"Music",FavCoulur:"White",student:["nidhi","siddhi","ruhi","pihu"]}
console.log(myData.name)
console.log(myData.age)
console.log(myData.Location)
console.log(myData.student)
console.log(myData.student[1])

var myObject ={}
myObject["name"]="Samiksha";
myObject["age"]="23";
myObject["subject"]="Biology";
myObject["IscompliteAssigement"]="true";
myObject["IsActiveOnedays"]=["Monday","Tuesday"]
console.log(myObject)

// Q given an array and return only unike number

// var number= [0,1,2,3,3,4,4,0,1,2,5,6,6,5,10,11]
// var number = [...new Set(number)];

// console.log(number);


var numbers = [0, 1, 2, 3, 3, 4, 4, 0, 1, 2, 5, 6, 6, 5];

// Using filter and indexOf to get unique values
var uniqueNumbers = numbers.filter((value, index, unikeValue) => {
    return unikeValue.indexOf(value) === index;
});

console.log(uniqueNumbers);






// const numbers = [0, 1, 2, 3, 3, 4, 4, 0, 1, 2, 5, 6, 6, 5];

// let temp = {};

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] in temp) {
//     temp[numbers[i]] += 1;
//   } else {
//     temp[numbers[i]] = 1;
//   }
// }
// console.log(Object.keys(temp));

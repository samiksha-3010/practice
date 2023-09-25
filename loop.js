// var array = [3,45,6,7,7];
// for( var i =0;i<array.length;i++  ){
//     console.log(array[i])

// }
// for ( var i=0;i<array.length;i++){
//     console.log(array[i]);
// }


// var array = [2,3,4,6];

// for (var i=0;i<array.length;i++){
//     console.log(array[i]);
// }                             
                                //  =====  + , - , * , / 

// var number1 = 10;
// var  number2 = 20;

// var addition = number1 + number2;
// console.log (addition);

// var sub = number1 - number2;
// console.log(sub)

// var mul = number1 * number2;
// console.log(mul)

// var div = number1 / number2
// console.log(div);

// var i = 1;
//  console.log(i); i = i + 1;
// i++;
// i++;
// i++;
// console.log(i);


// var i = 1;
// console.log(i)
// i = i + 1;
// i++;
// i++;
// i++;
// i++;
// console.log(i)
                                //   <==>

// var number1 = 100;
// var number2  = 120;
// var number3 = 200;
// console.log(number1 < 150)


// console.log(number2 >140);

// console.log(number3>120);

                            // opreator   &&  

  // var  num1 = 123;
  // var num2 = 123;
  //   console.log (num1==num2);
  //   console.log (num1 ===num2);                       
      

  //   var  num1 = 98;
  //   console.log(num1 > 50 && num1 < 99 && num1 < 10);
  //   console.log(num1 > 50  || num1 < 90 || num1 < 20 );
                           
                            
                            
                          
                       
// String - text - '1234' , "LENOVO", "Hello" , `Hi`
// Number - number - 123, 34,65.56,7889856,0.344
// Boolean - true , false 

// Varibles - we can store the data - 
// Sntax = 
// var kuchbhi = '8976543';
// console.log(kuchbhi);    

// var kuchbhi = '12345';
// console.log("Data here-", kuchbhi)
// console.log("Datatype -", typeof(kuchbhi));
// var kuchbhi = 12345;
// console.log("Data here-", kuchbhi)
// console.log("Datatype -", typeof(kuchbhi));

// var booleanValue = 'false';
// console.log(booleanValue)
// console.log(typeof (booleanValue))
// var booleanValue = false;
// console.log(booleanValue)
// console.log(typeof (booleanValue))


// Q. Check user age and provied licennnn... 

// if user age is 18 then he is applicbke for Learnign licc... 
// user age is greater than 18 and lesser than 80 then dl 
// user age is lesser 18 or greter 80 not allowed dl  


var userAge = 34;

// if (userAge == 18) {
//     console.log("You are applicable for Learning Licence...")
// } else if( userAge < 80 && userAge > 18 ){
//     console.log("You are allow for Driving Licence..")
// } else {
//     console.log("You are NOT allow for driving licenceee...")
// }

//  var userAge = 18;
// if  (userAge == 18){  
// console.log("you are applicable the lerning lice.....")
// } else if (userAge <80  && userAge > 18){
// console.log("you are allow the driving licencee....")
// }else{
//   console.log("you are not allow the driving lice.....")
// }

// var userAge = 18;
// if (userAge == 18){
//   console.log("you are applicable the learning lic....")
// }else if (userAge <80 && userAge > 18) {
//   console.log("you are allow the driving linc....")
// }else{
//   console.log("you are not allow the driving lincee....")
// }

// 





const arr = [12,14,55,45,86]
for (let i=0;i<arr.length;i++){
  console.log(arr[i])
}

// for of loop shortcut way of above example
for(element of arr){
  console.log(`the first elementis ${element}`)

}
// for in loop it give you key of array array is basically an object so it return key of arr 0 is key fo 12 if you want value just give [name of array]

for (item in arr){
  console.log(item)

}
//this is foreach method 
arr.forEach((element)=>{
  console.log(element+1)
})

//map method return new array you can give index and array
 let a =arr.map((items,index,array)=>{
  console.log(`${index}:${items+5}`)
  return items+3

 })  
 console.log(a)  
 
//  filter Method

let b=arr.filter((items)=>{
  return items< 20

})
console.log(b) //12,14

//  reduce method 

let c = arr.reduce((h1,h2)=>{
  return h1+h2
})
console.log(c)//212

const reduce=(h1,h2)=>{
  return h1+h2
}

const d = arr.reduce(reduce)
console.log(d) //212


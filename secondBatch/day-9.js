function addtion (){
    var number1 = 20;
    var number2 = 20;
    console.log(number1+number2)
}
addtion();


function addition(awdiz, insitute) { // define names for values
    console.log(awdiz, insitute)
}

addition(10, 20); // pass values

function addition(num1,num2,num3){  //// define names for values
    console.log(num1,num2,num3)
}
addition(10,20,30) // pass values


function  addition(num1,num2){
console.log(num1+num2)
}
addition(30,40)

//qustion
var array = [1, 9, 11, 3, 42, 52, 61, 7, 8, 9, 10];
var target = 12;
function findTarget(target, array) {
    // console.log(target, array)
    var flag = false;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == target) {
            console.log("We got it.")
            flag = true;
        }
    }
    if (flag == false) {
        console.log("Not found.")
    }
}
findTarget(target, array)

function functionOne(){
    console.log("first")//only print
    console.log("second")
    return "hello from function"  
}
functionOne();
function addtion(num1,num2){
 // console.log(2+3)   // it only print the passed value
  return num1 + num2 // it return the pass value
}
console.log(num1+num2)

var answer = addition(2, 3)  // addition function gonna return a value which we are storing into varible
console.log(answer)
function test(){
    console.log("Test 1")
    return "hii" // end statement bloc stop
    console.log("Test 2")
}
test();
 

function FindEven(number){
    if(number % 5==0){
        return "Number is even"
    }else{
        return "Number is obb"
    }
   
}
console.log(FindEven(4))

function Find(number) {
    if (number % 2 == 0) {
        return "Number is even"
    }
    console.log("hello")
    if (number > 30) {
        return "Number Is Greater Than 10"
    }
}

console.log(Find(20))







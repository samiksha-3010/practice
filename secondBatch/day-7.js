//  find number from given renge whic are odd
var count = 0
for (var i =23; i<=45; i++){
	if(i % 2 !=0){
		console.log(i)
	}
}

var count = 0;
for(var i=23;i<=45; i++){
    if(i%2!=0){
        count ++;
    }
}
console.log(count) 


var oddcount = 0;
var evencount = 0;
for(var i=23; i<=45;i++){
    if(i%2 !=0){
        oddcount ++
    }else{
        evencount ++
    }
}
console.log(oddcount,"oddcount")
console.log(evencount,"evencount")

var oddNumber = []
for(var i=23; i<=45; i++){
    if(i % 2 !=0){
        oddNumber.push(i)
    }
}
console.log(oddNumber,'list')

var evenNumber = []
for(var i=23; i<=45; i++){
    if(i % 2 !=0){
        oddNumber.push(i)
    }
}
console.log(evenNumber,'list')


var array = [1,2,3,4,5,6,7,8,23,43,65,76,24,12,34]
var target= 34;
var flag = false;
for( var i = 0; i< array.length; i++){
    if(array[i] == target){
        console.log("Found it")
        flag = true
    }
console.log("not found")
}

var array = [2,3,4,5,6]
var target = 8;
for(var i = 0; i< array.length; i++){
    for(var j = 1; j< array.length; j++){
    if(array[i]+array[j] == target){
        console.log(array[i],array[j])
    }
}
}





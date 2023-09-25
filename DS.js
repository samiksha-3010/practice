// let array =["lucky","scale", "happy", "strength", "peace", "happy", "happy","kuhoo"]

// function removeDuplicate(arr){
//     return  arr.filter((element,index)=>arr.indexOf(element) === index)
// }

// console.log( removeDuplicate(array))

// let array =["lucky","scale", "happy", "strength", "peace", "happy", "happy","kuhoo"]

// function removeDuplicate(arr){
//     let unique = []
//     arr.forEach((element)=>{
//         if(!unique.includes(element)){
//             unique.push(element)
//         }
//     })
//     return unique
// }

// console.log(removeDuplicate(array))

// let arr =["lucky","scale", "happy", "strength", "peace", "happy", "happy","kuhoo","poohu"]

// function removeDuplicate(arr){
//     let unique = []
//     let duplicate = arr.reduce((acc,num)=>{
//         if(!unique.includes(num)){
//             unique.push(num);
//             return acc;
//         }
//     })

//     return unique
// }

// console.log(removeDuplicate(arr))


// var arr = [2,3,4,12,15,10,72,45,69,32]

// function deleteArr(arr){
//     var position = 2
//     for (let i = position; i < arr.length - 1; i++){
//         arr [i] = arr[i+1]
//     }
//         arr.length = arr.length-1;
//         console.log(arr)
//     }
//     deleteArr(arr)

//     var arr = [12,15,10,72,45,69,32]

//     function deleteArr(arr){
//         var position = 6
//         for (let i = position; i < arr.length - 1; i++){
//             arr [i] = arr[i+1]
//         }
//             arr.length = arr.length-1;
//             console.log(arr)
//         }
//         deleteArr(arr) 

let data = new Map();
console.log(data)  //blank output
console.log(typeof data)  // object

data.set("name","samiksha")
data.set("age","23")
data.set("skill","Delovper")
data.set("Grudate","true")

console.log(data)

// get data

console.log(data.get("name"))
console.log(data.get("age"))

// delete item
data.delete 
data.delete("Grudate") // delete an key value pair form the obj
console.log(data)

//clear all the data from the obj

// data.clear
console.log(data.has("name"))  // it returns true or false value

// show all data in obj
data.forEach((value,key)=>{
    let myData ='';
    myData += key ="-";
    console.log(myData)
})

//************ALL THE KEYS OF OBJ */

for (item of data.keys){
    console.log(item)

}

//************ALL THE object OF OBJ */

for (item of data.object){
    console.log(item)
}

// BOTH KEYS AND VALUES in SEPERATE ARRAYS
 for (item of data.entries()){
    console.log(item)
 }

 let arr = [5,20,23,14,51]
function insertItem(arr){
    let newItem = 2000;
    let position = 2;

    for(let i = arr.length -1; i>=0;i--){
        if(i>=position){
            arr[i+1] = arr[i]
            console.log(arr[i+1],arr[i])
        }
        if(i=== position){
            arr[i] = newItem
        }
    }
    return arr
}

let newArr = inserElement(arr)
console.log(newArr)


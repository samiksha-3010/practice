// const coding = [ "samiksha","kalava",'java',"mogan",]
// const value = coding.forEach((item)=>{
//     console.log(item)
//     return item
// })

// console.log(value)

// myNums = [3,4,5,7,9,1,4,32,10.56]
//   const newNums = myNums.filter((num) =>{
//     num >4
//   } )
  
// console.log(myNums)

// const newNums  = []  
// myNums .forEach(( newNums) => {
//     if(newNums > 4)
// newNums.push(newNums)
// });


//  console.log( newNums)

// const myNumbers = [2,3,4, 5,67,3,2,3]

// const newNums  = myNumbers
// // .map((num) => num*5)
//  .map ((num)=> num+2)
//  .filter((num) => num>= 0)  // true false return krta hai k

// console.log(newNums)
// const  shoppingCart  = [{itemName:"js course",price:299}
// ,{itemName:"css course",price:1999}
// ,{itemName:"html course",price:2199}]

//  const printToPay =shoppingCart.reduce((acc,item) => acc + item.price,0)

// console.log(printToPay)

function greet (){
    alert ("Welcome")
    function hello(){
        alert (" click")
    }
}

// var samiksha = [12, 34, 56, 78, 90, 12, 34, 34]
// samiksha.push("nidhi")
// console.log(samiksha,"samiksha")

// var samiksha = [ "samiksha","nidhi","yadav","jaeemi"]
// samiksha.pop("sweta")
// console.log(samiksha,"samiksha")


// const plants = ["samiksha","onoin","pizza","smosa","pumpkin"]
// plants.pop ("Cabbage")
// console.log(plants,"plants")

// const frouts = ["apple",'bnana',"orange","mango","pumpkin"]
// frouts.push ("gavava","rose",)
//  console.log(frouts,"frouts")

// const array1 = [1,2,3,4,5,]
// array1.shift()
// array1.shift()
// array1.shift()
// array1.shift()
// array1.shift()
// console.log(array1)

// const array1 = ["samiksha","tanvi","neha","institute","ruhika"]
// array1.unshift("tanvi")
// array1.unshift("samiksha")
// array1.unshift("neha")
// console.log(array1)

// const array1 = [2,3,4,5,6,7,8,9,4]
// array1.unshift(23,45,67,89,"samiksha","nidhi")
// console.log(array1)

// const array1 = [ "samiksha","nidhi","sumitiya","anvi","wishu"]
// array1.shift("ruhika","sarika","snehu")
// console.log(array1)

// find the numbers who divisble by 5 from given range and return the array of those number

// var start  = 4569;
// var end = 4569

// function diviBY6(start,end){
//     var result = []
//     for(var i = start;i <= end; i++ ){
//         if(i % 6 == 0){
//             result.push(i)
//             console.log(i)

//         }
//     }
//     console.log(result,"-res")
// }

// var start = 3542;
// var end = 1421;

// function diviBY5(start, end) {
//     var result = [];
//     for (var i = start; i <= end; i++) {
//         if (i % 5 == 0) {
//             result.push(i)
//             // console.log(i)
//         }
//     }
//     console.log(result,"- res")
//  }
//  diviBY5(start, end)


//  function resolveAfter5Seconds(){
//     return new Promise((resolve)=>{
// setTimeout(()=>{
//     resolve("Samiksha")
// },5000)
//     })
// }
// async function asyncCall(){
//     console.log('start')
//     const result = await resolveAfter5Seconds()
//     console.log(result,"-result")
//     console.log("end")

// }
// asyncCall();
// setTimeout(()=>{console.log("after 5 sec ...")},2000)
// setInterval(()=>{console.log("Got..."),5000})

// function Myfunction(){
//     return("Hello World")
// }
// console.log("samikshu")

// const person = {
//     firstPerson:"Samiksha",
//     lastname:"yadav"
// }
// console.log(person.lastname)
// console.log(typeof("last Name"))

// const person = {
//     firstPerson:"Samiksha",
//     lastName:"Yadav",
//     age:23,
//     Adress:"Mumbai"
// }
// console.log(person.age)
// console.log(typeof("Adress"))

// const fruit = ["apple","bnana","mango"]
// let length = fruit.length
// console.log(fruit)

// const fruit = ["samiksha","pooja","shivani","pooja","megha","sami"]
// let fruits = fruit[1]
// console.log(fruit)


// var  num1 = 2344;
// var num2 = 8976;
// function  add  (num1 = num2){
//     console.log(num1+num2)
// }
// add(num1+num2)

// var  num2 = 6;
// var num3 = 6
// function add (num2 = num3){
//     console.log(num2+num3)
// }
// add (num2+num3)

// var num1 = 8;
// var num2 = 4;
// function dived (num1 = num2){
//     console.log(num1/num2)
// }
// dived (num1/num2)

// var num1 = 28;
// var num2  = 12;
// function mul (num1=num2){
//     console.log(num1*num2)

// }
// console.log(num1*num2)

// var num1 = 23
// var num2 = 21
// function sub (num1=num2){
//     console.log(num1-num2)
// }
// console.log(num1-num2)

// var  a=5;
// var b=3;
// var c=3;
// console.log(b)

// var target = 24
// var array = [9,3,4,5,6,7,2,1]
// for (var i=0;i<array.length; i++){
//     console.log(array[i])
//     for (var j=i;+1<array.length;j++){
//         if(array[i], array[j] == target){
//             console.log(array[i],array[j],"got!..")
//         }
//         console.log(array[i],"+",array[j],"=",array[i],array[j])
//     }
// }

// var target = 93
// var array = [3, 54, 65, 32, 6, 23, 56, 76, 17]

// for(var i = 0; array.length; i++){
//     console.log([i])
//     for(var j=i; i<array.length; j++){
//       if(array[i]-array[j] == target){
//         console.log(array[i],array[j],"got...")
//       }
//       console.log(array[i],"-",array[j],"=", array[i]+array[j])
//     }
// }

// var i = 0;
// i++
// console.log(i)

// for (var i=8;i<=14; i++){
//     console.log("samiksha",i)
// }

// for (var i=5; i<10; i++){
// console.log(i,i)
// }

// for (var i = 29; i>=12; i--){
//     console.log(i)
// }

// for(var i = 10; i>=12; i--){
//     console.log(i)
// }
// for(var i = 10; i >= 1 ; i--){
//         console.log(i)
//     }

//     for (var i=1; i<100;i+2){
//         console.log("hello",i)
//     }

//     for(var i = 50; i<=230; i =i *2){
//         console.log("hello","")

//     }
//     for (var i = 10; i<=1000; i= i ** 5){
//     console.log("hello",i);
// }
// for(var i = 1000/2; i >= 1 ; i = i - 10){
//     console.log(i)
// }
// var remote  =[ "samiksha","s","d","f","e","w",true,87,876]
// console.log(remote[6])
// console.log(typeof(remote))

// var number = 20
// console.log(number<10)

// var number = 23
// console.log(number>12)

var number = 65891;
// console.log(number<5)
// if(number<100){
//     console.log("Number is lesser than 100.")
// }else if(number<150){
//     console.log("Number is lesser than 658910 and greater than 150")
// }
// else if(number< 2378){
//     console.log("Number is greater than 2378")
// }else{
//     console.log("number is greater than 200 or 350")
// }

//  var number = 234
//  console.log("Number is greater than 432")

//  if (number<120){
//     console.log("Number is lesser than 100.")
//  }else if(number<789){
//     console.log("Number is lesser than 123 and greater than 200")
//  }else if(number< 456){
//     console.log("Number is greater than 65")
//  }else{
//     console.log("Number is greater than 200 or 345")
//  }

//  var num1 = "Nidhi"
//  var num2 = "samiksha"
//  var num3 = "Nidhi"
//  console.log(typeof(num2))
//  console.log(num1 == num2)


// var num1 = 98;
// console.log(num1>50 && num1<96 && num1<10)
// console.log(num1 > 50 || num1 < 90 || num1 < 20 )

// var num1 = 35
// console.log(num1 > 20 &&  num1 > 10 && num1 > 40 )
// console.log (num1>30 || num1> 23  || num1 >98)


setTimeout(function timer() {
    console.log('You clicked the button!');
  }, 2000); 
  
  console.log("Hi!");
  
  setTimeout(function timeout() {
    console.log("Click the button!");
  }, 5000);
  
  console.log("Welcome to loupe.");


  import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([])
  const [page, setPage] = useState(1)

  const fetchProducts = async () => {
    const res = await fetch(`https://dummyjson.com/products?limit=100`)
    const data = await res.json()

    console.log(data);

    if (data && data.products) {
      setProducts(data.products)
    }
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const selectPageHandler = (selectedPage) => {
    if (selectedPage >= 1 && selectedPage <= products.length / 10 && selectedPage !== page) {
      setPage(selectedPage)
    }
  }

  return (
    <div>
      {products.length > 0 && <div className="products">
        {products.slice(page * 10 - 10, page * 10).map((prod) => {
          return <span className="products__single" key={prod.id}>
            <img src={prod.thumbnail} alt={prod.title} /> {/* alt is imp */}
            <span>
              {prod.title}
            </span>
          </span>
        })}
      </div>}

      {products.length > 0 && <div className="pagination">
        <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>

        {[...Array(products.length / 10)].map((_, i) => {
          return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
        })}

        <span onClick={() => selectPageHandler(page + 1)} className={page < products.length / 10 ? "" : "pagination__disable"}>▶</span>
      </div>}
    </div>
  );
}

export default App;




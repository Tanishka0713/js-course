
// primitive daattypes
 
// 7 => number, string , bigInt , boolean, null, undefined, symbol

const value = 100
const score = 100.3
const name = "tanishka"
const totalScore = 21932846527364578458n
const isLoggedIn = true
const outsideTemp = null
let range;
const id = Symbol('123')
const newId = Symbol('123')
console.log(id === newId);


// non-primitive datatypes

// Array, object, function

// array
const cricketer = ["Dhoni" , "Sachin" , "Virat" , "Rohit" , "Raina"]

// object
const details = {
    name: "tanishka",
    favCricketer : 'Dhoni',
    number : 7
}
console.log(details);


// functions
const myFunction = function(){
    console.log("hello World");
}

myFunction()
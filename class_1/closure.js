// ! CLOSURE: It allows functions and variables to remember the scope in which they were created, even if they are invoked outside of the scope.  
// * Lexical scope
// * Alright kiddo, imagine you have a treehouse with different rooms. Each room has its own set of toys and stuff you can play with. Lexical scope in JavaScript is a bit like those rooms in your treehouse.

// * In JavaScript, when you write code inside a function, it's like creating a room. Each function has its own "room" where it keeps its own toys, like variables and functions. These toys can't be easily seen or used by other functions unless they go into that same room.

// * Let's look at some code to understand better:
function myTreehouse() {
 let toy = "Teddy bear"; // Imagine this is a toy in the room

 return function play() {
   console.log("Playing with", toy); // We can see and use the toy from the room
 }

 // play(); // Call the play function
}

myTreehouse(); // Call the myTreehouse function

//*  In this code, we have a function called myTreehouse. Inside this function, there's a toy called Teddy bear. Then, there's another function called play that uses the toy. But remember, play can only see the toy because it's in the same room (function) as the toy.

// *  Now, if we try to play with the toy outside of the room (function), it won't work


let z = 10;
// Global scope

function add1(m) {

 return function add2(n) {
  // enclosing scope or functional scope
  return function add3(o) {
   // local scope
   return m + n + o + z
  }
 }
}

const add2 = add1(2)
const add3 = add2(3)
const add4 = add3(4)
// console.log(add4)


// ! Exporting a module
let x = 20;
const getNum = () => x;
const setNum = (num) => {
 if (num < 18) {
  console.log(`Number is less `)
 }
}

export {getNum, setNum};

// ! Data privacy
function add10(num) {
 let number = 10;
 
 return {
  increment() {
   number += num
  }, 
  value() {
   return number
  }
 }
}

const result = add10(3);
result.increment()
// console.log(result.value())

function toUpperCase(name) {
 return function() {
  return name.toUpperCase()
 }
}

let res = toUpperCase("adeyanju")
console.log(res())

function greet(greeting) {
 return function(name) {
  console.log(`${greeting} ${name.toUpperCase()}`)
 }
}

let sayHi = greet("Hello")
sayHi("Fatima")

function add(m) {
 return function(n) {
  return m + n;
 }
}

const answer = add(10);
// answer = add(10) {
//  return 10 + n
// }d

function upperCase(data, callback) {
 setTimeout(() => {
  if(Number(data)) {
   callback(data.toString());
   console.log("Number is now a string");
  } else {
   callback(data.toUpperCase())
  }
 }, 3000)
}

upperCase("adeyanju", (data) => console.log(data))




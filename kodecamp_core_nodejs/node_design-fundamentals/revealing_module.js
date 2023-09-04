// * THE REVEALING MODULE PATTERN
// * The "revealing module pattern" is a way to organize your code in Node.js to keep things neat and easy to use. It helps you create private and public parts of your code.

// * The revealing module pattern is a design approach that allows you to create a module with both private and public functions or variables. Private things are only accessible within the module, while public things can be used by other parts of your program.

// ? Code Example:
// ? Let's say you're working on a Node.js program that needs to keep track of a counter. You can use the revealing module pattern to create a module that hides the inner workings of the counter but provides methods to interact with it:

// counterModule.js
const createCounter = () => {
 let count = 0; // This is private

 const increment = () => {
   count++;
 }; // This is private too

 const getCount = () => {
   return count;
 }; // This is public, can be accessed outside the module

 return {
   increment,
   getCount
 };
};

export default createCounter;


// main.js
const createCounter = require('./counterModule.js');

const counter = createCounter();

counter.increment();
counter.increment();

console.log(counter.getCount()); // This will output: 2


// * In this example, the count variable and the increment function are private within the counterModule, meaning they can't be accessed directly from outside the module. The getCount function is public, so you can call it from the main.js to retrieve the value of the counter.

// * This pattern helps keep your code organized and prevents accidental modification of private variables from outside the module
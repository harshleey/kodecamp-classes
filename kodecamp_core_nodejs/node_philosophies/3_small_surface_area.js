// * SMALL SURFACE AREA
// * The "small surface area" philosophy in Node.js suggests reducing the exposed or visible parts of your code to the outside world. This means keeping only the necessary parts accessible and hiding the rest. This makes your code more secure and easier to maintain.

// * Think of it like a building with only a few well-marked entrances, rather than having every door and window accessible to everyone. Here's a simple example to explain this:

// ? Suppose you're creating a banking application. You want to keep sensitive functions private and only expose the ones that users need to interact with.

// * Private Operations File (privateOperations.js):

// Private operations that should not be accessible from the outside
const calculateInterest = (amount, rate) => {
 return amount * (rate / 100);
};

const deductTax = (amount) => {
 const taxRate = 10;
 return amount - (amount * (taxRate / 100));
};

// Export only the necessary function
module.exports = {
 deductTax,
};


// * Main Application File (app.js):
// Import the public operation from privateOperations module
const { deductTax } = require('./privateOperations');

const initialAmount = 1000;
const finalAmount = deductTax(initialAmount);

console.log(`After tax deduction: $${finalAmount}`);


// * By adhering to the "small surface area" philosophy, you're controlling what parts of your code are accessible from other parts of your program. In this way, you're reducing the potential for bugs and security vulnerabilities by limiting the exposure of sensitive operations.

// * Imagine it like having a guarded entrance to a restricted area in a building – only authorized people can access it, while the rest of the building remains secure.
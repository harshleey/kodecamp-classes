// * BLOCKING I/O

// * "BLOCKING I/O" in Node.js refers to a situation where the program pauses and waits for an I/O operation to complete before continuing with other tasks. It's similar to waiting in line for your turn at the cashier.

// * Imagine you're at a coffee shop ordering a coffee. While the barista prepares your coffee, you wait there until it's done. During this time, you can't do anything else.

// ? In code, blocking I/O occurs when your program stops executing while it's waiting for something to complete. Here's a simple example:

const fs = require('fs'); // Import the file system module

// Reading a file synchronously (blocking I/O)
try {
  const data = fs.readFileSync('example.txt', 'utf8');
  console.log('File contents:', data);
} catch (error) {
  console.error('Error:', error.message);
}

console.log('Program continues...');

// * The fs.readFileSync function reads a file synchronously. This means the program will pause at this line until the file reading operation is completed.

// * While waiting for the file read to finish, the program won't proceed to the next line of code.

// * Once the file read is done, the program continues executing, and you see the "Program continues..." message.

// ? Blocking I/O can make your program less responsive because it waits for one task to complete before moving on to others. In Node.js, the emphasis is on non-blocking operations (asynchronous I/O) to keep your program responsive and able to handle multiple tasks simultaneously.
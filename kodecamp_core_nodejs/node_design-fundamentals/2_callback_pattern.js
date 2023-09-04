// * THE CALLBACK PATTERN
// * The "callback pattern" is a way to handle asynchronous operations in Node.js. It involves passing a function (callback) as an argument to another function that will be called once the operation is complete. Here's a simple explanation with a code example:

// * Imagine you're reading a book and you want to take a break once you finish a chapter. You tell your friend to call you when you're done. In this scenario, you're the callback function, and your friend is the function that calls you.

// ? In code, let's say you want to read a file and log its contents. Since reading a file can take some time, you don't want to block the program. You use the "callback pattern" to achieve this:

const fs = require('fs'); // Import the file system module

// Function to read a file and call the provided callback with the contents
function readFileAndCallCallback(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      callback(err, null); // Call the callback with an error if something went wrong
      return;
    }
    callback(null, data); // Call the callback with the data from the file
  });
}

// Callback function to log the contents or an error
function handleFileContents(err, contents) {
  if (err) {
    console.error('Error:', err.message);
  } else {
    console.log('File contents:', contents);
  }
}

// Read the file and pass the callback function
readFileAndCallCallback('example.txt', handleFileContents);

console.log('Reading file...');


// ? The "callback pattern" in Node.js is like telling your friend to call you when you're ready to take a break from reading. Similarly, in code, you're telling a function to call your provided callback when it's done with its task, allowing your program to continue running without waiting.
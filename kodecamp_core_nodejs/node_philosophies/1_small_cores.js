// * SMALL CORE
// * This means that nodejs core is built with few principles and one of this principle is "having the smallest set of functionality". It leaves the rest to the user space.

// * The user space is the ecosystem of the module living outside of the core

// * The "small core" philosophy in Node.js refers to the idea of keeping the core functionality of Node.js itself minimal and lightweight, while allowing additional features to be added through modules. This approach keeps the core simple and focused, allowing developers to add only the features they need for their specific projects.

// * Imagine Node.js as a toolbox with a few essential tools. If you need more specialized tools, you can bring them in separately.

// ? In this example, we'll use the built-in http module to create a simple web server. This module is part of the Node.js core and demonstrates the "small core" philosophy. We'll create a server that responds with "Hello, Node.js!" to any incoming HTTP request.

// Import the 'http' module, which is part of Node.js core
const http = require('http');

// Define the hostname and port number
const hostname = '127.0.0.1';
const port = 3000;

// Create a server using the http.createServer() method
const server = http.createServer((req, res) => {
  // Set the response header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Send the response body
  res.end('Hello, Node.js!\n');
});

// Start the server and listen on the specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// ! The "small core" philosophy in action here is that Node.js provides just enough functionality (the http module) to create a basic web server. If you need more advanced features like handling databases, authentication, or complex routing, you can bring in additional modules like express to extend the capabilities of your application without bloating the Node.js core itself.

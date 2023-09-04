// * SMALL MODULE
// * The "small module" philosophy in Node.js means breaking down your code into smaller, reusable pieces called modules. Each module focuses on doing one thing well. This approach makes your code easier to understand, maintain, and share with others.

// * Imagine your code is like a puzzle, and each module is a puzzle piece that fits together with others to create the full picture. Let's see a simple example to illustrate this:

// ? Suppose you're building a weather application. Instead of putting all the weather-related code in one huge file, you can break it down into smaller modules.

// ? Main Application File (app.js):

// Import the weather module
const weatherModule = require('./weatherModule');

// Get weather information using the module
const location = 'New York';
const weather = weatherModule.getWeather(location);

console.log(`Weather in ${location}: ${weather}`);

// ? Weather Module File (weatherModule.js):

// A simple module that provides weather information
const getWeather = (location) => {
 // In a real application, you might fetch weather data from an API
 const fakeWeatherData = {
   temperature: 25,
   condition: 'Sunny',
 };

 return `${fakeWeatherData.temperature}°C and ${fakeWeatherData.condition}`;
};

// Export the function to make it accessible from other files
module.exports = {
 getWeather,
};


// * By following the "small module" philosophy, you've separated the weather-related logic from the main application logic. This makes it easier to understand each part of your code and potentially reuse the weatherModule in other projects without duplicating code.

// * Remember, the idea is to break your code into smaller, focused modules that work together to achieve a larger goal, just like assembling a puzzle from individual pieces.
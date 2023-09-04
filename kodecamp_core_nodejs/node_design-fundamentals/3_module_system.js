// * THE MODULE SYSTEM
// * The "module system" in Node.js allows you to organize your code into separate files (modules) and share functionality between them. This promotes reusability and keeps your codebase organized. Here's a simple explanation with a code example:

// * Imagine you're building a recipe app. Instead of putting all your recipes in one huge cookbook, you create separate recipe cards for each dish. Each card contains instructions for a specific dish.

// ? In code, this translates to creating separate files (modules) for different parts of your application. Let's say you have a main.js file as the entry point and separate modules for recipes:

// * Main Application File (main.js):

// Import the recipe modules
const pastaRecipe = require('./pastaRecipe');
const cakeRecipe = require('./cakeRecipe');

// Use the recipe modules
pastaRecipe.makePasta();
cakeRecipe.makeCake();


// * Pasta Recipe Module (pastaRecipe.js):

// Define a function for making pasta
function makePasta() {
 console.log('Boil water, add pasta, and cook until done.');
}

// Export the function to make it accessible from other files
module.exports = {
 makePasta,
};


// * Cake Recipe Module (cakeRecipe.js):

// Define a function for making cake
function makeCake() {
 console.log('Mix ingredients, bake in oven, and frost with icing.');
}

// Export the function to make it accessible from other files
module.exports = {
 makeCake,
};

// ? The pastaRecipe.js and cakeRecipe.js modules contain functions for making pasta and cake, respectively. They both export their functions to be used in other files.

// * The module system and its pattern help you maintain a clean codebase by separating different parts of your application into manageable files. It's like having separate recipe cards for each dish in your cookbook, making it easier to find and share specific recipes.

// * As you build more complex applications, you can continue breaking down your code into smaller modules, promoting reusability and maintainability.





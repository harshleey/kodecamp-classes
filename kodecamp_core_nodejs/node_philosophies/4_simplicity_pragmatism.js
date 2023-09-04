// * SIMPLICITY AND PRAGMATISM
// * The "simplicity and pragmatism" philosophy in Node.js encourages developers to prioritize simple and practical solutions when writing code. This means avoiding unnecessary complexity and focusing on what works effectively for your specific task. Let's break it down with a simple example:

// ? Imagine you're building a basic to-do list application. Instead of overcomplicating things, you'll follow the philosophy of simplicity and pragmatism to create a straightforward solution.

// * Main Application File (app.js):

// A simple array to store the to-do list
const todoList = [];

// Function to add a task to the list
const addTask = (task) => {
  todoList.push(task);
  console.log(`Task "${task}" added to the to-do list.`);
};

// Function to display the current to-do list
const displayTasks = () => {
  if (todoList.length === 0) {
    console.log('Your to-do list is empty.');
  } else {
    console.log('Your to-do list:');
    todoList.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
  }
};

// Adding tasks and displaying the list
addTask('Buy groceries');
addTask('Finish homework');
addTask('Go for a run');
displayTasks();


// * The "simplicity and pragmatism" philosophy is evident in this example by keeping the code straightforward and solving the problem with a minimalistic approach. Instead of introducing unnecessary complexity, we focus on achieving the task's goal effectively and practically.

// * Think of it as building a bridge from point A to point B. You don't need extravagant features; you just need a strong, functional bridge that serves its purpose without unnecessary complications.

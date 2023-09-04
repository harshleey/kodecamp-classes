// * THE REFACTOR PATTERN
// * The "refactor pattern" is about improving your code by restructuring it without changing its external behavior. It's like rearranging your room for better organization without changing the furniture. Here's a simple explanation with a code example:

// * Imagine you're building a small program to calculate the area of shapes. At first, you write a single function to calculate the area of a rectangle:

function calculateRectangleArea(width, height) {
 return width * height;
}

const rectangleWidth = 5;
const rectangleHeight = 10;
const rectangleArea = calculateRectangleArea(rectangleWidth, rectangleHeight);

console.log(`The area of the rectangle is: ${rectangleArea}`);


// * Later on, you realize that you also need to calculate the area of a circle. Instead of adding the circle area calculation to the same function, you apply the "refactor pattern" by separating the calculation into its own function:

// Original rectangle area calculation
function calculateRectangleArea(width, height) {
 return width * height;
}

// New circle area calculation
function calculateCircleArea(radius) {
 return Math.PI * radius * radius;
}

// const rectangleWidth = 5;
// const rectangleHeight = 10;
// const rectangleArea = calculateRectangleArea(rectangleWidth, rectangleHeight);

const circleRadius = 7;
const circleArea = calculateCircleArea(circleRadius);

console.log(`The area of the rectangle is: ${rectangleArea}`);
console.log(`The area of the circle is: ${circleArea}`);

// * The "refactor pattern" encourages you to improve your code's structure to enhance readability, maintainability, and extensibility without changing how the code behaves from the outside. It's like reorganizing your things at home for better access and functionality while keeping the overall purpose of the space intact.

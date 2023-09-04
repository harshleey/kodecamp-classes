function Car(name, year) {
 this.name = name;
 this.year = year
}

// ? Adding a method to a prototype (NOT ON AN INSTANCE)
Car.prototype.displayDetails = function () {
 return `The car's name is ${this.name}`
}

Car.prototype.displayYearDetails = function () {
 return `The car was made in ${this.year}`
}

// * OTHER WAY TO DO IT
// Car.prototype = {
//  constructor: Car,
//  displayDetails:  function() {},
//  displayYearDetails: function () {}
// }
const car1 = new Car("Golf", 2022);
const car2 = new Car("Volvo", 1980)

console.log(car1.displayDetails())
console.log(car2.displayYearDetails()) 

console.log(car1.constructor === Car)

// ? Adding a method to another data types(array, string) prototype
Array.prototype.sum = function () {
 return this.reduce((prev, next) => prev + next);
}

const nums = [1, 2, 3, 4, 5]
console.log(nums.sum())

String.prototype.capitalize = function () {
 return this.charAt(0).toUpperCase() + this.substring(1)
}

const name = "chris";
console.log(name.capitalize())

// ! These are not good practices
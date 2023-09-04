function Car(name, year) {
 this.name = name;
 this.year = year;
 this.displayDetails = function () {
  console.log(`This is a ${this.name} car and it was made in year ${this.year}`) 
 }
}

// * An instance of the constructor
const car1 = new Car("Golf", 2022);
const car2 = new Car("Volvo", 1980)

console.log(`${car1.name} was made in year ${car1.year}`)

// ? This is calling the function in the object
car1.displayDetails()

// * To check if car1 is an instance of the Car object
console.log(car1 instanceof Car) // Returns true

function Product(name) {
 Object.defineProperty(this, "name", {
  get: function() {
   return name;
  },
  set: function(newName) {
   name = newName
  },
  enumerable: true,
  configurable: true
 })
}

const prod1 = new Product("Pringles")
console.log(prod1.name)
// * To set a new name
// prod1.set("Malteasers")
// console.log(prod1.name)

// ? How to check the properties this constructor has (it's own properties and the one it inherited from the global object prototype)
console.log("name" in prod1) // Returns a boolean (true)
console.log(car1.hasOwnProperty("name")) // Returns a boolean (true)
console.log("hasOwnProperty" in prod1)
console.log(prod1.hasOwnProperty("hasOwnProperty")) // return false
// * hasOwnProperty is a global property
let obj = Object.prototype;
console.log(obj.hasOwnProperty("hasOwnProperty")) //return true
// ! Note that this: ("hasOwnProperty" in prod1) is a property and this (prod1.hasOwnProperty("hasOwnProperty")) is a method


let objs = {}
let proto = Object.getPrototypeOf(objs)
console.log(proto === Object.prototype)

let newObj = {}
newObj.toString = function () {
 return "[object CustomName]"
};
newObj.valueOf = function() {
 return "[object ValueName]"
}

console.log(newObj.toString ()) 
console.log(newObj.valueOf ()) 
// * This modifies [object Object] to [object CustomName]

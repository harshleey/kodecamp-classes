let obj = {
 title: "unknown"
};

let book = Object.create(Object.prototype, {
 title: {
  configurable: true,
  enumerable: true,
  writable: true,
  value: "old book"
 }
})

let result = Object.getPrototypeOf(book)
console.log(result === Object.prototype)

function Car (name, model) {
 this.name = name;
 this.model = model
}

Car.prototype.displayName = function () {
 console.log(this.name, this.model)
}

Car.prototype.shout = function () {
 console.log("Shoutt!!!!!!")
}

function NewCar(brand) {
 this.name = brand;
 this.size = brand
}

NewCar.prototype = new Car();
NewCar.prototype.constructor = NewCar;

const car1 = new Car("Golf", 2023)
const NewCar1 = new Car("Toyota", 2022)
car1.displayName()
NewCar1.displayName()
NewCar1.shout()





function Phone(name, model) {
 this.name = name
 this.model = model
}


Phone.prototype.displayBrand = function() {
 console.log(`My phone brand is ${this.name} and the model is ${this.model}`)
}

Phone.prototype.ring = function() {
 console.log(`grrrrrrrrrrrr`)
}

function NewPhone(brand, model) {
 this.name = brand
 this.model = model
}

NewPhone.prototype = new Phone()
NewPhone.prototype.constructor = NewCar

const iphone11 = new Phone("Apple", "iPhone11")
const pro = new NewPhone("Apple", "12promax")
console.log(NewPhone.prototype)
iphone11.displayBrand()
pro.ring()
pro.displayBrand()
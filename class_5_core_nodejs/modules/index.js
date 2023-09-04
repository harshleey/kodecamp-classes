const mod = (function () {
 let privateProp = "Hello, i am private";

 function priv() {
  console.log("I am private")
 }

 return {
  publicVar: "I am a public variable",
  publicMethod: function () {
   console.log("I am a public method")
  }
 }
})();

console.log(mod.publicVar);
mod.publicMethod()
console.log(mod.priv());

export default mod
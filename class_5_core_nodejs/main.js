// * CONTINUATION-PASSING STYLE
// * In programming, "continuation-passing style" is a way of writing code where instead of getting the result of a computation directly, you pass a function (called a "continuation") that will handle the result when it's ready.

function add(a, b, continuation) {
 const result = a + b;
 continuation(result);
}

add(2, 3, (result) => {
 console.log(result);  // Outputs: 5
});


// * SYNCHRONOUS CONTINUATION-PASSING STYLE
// * In programming, "synchronous continuation-passing style" means that even though we're using the continuation-passing style, we're still doing things one after another without waiting for external events. It's like following a set of instructions step by step.

function sync (a, b, callback) {
 callback(a + b)
}

console.log("a")
sync(2, 7, function disR(result) {
 console.log(result * 2)
 console.log('added')
})

console.log("done")

// * ASYNCHRONOUS CONTINUATION-PASSING STYLE
// * In programming, "asynchronous continuation-passing style" means that we're using a style where we don't wait for things to finish before moving on. Instead, we pass along a function that should be called when a task is done. It's like leaving a note for someone to call you back once they've finished something, so you don't have to wait around.

function simulateAsyncTask(callback) {
 setTimeout(() => {
   const result = 42;
   callback(result);
 }, 2000); // Simulate a task taking 2 seconds
}

simulateAsyncTask((result) => {
 console.log('Task result:', result);
});

console.log('After calling simulateAsyncTask');


function addAsync(a, b, callback){
 setTimeout(() => {
  callback(a + b)
 }, 3000);
}

console.log("before")
addAsync(1, 2, function (result) {
 console.log(`result: ${result}`)
 // console.log('added')
})

console.log("after")

// * NON CONTINUATION-PASSING STYLE
// * This is the opposite of continuation passing
let result = [1, 2, 3].map((value) => {
 return value - 2
})

console.log(result);


// function asyncList(data, callback)
// {
//  for (let i = 0; i < data.length; i++) {
//   setTimeout(() => {
//     callback(data[i] * 2)
//     // console.log(data[i] * 2)
//   }, 1000)
//  }
// }

// // * The one second delay above is not as obvious as i thought it would but using "(i + 1) * 1000" was more obvious.

// const numbers = [1,3,5,6,3]
// asyncList(numbers, function (result) {
//  console.log(`result: ${result}`)
// })

// function asyncList(data, callback) {
//  data.forEach((number, index) => {
//    setTimeout(() => {
//      const doubledValue = number * 2;
//      console.log(doubledValue);

//      if (index === data.length - 1) {
//        callback('All done');
//      }
//    }, 5000); // Multiply by 1000 to make the delay more obvious
//  });
// }

// const numbers = [1, 3, 5, 6, 3];
// asyncList(numbers, function (result) {
//  console.log(result);
// });

// * callback always comes last in your function. However, errors comes first in the argument of a callback i.e (error, result) 
import { readFile } from "fs"

// fs.readFile(filename, [options], callback) 

// readFile(filename, 'ut8', function(error, data) {
//  if (error) {
//   handleError(error)
//   throw error
//  } else {
//   processData(data)
//  }
// })

function readJson(filename, callback) {
 readFile(filename, 'utf-8', function(error, data) {
  let parsed
  if (error) {
   return callback(error)
  }
  try {
   parsed = JSON.parse(data)
  } catch(error) {
    return callback(error)
  }
  callback(null, parsed)
 })
}

readJson("./names.json", function(error, result) {
 if (error) {
  console.log(error)
 }
 console.log(result)
})
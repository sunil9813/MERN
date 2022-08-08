const fs = require("fs")

/*const data = fs.readFileSync("asynFile.txt", "utf-8")
console.log(data) // 1st call
console.log("after the data") // 2nd call
*/

fs.readFile("asynFile.txt", "utf-8", (err, data) => {
  console.log(data) // call 2nd
})
console.log("after the data") // call 1st

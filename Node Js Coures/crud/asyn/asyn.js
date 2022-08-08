const fs = require("fs")

/*
// ------file is create
fs.writeFile("asynFile.txt", "today is awesome day", (error) => {
  console.log("file is created")
  console.log(error)
})
*/
/* 
callback function ==>
 (error) => {
  console.log("file is created")
  console.log(error)
}
*/

/*
// ------multiple data added  
fs.appendFile("asynFile.txt", "mu channel hello", (error) => {
  console.log("task is completed")
})
*/
fs.readFile("asynFile.txt", "utf-8", (error, data) => {
  console.log(data)
})

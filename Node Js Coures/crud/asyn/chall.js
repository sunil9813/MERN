const fs = require("fs")
/*
 file created
fs.mkdir("sunil", (err) => {
  console.log("floder created 😀")
})
 

// file create
fs.writeFile("./sunil/bio.txt", "my name is sunil", (ero) => {
  console.log("file is created 😀")
})
 

// multiple data add
fs.appendFile("./sunil/bio.txt", " plz like and share ", (err) => {
  console.log("multiple data is write 😀")
})
 

// read data
fs.readFile("./sunil/bios.txt", "utf-8", (err, data) => {
  //console.log(err)
  console.log(data)
})
 

// rename file
fs.rename("./sunil/bio.txt", "./sunil/mybio.txt", (err) => {
  console.log("rename is done 😀")
})
 

// detele file
fs.unlink("./sunil/mybio.txt", (err) => {
  console.log("file is deleted 😢")
})
*/

//floder delete
fs.rmdir("./sunil", (err) => {
  console.log("floder is deleted 😢")
})

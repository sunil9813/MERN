//Step: 2
const fs = require("fs")

const data = {
  name: "sunil",
  age: 21,
  address: "ktm",
}
/*
//stringify () ==> object to json
//stringify () ==> chai used jaba hami lai object lai JSON ma convert garxa
const jsonData = JSON.stringify(data)
//console.log(jsonData.address) // yasto garna mildaina

// parse() => json to object
const objData = JSON.parse(jsonData)
console.log(objData)
*/

/* 
1: covert to JSON
2: next file ma add garne
3: readfile
4: convert back to js object original
5: show
*/

//Step: 1
const jsondata = JSON.stringify(data)

//Step: 3
/*fs.writeFile("json1.json", jsondata, (err) => {
  console.log("done")
})
*/
//Step: 4
/*fs.readFile("json1.json", "utf-8", (err, data) => {
  console.log(data)
})*/
fs.readFile("json1.json", "utf-8", (err, data) => {
  const orgdata = JSON.parse(data)
  console.log("This is JSON data: " + data)
  console.log(orgdata)
})

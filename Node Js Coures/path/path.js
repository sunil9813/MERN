const path = require("path")
console.log(path.dirname("E:/Node Js Coures/path/path.js"))
console.log(path.extname("E:/Node Js Coures/path/path.js"))
console.log(path.basename("E:/Node Js Coures/path/path.js"))
//console.log(path.parse("E:/Node Js Coures/path/path.js"))

const myPath = path.parse("E:/Node Js Coures/path/path.js")
console.log(myPath.name)

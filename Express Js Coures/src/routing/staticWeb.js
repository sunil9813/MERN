const path = require("path")
const express = require("express")
const app = express()

/*relative  path ==> ../../..(dont use it)
absolute path ==> use it
*/

//console.log(__dirname)
//console.log(path.join(__dirname, "../../pulic"))

const staticPath = path.join(__dirname, ".././public")

app.use(express.static(staticPath))

app.get("/", (req, res) => {
  res.send("hello")
})
app.listen(8000, () => {
  console.log("listeing to port 3000")
})

const path = require("path")
const express = require("express")
const app = express()

const staticPath = path.join(__dirname, "./views")

// to set the view engine
app.set("view engine", "hbs")
app.use(express.static(staticPath))

// top to bottom appar follow
app.get("/", (req, res) => {
  res.render("index")
})

//app.get("/", (req, res) => {
//  res.send("hello")
//})
app.listen(8000, () => {
  console.log("listeing to port 3000")
})

const express = require("express")
const app = express()
const port = process.env.PORT || 8000
const path = require("path")
const hbs = require("hbs")

//public static path
//console.log(path.join(__dirname, "../public"))

const staticPath = path.join(__dirname, "../public")
const temaplatesPath = path.join(__dirname, "../temaplates/views")
const partialsPath = path.join(__dirname, "../temaplates/partials")

app.use(express.static(staticPath))
app.set("views", temaplatesPath)
app.set("view engine", "hbs")
hbs.registerPartials(partialsPath)

// routing
app.get("/", (req, res) => {
  res.render("index")
})
app.get("/about", (req, res) => {
  res.render("about")
})
app.get("/weather", (req, res) => {
  res.render("weather")
})
app.get("*", (req, res) => {
  res.render("404error", {
    errorMsg: "Error 404 Page! Opps",
  })
})
app.listen(port, () => {
  console.log(`Listing to the port at ${port}`)
})

const express = require("express")
const app = express()

const port = 3000

app.get("/", (req, res) => {
  res.send("Home Page ")
})
app.get("/about", (req, res) => {
  res.send("About Page")
})
app.get("/service", (req, res) => {
  res.json([
    {
      id: 1,
      name: "sunil",
      page: "services",
    },
    {
      id: 2,
      name: "ram",
      page: "services",
    },
  ])
})
app.get("/contact", (req, res) => {
  res.send("Contact Page")
})
app.get("/tempeature", (req, res) => {
  res.write("<h1>Welcome To Tempeature Page</h1>")
  res.write("<h1>Tempeature Page</h1>")
  res.send()
})

app.listen(port, () => {
  console.log(`listen port no ${port}`)
})

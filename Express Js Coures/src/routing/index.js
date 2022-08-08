const express = require("express")
const path = require("path")
const app = express()
const port = 3000

//built in middleware
//console.log(path.join(__dirname, "../public/./Hotell/index.html"))

const staticPath = path.join(__dirname, "../public/./Hotell")
app.use(express.static(staticPath))

app.get("/", (req, res) => {
  res.send("hello world")
})

app.listen(port, () => {
  console.log(`Lesting to the port ${port}`)
})

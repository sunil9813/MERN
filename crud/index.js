const express = require("express")
const app = express()
const port = process.env.PORT || 5000
const Student = require("./src/model/students")

require("./src/db/connection")

app.use(express.json())

// yasle chai browswe ma result show garxa
app.get("/", (req, res) => {
  res.send("running nodejs")
})

//create a new students
app.post("/students", (req, res) => {
  const user = new Student(req.body)
  user
    .save()
    .then(() => {
      res.status(201).send(user)
    })
    .catch((e) => {
      res.status(400).send(e)
    })

  console.log(req.body)
  //res.send("hello")
})

app.listen(port, () => {
  console.log(`Connection is listen in ${port}`)
})

const mongoose = require("mongoose")

// connection creation and create a new db
mongoose
  .connect("mongodb://localhost:27017/test", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connection is sucessfull..."))
  .catch((err) => console.log(err))

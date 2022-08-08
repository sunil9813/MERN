const mongoose = require("mongoose")

// connection creation and create a new db
mongoose
  .connect("mongodb://localhost:27017/test", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connection is sucessfull..."))
  .catch((err) => console.log(err))
/*
 creating the attribute of table
 yadi database xa bhane testmai override garxa , xaina bhane new db create garxa
 Schema --> Schema ko kam chai hamro document ko structure lai create/define garne and other like deafult value ,validator etc
*/
const listSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  ctype: {
    type: String,
    // bulitin validator
    require: true,
    lowercase: true,
  },
  video: {
    type: Number,
    // user define validator
    validate(value) {
      if (value < 0) {
        throw new Error("Vidoe count should not be negative")
      }
    },
  },
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
})

/* 
collection create graxa 
model --> model chai help hunxa collection create garna lai
*/
const playlist = new mongoose.model("PlayList", listSchema)

// create or insert document/ data
/*const createDocument = async () => {
  try {
    //const dataPlaylist = new playlist({
    //  name: "MYSQL",
    //  ctype: "Database",
    //  video: 80,
    //  author: "Sunil",
    //  active: true,
    //})
    //const frontPlaylist = new playlist({
    //  name: "Tailwine css",
    //  ctype: "Style",
    //  video: 20,
    //  author: "Sunil",
    //  active: true,
    //})
    //const result = await reactPlaylist.save() // for single document create
    //const result = await playlist.insertMany([dataPlaylist, frontPlaylist])
    const result = await playlist.insertMany([frontPlaylist])
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}
createDocument()*/

/* 
--> maily save() le chai promise lai return garrko hunxa
--> but promise bhanda better chai async await ramro hunxa tara time chai lagaxa
*/
/*
//--------------- read data -------------------
const getDocument = async () => {
  //---- read all data
  //const result = await playlist.find()
  //---- ctype: "Database" ==> bhayako sabai data lai show garne
  //const result = await playlist.find({ ctype: "Database" })
  try {
    const result = await playlist.find({ ctype: "Database" }).select({ name: 1 })
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}

getDocument()
*/

// -----------Comparison Query Operators------------
/*const getDocument = async () => {
  // const result = await playlist.find({ video: { $gt: 20 } }).select({ name: 1 })
  //const result = await playlist.find({ video: { $gte: 20 } }).select({ name: 1 })
  //const result = await playlist.find({ video: { $eq: 20 } }).select({ name: 1 })
  //const result = await playlist.find({ ctype: { $in: ["Back End", "Database"] } }).select({ name: 1 })
  //const result = await playlist.find({ video: { $lt: 30 } }).select({ name: 1 })
  //const result = await playlist.find({ video: { $lte: 20 } }).select({ name: 1 })
  //const result = await playlist.find({ video: { $ne: 20 } }).select({ name: 1 })
  //const result = await playlist.find({ video: { $nin: [10, 80] } }).select({ name: 1 })
  console.log(result)
}
getDocument()*/
/*
// --------------Logical Query Operators------------
const getDocument = async () => {
  // const result = await playlist.find({ $or: [{ ctype: "Back End" }, { author: "ram" }] }).select({ name: 1 })
  //const result = await playlist.find({ $and: [{ ctype: "Back End" }, { author: "Sunil" }] }).select({ name: 1 })
  //const result = await playlist.find({ video: { $not: { $eq: 80 } } }).select({ name: 1 })

  const result = await playlist.find({ $nor: [{ name: "MYSQL" }, { video: 20 }] }).select({ name: 1 })
  console.log(result)
}
getDocument()
*/

/*// --------------sort and count------------
const getDocument = async () => {
  //const result = await playlist.find({ author: "Sunil" }).select({ name: 1 }).count()

  // ascending order according to alpete 1= asc or -1 = desc
  const result = await playlist.find({ author: "Sunil" }).select({ name: 1 }).sort({ name: 1 })
  console.log(result)
}
getDocument()*/

// --------------update query------------
/*const updateDocument = async (_id) => {
  try {
    //const result = await playlist.updateOne(
    const result = await playlist.findByIdAndUpdate(
      { _id },
      {
        $set: {
          name: "JWT Database",
        },
      }
    )
    console.log(result)
  } catch (error) {
    console.log(error)
  }
} 

updateDocument("62e65ddd865825bc3623e296")*/

/*// --------------delete query------------
const deleteDocument = async (_id) => {
  try {
    //const result = await playlist.deleteOne({ _id })
    const result = await playlist.findByIdAndDelete({ _id })
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

deleteDocument("62e4c99af4698a1e4412b559")*/

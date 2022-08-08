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
  ctype: String,
  video: Number,
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
const createDocument = async () => {
  try {
    const dataPlaylist = new playlist({
      name: "MYSQL",
      ctype: "Database",
      video: 80,
      author: "Sunil",
      active: true,
    })
    const frontPlaylist = new playlist({
      name: "CSS",
      ctype: "Style",
      video: 80,
      author: "Sunil",
      active: true,
    })
    //const result = await reactPlaylist.save() // for single document create
    const result = await playlist.insertMany([dataPlaylist, frontPlaylist])
    console.log(result)
  } catch (err) {
    console.log(err)
  }
}
createDocument()

/* 
--> maily save() le chai promise lai return garrko hunxa
--> but promise bhanda better chai async await ramro hunxa tara time chai lagaxa
*/

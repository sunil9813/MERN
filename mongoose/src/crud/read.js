const getDocument = async () => {
  //---- read all data
  //const result = await playlist.find()

  //---- ctype: "Database" ==> bhayako sabai data lai show garne
  //const result = await playlist.find({ ctype: "Database" })

  //const result = await playlist.find({ ctype: "Database" }).select({ name: 1 })
  const result = await playlist.find({ ctype: "Database" }).select({ name: 1 }).limit(1)
  console.log(result)

  // method 2 :
  /* 
    try {
    const result = await playlist.find({ ctype: "Database" }).select({ name: 1 })
    console.log(result)
  } catch (err) {
    console.log(err)
  }
  */
}

getDocument()

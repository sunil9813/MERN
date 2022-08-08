const updateDocument = async (_id) => {
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

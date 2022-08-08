const deleteDocument = async (_id) => {
  try {
    //const result = await playlist.deleteOne({ _id })
    const result = await playlist.findByIdAndDelete({ _id })
    console.log(result)
  } catch (error) {
    console.log(error)
  }
}

//deleteDocument("62e4c24a083598be97aeb745")
deleteDocument("62e4c99af4698a1e4412b559")

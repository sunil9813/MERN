const getDocument = async () => {
  // Greater than (20 bhanda mate bhako video lai show garne)
  const result1 = await playlist.find({ video: { $gt: 20 } }).select({ name: 1 })

  // Greater than or equal (20 bata sabai mate ko value)
  const result2 = await playlist.find({ video: { $gte: 20 } }).select({ name: 1 })

  // (20===20)
  const result3 = await playlist.find({ video: { $eq: 20 } }).select({ name: 1 })

  // multile filed lai assgined garna pauxa
  const result4 = await playlist.find({ ctype: { $in: ["Back End", "Database"] } }).select({ name: 1 })

  // 30 bhnada sano sabai lai print garxa
  const result5 = await playlist.find({ video: { $lt: 30 } }).select({ name: 1 })

  // <=20 sbai value print
  const result6 = await playlist.find({ video: { $lte: 20 } }).select({ name: 1 })

  // expact 20 sabai lai print
  const result7 = await playlist.find({ video: { $ne: 20 } }).select({ name: 1 })

  // 10 or 80 ma 80 ko xa db ma tei bhyara teyoo value lai show nagarne baki sabai value lai show garne
  const result8 = await playlist.find({ video: { $nin: [10, 80] } }).select({ name: 1 })

  console.log(result1)
  console.log(result2)
  console.log(result3)
  console.log(result4)
  console.log(result5)
  console.log(result6)
  console.log(result7)
  console.log(result8)
}
getDocument()

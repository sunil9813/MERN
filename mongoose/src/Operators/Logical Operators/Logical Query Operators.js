// --------------Logical Query Operators------------
const getDocument = async () => {
  // hamro bson ma ctype: "Back End" xa tara author: "ram" xaina tei bhayara 2 ota ma 1ota value match garxa document saga
  const result1 = await playlist.find({ $or: [{ ctype: "Back End" }, { author: "ram" }] }).select({ name: 1 })

  // ctype: "Back End" & author: "Sunil" 2 ota value match bhayo bhane matra o/p aauxa natra aaudina
  const result2 = await playlist.find({ $and: [{ ctype: "Back End" }, { author: "Sunil" }] }).select({ name: 1 })

  // yadi video ko value chai match xa 80 saga teyoo value chai not show baki value lai show garne
  const result3 = await playlist.find({ video: { $not: { $eq: 80 } } }).select({ name: 1 })

  //  match garrko value lai chai show gardaina
  //  const result4 = await playlist.find({ $nor: [{ ctype: "java" }, { author: "sita" }] }).select({ name: 1 })
  const result4 = await playlist.find({ $nor: [{ name: "MYSQL" }, { video: 20 }] }).select({ name: 1 })
  console.log(result)
  console.log(result1)
  console.log(result2)
  console.log(result3)
  console.log(result4)
}
getDocument()

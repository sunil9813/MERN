// api link ==> https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=a6c66318190d6c4eb54ce419ee7d3211

const http = require("http")
const fs = require("fs")
var request = require("request")

const homeFile = fs.readFileSync("home.html", "utf-8")

const replaceVal = (tempVal, orgVal) => {
  let temperature = tempVal.replace("{%tempval%}", orgVal.main.temp)
  temperature = temperature.replace("{%tempmin%}", orgVal.main.temp_min)
  temperature = temperature.replace("{%tempmax%}", orgVal.main.temp_max)
  temperature = temperature.replace("{%location%}", orgVal.name)
  temperature = temperature.replace("{%country%}", orgVal.sys.country)
  temperature = temperature.replace("{%tempStatus%}", orgVal.weather[0].main)
  return temperature
}
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    request("http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=a6c66318190d6c4eb54ce419ee7d3211")
      .on("data", (chunk) => {
        const objData = JSON.parse(chunk)
        const arrData = [objData]
        //console.log(arrData[0].main.temperature)
        const realTimeDate = arrData.map((val) => replaceVal(homeFile, val)).join("")
        res.write(realTimeDate)
        //console.log(realTimeDate)
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to error", err)
        console.log("end")
        res.end()
      })
  }
})
server.listen(8000, "127.0.0.1")

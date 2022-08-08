const http = require("http")
const fs = require("fs")

const server = http.createServer((request, response) => {
  const data = fs.readFileSync(`${__dirname}/userapi.json`, "utf-8")
  const objectData = JSON.parse(data)

  if (request.url == "/") {
    response.end("hello from the other sides")
  } else if (request.url == "/about") {
    response.end("hello from the about sides")
  } else if (request.url == "/contact") {
    response.end("hello from the contact sides")
  } else if (request.url == "/userapi") {
    /* fs.readFile(`${__dirname}/userapi.json`, "utf-8", (err, data) => {
      console.log(data)
      const objectData = JSON.parse(data)
      response.end(objectData[1].Description)
      //  response.end(data)
    })*/
    response.writeHead(200, { "content-type": "application/json" })
    response.end(objectData[1].Description)
  } else {
    response.writeHead(404, { "content-type": "text/html" })
    response.end("<h1>No page Found!</h1>")
  }
})

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000")
})

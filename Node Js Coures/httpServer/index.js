const http = require("http")

/*const server = http.createServer((request, response) => {
  response.end("hello from the other sides")
})

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000")
})
*/

const server = http.createServer((request, response) => {
  //console.log(request.url)
  if (request.url == "/") {
    response.end("hello from the other sides")
  } else if (request.url == "/about") {
    response.end("hello from the about sides")
  } else if (request.url == "/contact") {
    response.end("hello from the contact sides")
  } else {
    response.writeHead(404, { "Content-type": "text/html" })
    response.end("<h1>No page Found!</h1>")
  }
})

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000")
})

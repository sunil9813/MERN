const EventEmitter = require("events")
const { STATUS_CODES } = require("http")

const event = new EventEmitter()

/*event.on("SayMyName", () => {
  console.log("click")
})
event.on("SayMyName", () => {
  console.log("click click")
})
event.on("SayMyName", () => {
  console.log("click click click")
})

event.emit("SayMyName")*/

event.on("checkPage", (statusCode, msg) => {
  console.log(`status code is ${statusCode} and the page is ${msg}`)
})
event.emit("checkPage", 200, "ok")

const os = require("os")
console.log(os.arch())

const mem = os.freemem()
console.log(`${mem / 1024 / 1024 / 1024}`)

const Totalmem = os.freemem()
console.log(`${Totalmem}`)

console.log(os.hostname())
console.log(os.platform())
//console.log(os.networkInterfaces())
console.log(os.tmpdir())
console.log(os.release())
console.log(os.type())

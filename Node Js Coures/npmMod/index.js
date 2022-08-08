const chalk = require("chalk")
const validator = require("validator")

/*console.log(chalk.blue.underline("Hello world!"))
console.log(chalk.blue.inverse("Hello world!"))
console.log(chalk.green.inverse("success"))
console.log(chalk.red.inverse("false"))*/

const result = validator.isEmail("sunil@bk.com")
console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result))

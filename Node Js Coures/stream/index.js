const fs = require('fs')
const http = require('http')

const server = http.createServer()

server.on('request', (req,res) =>{
	/*----------Method : 1------------
	fs.readFile('input.txt', (err,data)=>{
		if(err) return console.log(err);
		res.end(data.toString());
	})
	*/
	// Method : 2
	const readStream = fs.createReadStream("input.txt")
	readStream.on('data',(chunkdata)=>{
       res.write(chunkdata)
	})
	readStream.on('end',() =>{
		res.end()
	})
	readStream.on('error',(err)=>{
		console.log(err);
		res.end('file not found')
	})
})

server.listen(8000,"127.0.0.1")
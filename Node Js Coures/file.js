const fs = require("fs")

/* ------------- creating the new file -------------*/
//fs.writeFileSync("read.txt", "welcome to nodejs world")

/* -------------  write data into file -------------*/
// yo garda chai override garxa file ko data lai but file chai feri create hudaina
//fs.writeFileSync("read.txt", "welcome to nodejs")

// yadi mero file data xa pale nai bhane feri data chai add garnu xa with replace
// previses data bhane
//fs.appendFileSync("read.txt", " I am sunil.")

/* ------------- read data from file -------------*/

/*const bufferData = fs.readFileSync("read.txt")
console.log(bufferData)
origin_data = bufferData.toString()
console.log(origin_data)*/
{
  /*
   node js le chai addition feature lai add garxa i.e buffer
   not avaiable in js
   buffer le chai store garxa bainary data lai
   while reading from a file or receiving packets over form newtor

  <Buffer 77 65 6c 63 6f 6d 65 20 74 6f 20 6e 6f 64 65 6a 73 49 20 61 6d 20 73 75 6e 69 6c 2e 20 49 20 61 6d 20 73 75 6e 69 6c 2e>  */
}

/* ------------- rename file -------------*/
fs.readFileSync("read.txt", "readwrite.txt")

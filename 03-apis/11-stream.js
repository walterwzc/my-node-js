const fs = require('fs')
const zlib = require('zlib')

/*const fileReadStream = fs.createReadStream('data.json')
const fileWriteStream = fs.createWriteStream('data1.json')

let count = 0
fileReadStream.on('data', (chunk) => {
  // console.log(`${++count} ${chunk}`);
  fileWriteStream.write(chunk)
})

fileReadStream.on('end', () => {
  console.log('done.');
})

fileReadStream.on('error', (err) => {
  console.log(err);
})*/

const fileReadStream = fs.createReadStream('data.json')
const fileWriteStream = fs.createWriteStream('data.gz')

fileReadStream
  .pipe(zlib.createGzip())
  .pipe(fileWriteStream)

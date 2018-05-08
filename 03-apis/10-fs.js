const fs = require('fs')

/*fs.stat('./01-url.js', (err, stat) => {
  if (err) {
    console.log(err);
  } else {
    console.log(stat);
    console.log(stat.isFile());
    console.log(stat.isDirectory());
  }
})*/

/*fs.mkdir('logs', (err, dir) => {
  if (err) {
    console.log(err);
  } else {
    console.log('目录创建成功');
  }
})*/

// fs.mkdirSync('logs2')

/*fs.writeFile('./logs/hello.txt', 'hi', (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('文件写入成功。');
  }
})*/

/*fs.appendFile('./logs/hello.txt', 'good morning', (err) => {
  console.log('ok');
})*/

/*fs.readFile('./logs/hello.txt', 'utf8' ,(err, data) => {
  console.log(data);
})
*/

/*fs.readdir('./logs', (err, dir) => {
  console.log(dir);
})*/

/*fs.rename('./logs/hello.txt', './logs/greeting.html', (err) => {
  console.log('ok');
})*/

/*fs.rmdir('./logs3', (err) => {
  if (err) {
    console.log(err);
  }
})*/

/*fs.readdirSync('./logs').map((file) => {
  fs.unlink(`./logs/${file}`, (err) => {
    console.log('unlink succ');
  })
})*/

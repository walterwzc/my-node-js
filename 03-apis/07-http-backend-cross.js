const http = require('http')
const https = require('https')

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'})
  getData().then((data) => {
    response.write(JSON.stringify(data))
    response.end()
    console.log(data);
  })
})

// server.on('request', (request, response) => {
//   getData().then((data) => {
//     response.write(JSON.stringify(data))
//     response.end()
//     console.log(data);
//   })
// })

server.listen(8005, 'localhost', () => {
  console.log('server is running at http://localhost:8005');
})

const getData = () => {
  return new Promise((resolve, reject) => {
    https.get('https://api.douban.com/v2/movie/top250', (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];

      let error;
      if (statusCode !== 200) {
        error = new Error('请求失败。\n' +
        `状态码: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) { //application/json;charset=utf-8
        error = new Error('无效的 content-type.\n' +
        `期望 application/json 但获取的是 ${contentType}`);
      }
      if (error) {
        console.error(error.message);
        // 消耗响应数据以释放内存
        res.resume();
        return;
      }

      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk;});
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          console.log(parsedData);
          resolve(parsedData)
        } catch (e) {
          console.error(e.message);
        }
      });
    }).on('error', (e) => {
      console.error(`错误: ${e.message}`);
    });
  })
}

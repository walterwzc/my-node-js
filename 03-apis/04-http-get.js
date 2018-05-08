
const https = require('https')

https.get('https://api.douban.com/v2/movie/top250', (response) => {
  const { statusCode } = response;
  const contentType = response.headers['content-type'];

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
    response.resume();
    return;
  }

  response.setEncoding('utf8');
  let rawData = '';
  response.on('data', (chunk) => { rawData += chunk;});
  response.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      console.log(parsedData);
    } catch (e) {
      console.error(e.message);
    }
  });
}).on('error', (e) => {
  console.error(`错误: ${e.message}`);
});

const https = require('https')
const querystring = require('querystring')

const postData = querystring.stringify({
  address: 'hack',
  type: 'buy',
  contact: 'dd',
  message: 'dd',
  longitude: 116.228311,
  latitude: 40.224621
});

console.log(postData)

const options = {
  hostname: 'ik9hkddr.qcloud.la',
  port: 443,
  path: '/weapp/trade/add_item',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = https.request(options, (res) => {
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`响应主体: ${chunk}`);
  });
  res.on('end', () => {
    console.log('响应中已无数据。');
  });
});

req.on('error', (e) => {
  console.error(`请求遇到问题: ${e.message}`);
});

// 写入数据到请求主体
req.write(postData);
req.end();

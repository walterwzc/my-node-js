const cheerio = require('cheerio')
const https = require('https')

const options = {
  hostname: 'www.lagou.com',
  port: 443,
  path: '/',
  method: 'GET'
};

const req = https.request(options, (res) => {
  let html = ''
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    html += chunk
  });
  res.on('end', () => {
    // console.log(html);
    const $ = cheerio.load(html)
    console.log($('.category-list h2').text())
  });
});

req.on('error', (e) => {
  console.error(`请求遇到问题: ${e.message}`);
});

req.end();

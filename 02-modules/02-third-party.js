const request = require('request')

request('https://api.douban.com/v2/movie/top250', (error, response, body) => {
  console.log(JSON.parse(body))
})

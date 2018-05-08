const http = require('http')

const server = http.createServer((request, response) => {
  response.writeHead(200, {'Content-Type': 'text/html'})
  response.write('<b>aaa</b>')
  response.end()
})

server.listen(8006, 'localhost', () => {
  console.log('server is running at http://localhost:8006');
})

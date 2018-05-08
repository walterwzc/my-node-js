const http = require('http')
const fs = require('fs')


// Server 端虽然也建立了路由，但是是为了把 app.js 和 index.html 文件 挂载在路径之上。


// 而 app.js 是为了实现 hash 路由， 根据 hash的不同而显示不同的内容，实现单页面应用。

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    switch (req.url) {
        case '/app.js':
            res.end(fs.readFileSync('./app.js', 'utf-8'))
            break;
        case '/':
            res.end(fs.readFileSync('./index.html', 'utf-8'))
            break;
    }
})

server.listen(7071, 'localhost', () => {
    console.log('localhost:7071');
})
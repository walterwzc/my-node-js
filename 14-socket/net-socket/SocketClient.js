var net = require('net')
var port = 9000
var host = '127.0.0.1'

var client = new net.Socket()
client.setEncoding = 'UTF-8'

// 连接服务器
client.connect(port, host, function () {
    client.write('您好')
})

client.on('data', function (data) {
    console.log('' + data);
    say()
})

client.on('error', function (err) {
    console.log('error' + err);
})

client.on('close', function () {
    console.log('connection closeed');
})

const readline = require('readline')

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function say() {
    r1.question('请输入：', (inputStr) => {
        if (inputStr != 'bye') {
            client.write(inputStr + '\n')
        } else {
            client.destroy() //关闭连接
            r1.close()
        }
    })
}
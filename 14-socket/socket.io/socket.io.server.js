var server = require('http').createServer();
var io = require('socket.io')(server);

io.on('connection', function (client) {
    client.on('event server', function (data) {
        client.emit('event client', {
            message: data
        });

        client.broadcast.emit('event client', {
            message: 'data'
        });
    });

    client.on('disconnect', function () {
        console.log('下线了');
    });
});

server.listen(9002, function() {
    console.log('the socket server is started at 9002');
});
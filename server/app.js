const express = require('express');
const app = express();


server = app.listen(3001, function(){
    console.log('server is running on port 3001')
});

const io = require('socket.io')(server);

io.on('connection', function(socket) {
    console.log(socket.id);
    socket.on('pickid', function(data) {
        io.emit('pid', data)
    });
    socket.on('banid', function(data) {
        io.emit('bid', data)
    });
    socket.on('changeplayer', function(data) {
        io.emit('player', data)
    });
    socket.on('nbturn', function(data) {
        io.emit('turn', data)
    });
    socket.on('timer', function(data) {
        io.emit('time', data)
    });
});
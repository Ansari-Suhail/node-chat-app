const express = require('express');
const app = express();
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');
const {generateMessage} = require('./utils/message.js');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));

var server = http.createServer(app);
var io = socketIO(server);

io.on('connect', (socket)=>{
  console.log('User connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  socket.on('createMessage', (message, callback)=>{
    console.log('createMessage', message);

    io.emit('newMessage', generateMessage(message.from, message.text));
    callback();
  });

  socket.on('disconnect', ()=>{
    console.log('User disconnected');
  });
});


server.listen(port, (err, resp)=>{
  console.log(`listening on port ${port}`);
});

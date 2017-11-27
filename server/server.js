const express = require('express');
const app = express();
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));

var server = http.createServer(app);
var io = socketIO(server);

io.on('connect', (socket)=>{
  console.log('User connected');

  /*socket.emit('newEmail', {
    from: 'suhail',
    text: 'hey! This is suhail',
    message: 'from server'
  });

  socket.on('createEmail',(newEmail)=>{
    console.log({newEmail});
  });*/

  socket.emit('newEmail',{
    from: 'Admin',
    text: 'Welcome to chat app'
  });

  socket.broadcast.emit('newEmail', {
    from: 'admin',
    text: 'new user joined'
  });

  socket.on('disconnect', ()=>{
    console.log('User disconnected');
  });
});


server.listen(port, (err, resp)=>{
  console.log(`listening on port ${port}`);
});

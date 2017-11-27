var socket = io();

socket.on('connect', ()=>{
  console.log('Connected to server');
});

socket.on('newEmail', (email)=>{
  console.log('new email', email);
});

/*socket.emit('createEmail', {
  from: 'ansari',
  text: 'hey! This is ansari',
  message: 'from client'
});*/

socket.on('disconnect', ()=>{
  console.log('Disconnected from server');
});

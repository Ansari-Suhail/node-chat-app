var socket = io();

socket.on('connect', ()=>{
  console.log('Connected to server');
});

socket.on('disconnect', ()=>{
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message){
    console.log('new message==>>',message);
    var li = $('<li></li>');
    li.text(`${message.from} : ${message.text}`);
    $('#messages').append(li);
});

$('#formID').on('submit', function(e){
  e.preventDefault();

  var messageTextBox = $('#message');

  socket.emit('createMessage', {
    from : 'User',
    text : messageTextBox.val()
  }, function(){
    messageTextBox.val('');
  });

});

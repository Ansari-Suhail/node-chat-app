var socket = io();

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('new message==>>', message);

  var formattedTime = moment(message.createdAt).format('h:mm a');
  var template = $('#template').html();
  var rendered = Mustache.render(template, {
    from: message.from,
    text: message.text,
    createdAt: formattedTime
  });

  $('#messages').append(rendered);
});



$('#formID').on('submit', function(e) {
  e.preventDefault();

  var messageTextBox = $('#message');

  socket.emit('createMessage', {
    from: 'User',
    text: messageTextBox.val()
  }, function() {
    messageTextBox.val('');
  });

});

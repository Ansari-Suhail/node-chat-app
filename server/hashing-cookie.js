const express = require('express');
const cookieParser = require('cookie-parser');

const bcrypt = require('bcrypt');

var app = express();
app.use(cookieParser());

var id = '22';
var encryptedId;

bcrypt.hash(id, 10, (req, resp)=>{
  console.log('resp==>>',resp);
  encryptedId = resp;
});

app.get('/',(req, resp)=>{
  resp.cookie('id',encryptedId); // to set cookie in browser - key value needed
  // resp.clearCookie('id'); // to delete cookie from browser - only key needed
  resp.end('setting cookie');
});

app.listen(3000, ()=>{
  console.log('listen on port 3000');
})

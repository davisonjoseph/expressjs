var express = require('express');
var app = express();

app.get('/mysql_insert', function(req, res){
  res.send('hello world');
});

app.listen(8000);
console.log("Server running at 127.0.0.1:8000");

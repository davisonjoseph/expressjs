

var express = require('express');
var mysql = require('mysql');


var app = express();


/* mysql connection */
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : ''
});
connection.query('USE test');



/* Enable CORS for ajax cross domain issue */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



/* list users */
app.get('/mysql_select', function(request, response){
	var strQuery = "select * from my_table";			  
	connection.query( strQuery, function(err, rows){
	  	//response.send({users : rows});
	  	response.send(rows);
	  	//response.send('sdsd');
	  });
});


/* insert new user */
app.post('/mysql_insert', function(request, response){
	//console.log(request.body);
	var a = request.body;
	console.log(a.username);
});


app.listen(8000);
console.log("Server running at 127.0.0.1:8000");

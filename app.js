

var express = require('express');
var mysql = require('mysql');
var bodyParser = require("body-parser");




var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


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
	  	response.send(rows);
	  });
});


/* insert new user */


app.post('/mysql_insert', function(request, response){
	var a = request.body;
	var username = a.username;
	var password = a.password;
	var strQuery = "insert into my_table(username, password) values('"+username+"','"+password+"')";
	var stat = connection.query(strQuery);
	console.log(stat);

});


app.listen(8000);
console.log("Server running at 127.0.0.1:8000");

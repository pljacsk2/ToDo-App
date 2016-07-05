var express = require('express');
var app = express();

//define port for server
var PORT = process.env.PORT || 3000;
//define routing
app.all('/*', function(req, res){
	res.send('\
		<DOCTYPE html>\
		<html>\
			<head>\
				<title>Mean To Do App</title>\
			</head>\
			<body>\
				<h1>Hello</h1>\
				<script src="bundle.js"></script>\
			</body>\
		</html>\
	');
});

app.listen(PORT,function(){
	console.log("Server running on " + PORT);
})
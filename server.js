var express = require('express');
var app = express();

var middleWare ={
	requireAuthentication: function(req, res, next){
		console.log('private route hit!');
		next();
	},

	logger: function(req, res, next){
		console.log("Request: " + req.method + " " + req.originalUrl + " " + new Date().toString());
		next();
	}
}

app.use(middleWare.logger);

app.get('/About', function(req, res){
	res.send("About us!");
})

app.use(express.static(__dirname + "/public"));

app.listen(3000, function(){
	console.log('Express server started');
});
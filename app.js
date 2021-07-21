const express = require('express');
const app = express();
const fs = require('fs')


const server = app.listen(3000, () => {
    console.log('start server : localhost:3000');
});

app.get('/', function(req, res){
	fs.readFile('app.html', function(error, data){
		if(error){
			console.log(error);
		}else{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		}
	});
});


app.get('/address', function(req, res){
	fs.readFile('app2.html', function(error, data){
		if(error){
			console.log(error);
		}else{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		}
	});
});


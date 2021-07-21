var express = require('express'); // 웹 서버 사용
var app = express();
var fs = require('fs') // 파일 로드 사용
var user = require('/routes/user');
var port = 3000;


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

app.use('/user',user);

app.get('/app2', function(req, res){
	fs.readFile('app2.html', function(error, data){
		if(error){
			console.log(error);
		}else{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		}
	});
});



app.listen(port, function() => {
	console.log('Server Start, Port : ' + port);
});


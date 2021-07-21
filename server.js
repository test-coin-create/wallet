const express = require('express');
const app = express();
const fs = require('fs')
const path = require('path');
const morgan = require('morgan');
const Server = app.listen(3000, () => {
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

app.get('/address2', function(req, res){
	fs.readFile('app3.html', function(error, data){
		if(error){
			console.log(error);
		}else{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end(data);
		}
	});
});




app.use(morgan('dev')); 
app.use(express.json()); 
app.use(express.urlencoded({ extended : true}))

app.get('/address',(req,res)=>{
    res.sendFile(path.join(__dirname,'app2.html'))
});

app.post('/address',(req,res,next)=>{
    console.log(req.body);
    res.status(302).redirect('/');
}); 

app.get('/address2',(req,res)=>{
    res.sendFile(path.join(__dirname,'app3.html'))
});

app.post('/address2',(req,res,next)=>{
    console.log(req.body);
    res.status(302).redirect('/');
}); 



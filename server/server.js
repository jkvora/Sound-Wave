var express= require('express');
var path=require('path');
var bodyParser=require('body-parser');
var fs = require('fs');
var ytdl = require('ytdl-core');

var request=require('request');



//Init App Instance
var app=express();


//Get webapck details
var webpackconfig=require('../webpack.config.js');
var webpack=require('webpack');
var webpackDevMiddleware=require('webpack-dev-middleware');
var webpackHotMiddleware=require('webpack-hot-middleware');

//Consume webapck config json
var webpackcompiler=webpack(webpackconfig);

//Use middleware
app.use(webpackDevMiddleware(webpackcompiler,{
	noInfo:true,
	publicPath:webpackconfig.output.publicPath
}));
app.use(webpackHotMiddleware(webpackcompiler));   


/** bodyParser.urlencoded(options)
* Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
* and exposes the resulting object (containing the keys and values) on req.body
*/
app.use(bodyParser.json());



//Maintain Routes
app.use(express.static('../public'));
app.use('/dist', express.static(path.join(__dirname,'..','public', 'dist')));



app.get('/video',function(req,res){
	console.log("In youtube Routes");
	
	
	var strUrl=req.query.url;
	
	var ytstream=ytdl(strUrl);
	
	
	res.setHeader("Content-Type", "application/octet-stream"); 
	res.writeHead(200);
	
	ytstream.on('data',function(data){
		res.write(data);
	})
	
	ytstream.on('end',function(data){
		res.send();
	})
	
	ytstream.on('errror',function(data){
		res.status(404);
		res.send();
	})
	
})

//Path of base File to served
var filename = path.resolve(__dirname,'..','public','index.html');
app.use('/', function (req, res) {
	res.sendFile(filename);
});


//Server Listening....
var port=process.env.PORT || 3000;
app.listen(port,function(error){
	if(error) throw err;
	console.log("Server is running at port no "+port);
})
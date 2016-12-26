var express= require('express');
var path=require('path');

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


//Maintain Routes
app.use(express.static('../public'));
app.use('/dist', express.static(path.join(__dirname,'..','public', 'dist')));


//Path of base File to served
 var filename = path.resolve(__dirname,'..','public','index.html');
app.use('/', function (req, res) {
    res.sendFile(filename);
});


//Server Listening....
var port=3000;
app.listen(port,function(error){
    if(error) throw err;
    console.log("Server is running at port no "+port);
})
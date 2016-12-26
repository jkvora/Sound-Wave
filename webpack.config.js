var webpack=require('webpack');
var pathresolver=require('path');

//Constants
var BUILD_DIR=pathresolver.resolve(__dirname,'./public/scripts/client');
var APP_DIR=pathresolver.resolve(__dirname,'./public/dist');

//Export Module
module.exports={
    devtool:'inline-source-maps',
    entry: [
        'webpack-hot-middleware/client',
        BUILD_DIR+'/client.js'
    ],
    output:{
        path:APP_DIR,
        filename:'bundle.js',
        publicPath:'/'
    },
    plugins:[
        new webpack.optimize.OccurrenceOrderPlugin(),  
        new webpack.HotModuleReplacementPlugin(),  
        new webpack.NoErrorsPlugin()    
    ],
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                query:{
                     presets:['react','es2015','react-hmre'] 
                }

            }
        ]
    }
}

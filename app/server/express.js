'use strict';
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var config = require('../config.json');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var proxy = require('proxy-middleware');
var url = require('url');

var isProduction = process.env.NODE_ENV === 'production';
//var publicPath = path.join(__dirname, '..','..', 'assets');
var PORT = (isProduction ? process.env.PORT: config.DEV_PORT);
console.log("EXPERSS PORT: "+PORT);

// -------- my proxy----------------------
var app = express();
// proxy the request for static assets
app.use('/assets', proxy(url.parse('http://localhost:8081/assets')));

//app.use(require('marty-express')({
//    routes: require('../routes'),
//    application: require('../application').Application
//}));


app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});




if(!isProduction){
    //----- my-webpack-dev-server------------------
    var webpackServer = new WebpackDevServer(webpack(require('../../webpack.config')), {
        contentBase: __dirname,
        hot: true,
        quiet: false,
        noInfo: false,
        publicPath: "/assets/",

        stats: { colors: true }
    });

//run webpack hot reload server
    webpackServer.listen(8081, "localhost", function() {});
}
//run express server
app.listen(8080);


//AS SEEN here: http://stackoverflow.com/questions/26203725/how-to-allow-for-webpack-dev-server-to-allow-entry-points-from-react-router



//// We point to our static assets
//app.use(express.static(publicPath));
//
////We set the port
//app.set('port', PORT );
//
//app.use(morgan('dev'));
//app.use(bodyParser.json());



//if (!isProduction) {
//
//    // Any requests to localhost:3000/build is proxied
//    // to webpack-dev-server
//    app.all('/build/*', function (req, res) {
//        proxy.web(req, res, {
//            target: 'http://localhost:8080'
//        });
//    });
//}
//
//
//
//
//// And run the server
//app.listen(PORT, function () {
//    console.log('Server running on port ' + port);
//});
//


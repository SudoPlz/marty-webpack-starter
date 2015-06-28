    'use strict';
    var express = require('express');
    var path = require('path');
    var logger = require('morgan');
    var bodyParser = require('body-parser');
    var configFile = require('../config.json');
    var webpack = require('webpack');
    var WebpackDevServer = require('webpack-dev-server');
    var proxy = require('proxy-middleware');
    var url = require('url');
    var webpackConfig = require('../../webpack.config');
    var morgan = require('morgan');
    var bodyParser = require('body-parser');

    var isProduction = process.env.NODE_ENV === 'production';
    //var publicPath = path.join(__dirname, '..','..', 'assets');

    // -------- my proxy----------------------
    var app = express();
    // proxy the request for static assets

    // now requests to '/assets' are proxied to 'http://localhost:8081/assets'
    app.use('/assets', proxy(url.parse('http://localhost:8081/assets')));



    app.use(function logErrors(err, req, res, next) {
            console.error(err.stack);
            next(err);
        }
    );

    //css folder
    app.set('styles', express.static(path.join(__dirname, '..', 'styles')));

    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

    var PORT = (isProduction ? process.env.PORT: configFile.DEV_PORT);
    app.set('port', process.env.PORT || configFile.DEV_PORT);



    app.use(morgan('dev'));
    app.use(bodyParser.json());
    app.use(require('marty-express')({
        routes: require('../routes'),
        application: require('../application'),
        rendered: function (result) {
            console.log('Rendered ' + result.req.url);
        }

    }));

    //app.get('/*', function(req, res) {
    //    //res.sendFile(__dirname + '/index.html');
    //      res.render('index');//, {body: 'YO bro', state:'ok'});
    //});


    //console.log('webpackConfig.output.publicPath: '+webpackConfig.output.publicPath);


    if(!isProduction){
        //----- my-webpack-dev-server------------------
        var webpackServer = new WebpackDevServer(webpack(webpackConfig), {
            //contentBase: __dirname,
            hot: false,
            inline: false,
            quiet: true,
            noInfo: false,
            headers: { 'Access-Control-Allow-Origin': '*' },
            publicPath: '/assets/',


            stats: { colors: true }
        });

        //run webpack hot reload server
        webpackServer.listen(8081, 'localhost', function (err) {
            if(err) {
                return console.log(err);
            }
        });
    }


    module.exports = app;

    //AS SEEN here: http://stackoverflow.com/questions/26203725/how-to-allow-for-webpack-dev-server-to-allow-entry-points-from-react-router



